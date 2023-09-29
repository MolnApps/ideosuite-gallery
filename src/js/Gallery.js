import VideoGrid from './VideoGrid'

class Gallery {
    constructor(options) {
        this.selector = options.selector
        this.itemSelector = options.itemSelector
        this.masonry = options.masonry
    }

    attach() {
        if ( ! this.isTouchDevice()) {
            this.activateImageBox()
            this.activateVideoGrid()
        }

        this.activateMasonry()
    }

    activateImageBox() {
        document.querySelector(this.selector).classList.add('image-box-active')
    }

    activateVideoGrid() {
        new VideoGrid(this.itemSelector).attach()
    }

    activateMasonry() {
        new Masonry(this.selector, this.masonry);
    }

    isTouchDevice() {
        return (navigator.maxTouchPoints || 'ontouchstart' in document.documentElement)
    }
}

export default Gallery