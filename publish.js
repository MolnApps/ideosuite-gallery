#!/usr/bin/node

import fs from 'fs'

import GridFactory from './src/js/GridFactory.js'
import PortfolioGridTemplate from './src/js/Templates/PortfolioGridTemplate.js'
import ClientsGridTemplate from './src/js/Templates/ClientsGridTemplate.js'

import projects from './src/js/projects.js'
import selectedClients from './src/js/selectedClients.js'

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

new HtmlWriter().write({
    mixManifest: './docs/mix-manifest.json',
    source: './src/views/index.html',
    destination: './docs/index.html'
}, {
    title: 'Ideosuite Gallery',
    'html:clients': new GridFactory().html(
        selectedClients, 
        new ClientsGridTemplate()
    ),
    'html:projects': new GridFactory().html(
        projects,
        new PortfolioGridTemplate()
    ),
})