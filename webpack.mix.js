let mix = require('laravel-mix');

mix
    .css('./src/css/app.css', '/css')
    .js('./src/js/app.js', '/js')
    .setPublicPath('./docs');