import Hydrator from "./Hydrator.js"

class ProjectHtmlHydrator extends Hydrator
{
    hydrate(item) {
        item['html'] = this.getHtml()

        return item
    }

    getHtml() {
        return `<div class="masonry-grid-item" data-js="project" data-js-previews="{previews:json}">
            <div class="image-box">
                <div data-js="project-preview" class="preview preview--default">
                    <img src="{previews:static:src}" alt="" class="picture image-box-animate-slow">
                </div>
                <div class="image-box-info image-box-animate-slow">
                    {html:logo}
                    <div class="details">
                        <h3 class="image-box-animate title">{title}</h3>
                        <span class="image-box-animate client">{client:title}</span>
                    </div>
                    <p class="image-box-animate description">{description}</p>
                    <a href="{url}" class="link">
                        <span>View Project</span>
                    </a>
                </div>
            </div>
        </div>`
    }
}

export default ProjectHtmlHydrator