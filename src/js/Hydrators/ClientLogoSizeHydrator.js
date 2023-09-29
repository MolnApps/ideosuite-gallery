import Hydrator from "./Hydrator.js"
import clients from './../clients.js'

class ClientLogoSizeHydrator extends Hydrator
{
    constructor(expectedArea = null) {
        super()

        this.expectedArea = expectedArea 
            ? expectedArea 
            : 75 * 75
    }

    hydrate(item) {
        var client = this.isProject(item)
            ? this.findClientForProject(item)
            : item

        if ( ! client) {
            return item
        }
        
        item['client:title'] = client.title
        item['client:logo:src'] = client.logo.src
        item['client:logo:width'] = Math.round(Math. sqrt(this.expectedArea * client.logo.width / client.logo.height))
        item['client:logo:height'] = Math.round(Math. sqrt(this.expectedArea * client.logo.height / client.logo.width))

        return item
    }

    findClientForProject(item) {
        return clients.find(
            (client) => { 
                return client.slug == item.client 
            }
        )
    }
    
    isProject(item) {
        return Object.keys(item).includes('client')
    }
}

export default ClientLogoSizeHydrator