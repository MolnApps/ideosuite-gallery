class VideoGrid {
    constructor(selector) {
        console.log('hello1')

        this.selector = selector

        this.videoHtml = `<video autoplay loop muted playsinline controls="false" class="picture">
            <source src="{src}" type="video/mp4">
        </video>`
        this.videoFrequency = 2
        this.currentVideo = 0
    }

    attach() {
        var allItems = document.querySelectorAll(this.selector)
        
        this.videoFrequency = this.calculateVideoFrequency(allItems)
        this.currentVideo = Math.floor(Math.random() * this.videoFrequency)

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
        
        if (this.currentVideo >= this.videoFrequency) {
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