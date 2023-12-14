module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/vendor/");
  eleventyConfig.addPassthroughCopy("src/css/");
  eleventyConfig.addPassthroughCopy("src/font/");
  eleventyConfig.addPassthroughCopy("src/images/");
  eleventyConfig.addPassthroughCopy("src/img/");
  eleventyConfig.addPassthroughCopy("src/js/");
  eleventyConfig.addPassthroughCopy("src/vendor/");
  eleventyConfig.addPassthroughCopy("src/webfonts/");
  eleventyConfig.addPassthroughCopy("src/style.css");

  eleventyConfig.addWatchTarget("src/css/");
  eleventyConfig.addWatchTarget("src/style.css");
  eleventyConfig.addWatchTarget("src/js/");
  return {
    dir: {
      input: 'src',
      includes: '_includes',
      output: '_site',
    },
    templateFormats: ['md', 'njk', 'html'],
    markdownTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
  };
}
