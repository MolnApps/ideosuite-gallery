import Hydrator from "./Hydrator.js"

class FormatHydrator extends Hydrator
{
    constructor(formats) {
        super()

        this.formats = Array.isArray(formats) 
            ? formats
            : [formats]
    
        this.currentFormat = 0
    }

    hydrate(item) {
        item.format = this.formats[this.currentFormat]
        this.currentFormat ++
        
        if (this.currentFormat == this.formats.length) {
            this.currentFormat = 0
        }

        return item
    }
}

export default FormatHydrator