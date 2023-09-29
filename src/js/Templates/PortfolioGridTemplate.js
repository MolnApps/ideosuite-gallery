import DefaultAttributesHydrator from '../Hydrators/DefaultAttributesHydrator'
import ClientLogoHtmlHydrator from '../Hydrators/ClientLogoHtmlHydrator'
import ClientLogoSizeHydrator from '../Hydrators/ClientLogoSizeHydrator'
import FormatHydrator from '../Hydrators/FormatHydrator'
import PreviewsHydrator from '../Hydrators/PreviewsHydrator'
import ProjectHtmlHydrator from '../Hydrators/ProjectHtmlHydrator'
import ReplaceTokensHydrator from '../Hydrators/ReplaceTokensHydrator'

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