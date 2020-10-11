import { ILink, Link } from './common/link'
import { GenericObject, IGenericObject } from './generic'

export interface IGenericLinkedObject extends IGenericObject {
  links?: (Link | ILink)[]
}

export class GenericLinkedObject extends GenericObject implements IGenericLinkedObject {
  public links?: Link[]

  constructor(resp?: IGenericLinkedObject) {
    super(resp)

    if (resp) {
      if (resp.links) {
        this.setLinks(resp.links)
      }
    }
  }

  setLinks(links: (Link | ILink)[]) {
    this.links = links.map((link) => new Link(link))
  }

  getLinks() {
    return this.links
  }
}
