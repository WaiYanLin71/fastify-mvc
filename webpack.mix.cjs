const mix = require('laravel-mix');
const path = require('path');
const tailwindcss = require('tailwindcss');
const rootDir = path.resolve(__dirname);
mix.setPublicPath(rootDir)
mix.postCss('public/assets/css/tailwind.css', 'public/assets/css/index.css', [
    tailwindcss('tailwind.config.js'),
]).js('public/assets/app.js', 'public/assets/js/app.js').version()
