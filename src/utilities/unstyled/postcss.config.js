module.exports = {
  plugins: [
    require('postcss-import'),
    require('tailwindcss')('./src/utilities/unstyled/tailwind.config.js'),
    require('postcss-nested')({
      "bubble": [
        "screen"
      ]
    }),
    require('autoprefixer'),
    require('cssnano')({
      "preset": [
        "default",
        {
          "mergeRules": false,
          "normalizeWhitespace": false,
        }
      ]
    }),
  ]
}
