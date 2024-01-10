const format = require('date-fns/format')
module.exports = function(eleventyConfig) {
  eleventyConfig.addFilter('date', function (date, dateFormat) {
    return format(date, dateFormat)
  });
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
      output: 'dist',
    },
    templateFormats: ['md', 'njk', 'html'],
    markdownTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
  };
}
