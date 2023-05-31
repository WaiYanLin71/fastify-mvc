const mix = require('laravel-mix');
const path = require('path');
require('mix-tailwindcss');
const rootDir = path.resolve(__dirname);
mix.setPublicPath(rootDir)
mix.postCss('resources/css/tailwind.css', 'public/assets/css/app.css')
.tailwind('./tailwind.config.js'),

mix.js('resources/js/app.js', 'public/assets/js/app.js')
.js('resources/js/user/index.js', 'public/assets/js/user/index.js')
.js('resources/js/auth/login.js', 'public/assets/js/auth/login.js')
.js('resources/js/user/create.js', 'public/assets/js/user/create.js')
.version()
