class VideoGrid {
    constructor(selector) {
        this.selector = selector

        this.videoHtml = `<video autoplay loop muted controls="false" class="picture">
            <source src="{src}" type="video/mp4">
        </video>`
        this.videoEvery = 2
        this.currentVideo = 0
    }

    attach() {
        var allItems = document.querySelectorAll(this.selector)
        
        this.videoEvery = this.calculateVideoFrequency(allItems)
        this.currentVideo = Math.floor(Math.random() * this.videoEvery)

        allItems.forEach((item) => {
            if (this.hasAnimatedPreview(item) && this.shouldActivateVideo()) {
                this.replaceImageWithVideo(item)
            }
        
            this.tallyCurrentVideo()
        })
    }

    replaceImageWithVideo(item) {
        var image = item.querySelector('img')
        
        image.outerHTML = this.videoHtml.replace(
            '{src}', 
            this.getAnimatedPreview(item).src
        )
    }

    calculateVideoFrequency(allItems) {
        var animatedItems = [...allItems].filter(this.hasAnimatedPreview.bind(this))
        var animatedToStaticRatio = animatedItems.length / allItems.length
        
        return Math.round(1 / animatedToStaticRatio)
    }

    shouldActivateVideo() {
        return this.currentVideo == 0
    }

    tallyCurrentVideo() {
        this.currentVideo++
        
        if (this.currentVideo >= this.videoEvery) {
            this.currentVideo = 0
        }
    }
    
    hasAnimatedPreview(item) {
        return this.getAnimatedPreview(item) !== undefined
    }

    getAnimatedPreview(item) {
        return this.getPreviews(item).find(this.extensionIsMp4)
    }

    getPreviews(item) {
        return JSON.parse(
            decodeURIComponent(
                item.getAttribute('data-js-previews')
            )
        )
    }

    extensionIsMp4(preview) {
        return preview.src.includes('.mp4') 
    }
}

export default VideoGrid