import Hydrator from "./Hydrator.js"
import ReplaceTokensHydrator from "./ReplaceTokensHydrator.js"

class ClientLogoHtmlHydrator extends Hydrator
{
    constructor(key = 'html')
    {
        super()

        this.key = key
    }

    hydrate(item) {
        item[this.key] = this.hasClient(item)
            ? this.getHtml()
            : this.getEmptyHtml()

        new ReplaceTokensHydrator(this.key).hydrate(item)

        return item
    }

    getHtml() {
        return `<div class="image-box-animate logo">
            <img 
                src="{client:logo:src}" 
                alt="{client:title}" 
                width="{client:logo:width}" 
                height="{client:logo:height}" 
            />
        </div>`
    }

    getEmptyHtml() {
        return '<div></div>'
    }

    hasClient(item) {
        return Object.keys(item).includes('client:title')
    }
}

export default ClientLogoHtmlHydrator