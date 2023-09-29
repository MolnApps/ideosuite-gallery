import fs from 'fs'

class HtmlWriter
{
    write(files, dictionary) {
        var html = this.replaceTokens(
            this.getSourceHtml(files.source), 
            this.dictionaryWithMixFiles(files.mixManifest, dictionary)
        )

        this.writeDestinationHtml(files.destination, html)
    }

    dictionaryWithMixFiles(mixManifest, dictionary)
    {
        var mixManifestData = this.getMixManifestDictionary(mixManifest)

        dictionary['js:app'] = mixManifestData['/js/app.js']
        dictionary['css:app'] = mixManifestData['/css/app.css']

        return dictionary
    }

    replaceTokens(html, dictionary) {
        Object.keys(dictionary).forEach(
            (key) => {
                html = html.replace('{' + key + '}', dictionary[key]);
            }
        )

        return html
    }

    getSourceHtml(source) {
        console.log(`Read source file [${source}]`)
        return fs.readFileSync(source, 'utf8')
    }

    getMixManifestDictionary(mixManifest) {
        console.log(`Read mix manifest file [${mixManifest}]`)
        return JSON.parse(
            fs.readFileSync(mixManifest, 'utf8')
        )
    }

    writeDestinationHtml(destination, html) {
        console.log(`Write destination file [${destination}]`)
        fs.writeFileSync(destination, html, 'utf8');
        console.log('Done')
    }
}

export default HtmlWriter