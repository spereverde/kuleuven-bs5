module.exports = function (eleventyConfig) {
  // Output directory: _site
  eleventyConfig.addPassthroughCopy("img");
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("js");
  eleventyConfig.addPassthroughCopy("node_modules/bootstrap/dist");
};
