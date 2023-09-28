import Hydrator from "./Hydrator"

class ReplaceTokensHydrator extends Hydrator
{
    constructor(key = 'html')
    {
        super()

        this.key = key
    }

    hydrate(item) {
        var tokens = Object.keys(item)
            
        for (var i = 0; i < tokens.length; i++) {
            item[this.key] = item[this.key].replaceAll(`{${tokens[i]}}`, item[tokens[i]])
        }

        return item
    }
}

export default ReplaceTokensHydrator