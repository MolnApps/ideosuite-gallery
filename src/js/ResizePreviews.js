import FormatHydrator from './Generators/Hydrators/FormatHydrator.js'

class ResizePreviews {
    constructor(options) {
        this.options = options
        this.cssClasses = {
            base: 'preview',
            default: 'preview--default',
            prefix: 'preview--'
        }
    }

    attach() {
        this.customizeCssClasses(
            this.hydrateFormats(
                this.getItems()
            )
        )
    }

    getItems() {
        var nodes = document.querySelectorAll(this.options.itemSelector)
        
        return [...nodes].map(
            (item) => {
                return { node: item }
            }
        )
    }

    hydrateFormats(items) {
        return new FormatHydrator(this.options.formats).hydrateAll(items)
    }

    customizeCssClasses(items) {
        items.forEach((item) => {
            var classList = item.node.classList
            
            if ( ! classList.contains(this.cssClasses.base)) {
                classList.add(this.cssClasses.base)
            }

            if (classList.contains(this.cssClasses.default)) {
                classList.replace(
                    this.cssClasses.default, 
                    this.cssClasses.prefix + item.format
                )
            } else {
                classList.add(
                    this.cssClasses.prefix + item.format
                )
            }
        })

        return items
    }
}

export default ResizePreviews