class VideoGrid {
    constructor(selector) {
        console.log('yolo')
        this.selector = selector

        this.videoFrequency = 2
        this.currentVideo = 0
    }

    attach() {
        var allItems = document.querySelectorAll(this.selector)

        allItems = [...allItems].map((item) => {
            return new VideoGridItem(item)
        })
        
        this.videoFrequency = this.calculateVideoFrequency(allItems)
        this.currentVideo = Math.floor(Math.random() * this.videoFrequency)

        allItems.forEach((item) => {
            if (this.shouldActivateVideo()) {
                item.replaceImageWithVideo()
            }
        
            this.tallyCurrentVideo()
        })
    }

    calculateVideoFrequency(allItems) {
        var animatedItems = allItems.filter((item) => {
            return item.hasAnimatedPreview()
        })

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
}

class VideoGridItem {
    constructor (item) {
        this.item = item

        this.delegates = [
            new Html5Video(),
            new VimeoVideo()
        ]

        this.animatedPreviews = this.getAllPreviews()
            .map(this.assignMatchingDelegate.bind(this))
            .filter(this.onlyAnimatedPreviews.bind(this))
    }

    getAllPreviews() {
        return JSON.parse(
            decodeURIComponent(
                this.item.getAttribute('data-js-previews')
            )
        )
    }

    assignMatchingDelegate(preview) {
        return Object.assign(
            preview, 
            { delegate: this.getFirstMatchingDelegate(preview) }
        )
    }

    onlyAnimatedPreviews(preview) {
        return preview.delegate !== undefined
    }

    replaceImageWithVideo() {
        if ( ! this.hasAnimatedPreview()) {
            return
        }

        var image = this.item.querySelector('img')
        var preview = this.getFirstAnimatedPreview()

        image.outerHTML = preview.delegate.getHtml(preview)
    }

    hasAnimatedPreview() {
        return this.animatedPreviews.length > 0
    }

    getFirstAnimatedPreview() {
        return this.animatedPreviews[0]
    }
    
    getFirstMatchingDelegate(preview) {
        return this.delegates.find((delegate) => {
            return delegate.matches(preview)
        })
    }
}

class Video {
    getHtml (preview) {
        return this.getHtmlTemplate().replace(
            '{src}', 
            preview.src
        )
    }
}

class Html5Video extends Video {
    matches(preview) {
        return preview.src.includes('.mp4') 
    }

    getHtmlTemplate() {
        return `<video autoplay loop muted playsinline controls="false" class="picture">
            <source src="{src}" type="video/mp4">
        </video>`
    }
}

class VimeoVideo extends Video {
    matches(preview) {
        return preview.src.includes('vimeo')
    }

    getHtmlTemplate() {
        return `<div class="vimeo-video"><div class="vimeo-wrap">
            <iframe 
                src="https://player.vimeo.com/video/883214419?background=1" 
                width="960" 
                height="540" 
                frameborder="0" 
                allow="autoplay; fullscreen"
                allowFullScreen
            >
            </iframe>
        </div></div>`
    }
}

export default VideoGrid