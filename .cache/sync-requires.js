
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Users/aryabastani/Documents/Website/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/Users/aryabastani/Documents/Website/src/pages/404.js")),
  "component---src-pages-about-js": preferDefault(require("/Users/aryabastani/Documents/Website/src/pages/about.js")),
  "component---src-pages-blog-js": preferDefault(require("/Users/aryabastani/Documents/Website/src/pages/blog.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/aryabastani/Documents/Website/src/pages/index.js")),
  "component---src-pages-projects-js": preferDefault(require("/Users/aryabastani/Documents/Website/src/pages/projects.js"))
}

