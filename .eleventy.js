module.exports = function(eleventyConfig) {
    // Copy static assets
    eleventyConfig.addPassthroughCopy({"src/assets": "assets"});
    eleventyConfig.addPassthroughCopy({"src/css": "css"});
    eleventyConfig.addPassthroughCopy({"src/js": "js"});
    eleventyConfig.addPassthroughCopy({"node_modules/bootstrap/dist/js/bootstrap.bundle.min.js": "js/bootstrap.bundle.min.js"});

    // Base config
    return {
        dir: {
            input: "src",
            output: "_site",
            includes: "_includes",
            layouts: "_layouts"
        },
        templateFormats: ["html", "njk", "md"],
        htmlTemplateEngine: "njk",
        markdownTemplateEngine: "njk"
    };
}; 