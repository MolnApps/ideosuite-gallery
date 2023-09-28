import Hydrator from "./Hydrator"

class ProjectHtmlHydrator extends Hydrator
{
    hydrate(item) {
        item['html'] = this.getHtml()

        return item
    }

    getHtml() {
        return `<div class="masonry-grid-item" data-js="project" data-js-previews="{previews:json}">
            <div class="image-box">
                <div class="preview preview--{format}">
                    <img src="{previews:static:src}" alt="" class="picture">
                </div>
                <div class="image-box-overlay">
                    {html:logo}
                    <div class="details">
                        <h3 class="title">{title}</h3>
                        <span class="client">{client:title}</span>
                    </div>
                    <p class="description">{description}</p>
                    <a href="{url}" class="link">
                        <span>View Project</span>
                    </a>
                </div>
            </div>
        </div>`
    }
}

export default ProjectHtmlHydrator