import Hydrator from "./Hydrator.js"

class DefaultAttributesHydrator extends Hydrator
{
    hydrate(item) {
        return Object.assign(this.getDefaultAttributes(), item)
    }

    getDefaultAttributes()
    {
        return { animated: '' }
    }
}

export default DefaultAttributesHydrator