import * as _request from 'request'
import { PaysafeAPIDetails } from './api-details'
import { PaysafeError as error } from './common/error'
import { PaysafeMethod } from './PaysafeMethod'

function prepareApiCredential(apiKey: string, apiPassword: string): string {
  const apiCredential = apiKey + ':' + apiPassword
  const apiCredBuffer = Buffer.from(apiCredential, 'utf8')
  return apiCredBuffer.toString('base64')
}

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

export function request(api: PaysafeAPIDetails, paysafeMethod: PaysafeMethod, requestObject, responseCallBack) {
  const reqHeaders = {
    'Content-Type': 'application/json; charset=utf-8',
    // 'Content-Length': requestJson.length,
    // 'X_TERMS_VERSION' : '1.1',
    'Authorization': 'Basic ' + prepareApiCredential(api.key, api.password),
  }
  const options = {
    headers: reqHeaders,
    uri: paysafeMethod.buildUrl(api.environment._host),
    method: paysafeMethod.method,
    body: requestObject ? JSON.stringify(requestObject) : '',
    pool: {
      maxSockets: api.environment.maxSockets,
    },
    timeout: api.environment.timeout,
  }

  _request(options, (errorResponse, response, body) => {
    // console.log("body request"+body);
    // to get x_terms_version
    // console.log(response.headers)
    if (!errorResponse && response.statusCode !== 503) {

      // in case of delete method the response is empty string
      if (body) {
        try {
          body = typeof (body) === 'string' ? deSerializeObject(body) : body
          responseCallBack(null, body)
        } catch (e) {
          responseCallBack(error.generate(e.code, 'Failed to parse body'), null)
        }
      } else {
        const delResp = {
          'status': response.statusCode,
        }
        responseCallBack(null, delResp)
      }
    } else {
      if (errorResponse) {
        responseCallBack(error.generate(errorResponse.code,
          'Connection error : No internet Connection available : '
          + errorResponse.syscall), null)
      } else {
        responseCallBack(error.generate(response.statusCode, body), null)
      }
    }
  })
}
