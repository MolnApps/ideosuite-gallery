import ClientLogoHtmlHydrator from "../Hydrators/ClientLogoHtmlHydrator"
import ClientLogoSizeHydrator from "../Hydrators/ClientLogoSizeHydrator"
import ReplaceTokensHydrator from '../Hydrators/ReplaceTokensHydrator'

class ClientsGridTemplate
{
    constructor() {
        this.hydrators = [
            new ClientLogoSizeHydrator,
            new ClientLogoHtmlHydrator,
            new ReplaceTokensHydrator
        ]
    }

    getHydrators() {
        return this.hydrators
    }
}

export default ClientsGridTemplate