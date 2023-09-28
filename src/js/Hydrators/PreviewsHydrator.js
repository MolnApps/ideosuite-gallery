import Hydrator from "./Hydrator"

class PreviewsHydrator extends Hydrator
{
    constructor() {
        super()

        this.videoFactor = 3
        this.currentVideo = Math.floor(Math.random() * this.videoFactor)
    }

    hydrate(item) {
        item['previews:json'] = encodeURIComponent(JSON.stringify(item.previews))
        item['previews:static:src'] = item.previews[0].src

        return item
    }
}

export default PreviewsHydrator