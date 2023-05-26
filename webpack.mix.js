
const mix = require('laravel-mix')

mix.js('./public/assets/app.js', './public/assets/js/app.js')
    .babelConfig({
        presets: ['@babel/preset-env']
    });;