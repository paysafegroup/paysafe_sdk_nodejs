import { IncomingMessage, OutgoingHttpHeaders } from 'http'
import { Agent, request as httpsRequest, RequestOptions } from 'https'
import { parse } from 'url'
import { PaysafeAPIDetails } from './api-details'
import { PaysafeError } from './common/error'
import { PaysafeMethod } from './PaysafeMethod'

const agent = new Agent()

function deSerializeObject(obj: string) {
  if (obj == null) {
    return ''
  } else if (isHtml(obj)) {
    return obj
  } else {
    return JSON.parse(obj)
  }
}

function isHtml(obj: string) {
  // Faster than running regex, if obj starts with `<` and ends with `>`, assume it's HTML
  if (obj.charAt(0) === '<' && obj.charAt(obj.length - 1) === '>' && obj.length >= 3) { return true }

  // Run the regex
  const quickExpr = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/
  const match = quickExpr.exec(obj)

  return !!(match && match[1])
}

export class GenericServiceHandler {
  constructor(protected api: PaysafeAPIDetails) {
  }

  protected debug(message: string) {
    if (this.api.logging) {
      if (this.api.logging === true) {
        // tslint:disable-next-line: no-console
        this.api.logging = console.log
      }
      this.api.logging(message)
    }
  }

  protected exception(message: string) {
    return PaysafeError.generate('400', `InvalidRequestException: ${message}`)
  }

  protected prepareApiCredential(apiKey = this.api.key, apiPassword = this.api.password): string {
    const apiCredential = apiKey + ':' + apiPassword
    const apiCredBuffer = Buffer.from(apiCredential, 'utf8')
    return apiCredBuffer.toString('base64')
  }

  protected async request(method: PaysafeMethod, requestObject?: any): Promise<any> {
    const request = await this.rawRequest(method, requestObject)

    if (request.response.statusCode === 503) {
      throw PaysafeError.generate(String(request.response.statusCode), request.body)
    }

    // if we had no body provided, this was most likely a delete request which returns nothing
    if (!request.body) {
      return { status: request.response.statusCode }
    } else {
      let response: any

      try {
        response = deSerializeObject(request.body)
      } catch (error) {
        throw PaysafeError.generate(error.code || 500, 'Failed to parse body')
      }

      if (response && response.error) {
        throw new PaysafeError(response.error)
      } else {
        return response
      }
    }
  }

  protected async rawRequest(method: PaysafeMethod, requestObject?: any): Promise<{ body: string, response: IncomingMessage }> {
    const reqHeaders: OutgoingHttpHeaders = {
      'Content-Type': 'application/json; charset=utf-8',
      // 'Content-Length': requestJson.length,
      // 'X_TERMS_VERSION' : '1.1',
      'Authorization': 'Basic ' + this.prepareApiCredential(),
    }

    const options: RequestOptions = {
      method: method.method,
      headers: reqHeaders,
    }

    const url = method.buildUrl(this.api.environment._host)
    const parsedUrl = parse(url)

    Object.assign(options, parsedUrl)
    options.host = parsedUrl.host
    options.port = parsedUrl.port
    options.protocol = parsedUrl.protocol
    options.agent = agent
    options.timeout = this.api.environment.timeout
    agent.maxSockets = this.api.environment.maxSockets

    let body: string | void

    if (requestObject) {
      body = JSON.stringify(requestObject)
    }

    this.debug(`PaySafe Request [${method.method} ${method.apiUrl}]: ${body ? '\n' + body : ''}`)

    return new Promise((resolve, reject) => {
      const req = httpsRequest(options, (res) => {
        res.setEncoding('utf8')
        let data = ''

        res.on('error', (err: Error) => {
          reject(PaysafeError.generate('500', `Connection error: ${err.message}`))
        })

        res.on('data', (chunk) => {
          data += chunk
        })

        res.on('end', () => {
          this.debug(`PaySafe Response [${method.method} ${method.apiUrl}]: ${res.statusCode} ${res.statusMessage}\n${data}`)

          resolve({
            response: res,
            body: data,
          })
        })
      })

      // post the data
      if (body) {
        req.write(body)
      }

      req.end()
    })
  }
}
