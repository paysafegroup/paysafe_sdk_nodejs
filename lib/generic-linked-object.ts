import { Link } from './common/link'
import { GenericObject } from './generic'

export class GenericLinkedObject extends GenericObject {
  public links?: Link[]

  constructor(resp) {
    super(resp)

    if (resp) {
      if (resp.links) {
        if (resp.links instanceof Array) {
          this.links = resp.links.map((link) => new Link(link))
        } else {
          this.links = resp.links
        }
      }
    }
  }

  setLinks(links: Link[]) {
    this.links = links
  }

  getLinks() {
    return this.links
  }
}
