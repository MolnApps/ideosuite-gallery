import GridFactory from './GridFactory'
import PortfolioGridTemplate from './Templates/PortfolioGridTemplate'
import ClientsGridTemplate from './Templates/ClientsGridTemplate'
import Gallery from './Gallery'

import selectedClients from './selectedClients'
import projects from './projects'

new GridFactory('[data-js="projects"]').make(
    projects, 
    new PortfolioGridTemplate(['square', 'portrait'])
)

new GridFactory('[data-js="clients"]').make(
    selectedClients,
    new ClientsGridTemplate()
)

new Gallery({
    selector: '[data-js="projects"]',
    itemSelector: '[data-js="project"]',
    masonry: {
        itemSelector: '.masonry-grid-item',
        columnWidth: '.masonry-grid-sizer',
        gutter: '.masonry-gutter-sizer',
    }
}).attach()