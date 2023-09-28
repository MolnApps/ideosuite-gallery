let mix = require('laravel-mix');

mix
    .css('./src/css/app.css', '/css')
    .css('./src/css/clients.css', '/css')
    .js('./src/js/app.js', '/js')
    .setPublicPath('./public');