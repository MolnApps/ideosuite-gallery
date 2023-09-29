#!/usr/bin/node

import HtmlWriter from './src/js/Generators/HtmlWriter.js'
import PortfolioGridTemplate from './src/js/Generators/Templates/PortfolioGridTemplate.js'
import ClientsGridTemplate from './src/js/Generators/Templates/ClientsGridTemplate.js'

new HtmlWriter().write({
    mixManifest: './docs/mix-manifest.json',
    source: './src/views/index.html',
    destination: './docs/index.html'
}, {
    title: 'Ideosuite Gallery',
    'html:clients': new ClientsGridTemplate().html(),
    'html:projects': new PortfolioGridTemplate().html(),
})