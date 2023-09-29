import Masonry from 'masonry-layout/masonry.js'
import VideoGrid from './VideoGrid.js'
import ResizePreviews from './ResizePreviews.js'

class Gallery {
    constructor(options) {
        this.selector = options.selector
        this.itemSelector = options.itemSelector
        this.masonry = options.masonry
        this.previews = options.previews
    }

    attach() {
        if ( ! this.isTouchDevice()) {
            this.activateImageBox()
            this.activateVideoGrid()
        }

        this.resizePreviews()
        this.activateMasonry()
    }

    activateImageBox() {
        document.querySelector(this.selector).classList.add('image-box-active')
    }

    activateVideoGrid() {
        new VideoGrid(this.itemSelector).attach()
    }

    resizePreviews() {
        new ResizePreviews(this.previews).attach()
    }

    activateMasonry() {
        new Masonry(this.selector, this.masonry);
    }

    isTouchDevice() {
        return (navigator.maxTouchPoints || 'ontouchstart' in document.documentElement)
    }
}

export default Gallery