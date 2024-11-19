module.exports = {
  plugins: [require("autoprefixer"),
    purgecss({
      content: ['./**/*.astro', './**/*.html', './**/*.js', './**/*.jsx', './**/*.tsx'],
    })
  ],
};
