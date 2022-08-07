import { EventHandler } from './EventHandler'

export class ShareButton {
  eventHandler: EventHandler

  constructor(readonly url: string) {
    this.eventHandler = new EventHandler()
  }

  bind(className: string, socialNetwork: string) {
    let link: string = ''

    if ('twitter' === socialNetwork) {
      link = `https://twitter.com/share?url=${this.url}`
    }

    if ('facebook' === socialNetwork) {
      link = `https://www.facebook.com/sharer.php?u=${this.url}`
    }

    if ('linkedin' === socialNetwork) {
      link = `https://www.linkedin.com/shareArticle?url=${this.url}`
    }

    this.eventHandler.addEventListenerToClass(className, 'click', () => window.open(link))
  }
}
