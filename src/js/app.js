import GridFactory from './GridFactory'
import PortfolioGrid from './Templates/PortfolioGrid'
import ClientsGrid from './Templates/ClientsGrid'
import VideoGrid from './VideoGrid'

import selectedClients from './selectedClients'
import projects from './projects'

new GridFactory('[data-js="projects"]').make(
    projects, 
    new PortfolioGrid(['square', 'portrait'])
)

new GridFactory('[data-js="clients"]').make(
    selectedClients,
    new ClientsGrid()
)
        
new Masonry('[data-js="projects"]', {
    itemSelector: '.masonry-grid-item',
    columnWidth: '.masonry-grid-sizer',
    gutter: '.masonry-gutter-sizer',
});

new VideoGrid('[data-js="project"]').attach()