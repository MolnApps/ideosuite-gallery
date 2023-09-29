import selectedClients from '../../../data/selectedClients.js'
import GridFactory from '../GridFactory.js'

import ClientLogoHtmlHydrator from '../Hydrators/ClientLogoHtmlHydrator.js'
import ClientLogoSizeHydrator from '../Hydrators/ClientLogoSizeHydrator.js'
import ReplaceTokensHydrator from '../Hydrators/ReplaceTokensHydrator.js'

class ClientsGridTemplate
{
    constructor() {
        this.hydrators = [
            new ClientLogoSizeHydrator,
            new ClientLogoHtmlHydrator,
            new ReplaceTokensHydrator
        ]
    }

    html() {
        return new GridFactory().html(selectedClients, this)
    }

    getHydrators() {
        return this.hydrators
    }
}

export default ClientsGridTemplate