let mix = require('laravel-mix');
let pdf = require('./pdf-export.js');

mix.postCss('css/main.css', 'dist/css', [
  require('tailwindcss'),
])
  .then(() => {
    pdf()
  })