export interface ILink {
  rel?: string
  href?: string
}

export class Link implements ILink {
  rel: string
  href: string

  constructor(resp?: ILink) {
    if (resp) {
      if (resp.rel) {
        this.rel = resp.rel
      }
      if (resp.href) {
        this.href = resp.href
      }
    }
  }

  setRel(rel: string) {
    this.rel = rel
  }

  getRel() {
    return this.rel
  }

  setHref(href: string) {
    this.href = href
  }

  getHref() {
    return this.href
  }
}
