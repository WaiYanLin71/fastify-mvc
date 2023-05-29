const mix = require('laravel-mix');
const path = require('path');
require('mix-tailwindcss');
const rootDir = path.resolve(__dirname);
mix.setPublicPath(rootDir)
mix.postCss('public/assets/css/tailwind.css', 'public/assets/css/index.css')
.tailwind('./tailwind.config.js'),

mix.js('public/assets/app.js', 'public/assets/js/app.js').version()
