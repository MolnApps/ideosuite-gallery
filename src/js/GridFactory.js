class GridFactory
{
    constructor(selector) {
        this.gridSizerMarkup = `
            <div class="masonry-grid-sizer"></div>
            <div class="masonry-gutter-sizer"></div>
        `
        this.selector = selector ? selector : '[data-js="grid"]'
        this.hydrators = []
    }

    make(projects, template) {
        this.hydrators = template.getHydrators()
        
        var items = this.hydrateAll(projects)
        
        document.querySelector(this.selector).innerHTML = this.getMarkup(items)
    }

    hydrateAll(items) {
        this.hydrators.forEach((hydrator) => {
            items = hydrator.hydrateAll(items)
        })

        return items;
    }

    getMarkup(items) {
        var markup = items.map((item) => {
            return item.html
        })

        markup.unshift(this.gridSizerMarkup)

        return markup.join('')
    }
}

export default GridFactory