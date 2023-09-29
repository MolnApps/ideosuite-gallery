import DefaultAttributesHydrator from '../Hydrators/DefaultAttributesHydrator.js'
import ClientLogoHtmlHydrator from '../Hydrators/ClientLogoHtmlHydrator.js'
import ClientLogoSizeHydrator from '../Hydrators/ClientLogoSizeHydrator.js'
import FormatHydrator from '../Hydrators/FormatHydrator.js'
import PreviewsHydrator from '../Hydrators/PreviewsHydrator.js'
import ProjectHtmlHydrator from '../Hydrators/ProjectHtmlHydrator.js'
import ReplaceTokensHydrator from '../Hydrators/ReplaceTokensHydrator.js'

class PortfolioGridTemplate
{
    constructor() {
        this.hydrators = [
            new DefaultAttributesHydrator(),
            new PreviewsHydrator(),
            new ClientLogoSizeHydrator(50 * 50),
            new ClientLogoHtmlHydrator('html:logo'),
            new ProjectHtmlHydrator(),
            new ReplaceTokensHydrator()
        ]
    }

    getHydrators()
    {
        return this.hydrators
    }
}

export default PortfolioGridTemplate