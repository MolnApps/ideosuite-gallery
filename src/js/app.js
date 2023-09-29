import Gallery from './Gallery.js'

new Gallery({
    selector: '[data-js="projects"]',
    itemSelector: '[data-js="project"]',
    masonry: {
        itemSelector: '.masonry-grid-item',
        columnWidth: '.masonry-grid-sizer',
        gutter: '.masonry-gutter-sizer',
    },
    previews: {
        itemSelector: '[data-js="project-preview"]',
        formats: ['square', 'portrait']
    }
}).attach()