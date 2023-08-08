"use strict";
exports.id = 853;
exports.ids = [853];
exports.modules = {

/***/ 9008:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ Layout)
});

// EXTERNAL MODULE: external "/Users/aryabastani/Documents/Website/node_modules/react/index.js"
var index_js_ = __webpack_require__(5985);
var index_js_default = /*#__PURE__*/__webpack_require__.n(index_js_);
// EXTERNAL MODULE: ./.cache/gatsby-browser-entry.js + 11 modules
var gatsby_browser_entry = __webpack_require__(7076);
;// CONCATENATED MODULE: ./src/components/Header.js
function Header(){const data=(0,gatsby_browser_entry.useStaticQuery)("426988268");const{title}=data.site.siteMetadata;return/*#__PURE__*/index_js_default().createElement("nav",null,/*#__PURE__*/index_js_default().createElement("h1",null,title),/*#__PURE__*/index_js_default().createElement("div",{className:"links"},/*#__PURE__*/index_js_default().createElement(gatsby_browser_entry.Link,{to:"/blog"},"Blog"),/*#__PURE__*/index_js_default().createElement(gatsby_browser_entry.Link,{to:"/projects"},"Projects")));}
;// CONCATENATED MODULE: ./src/components/Layout.js
function Layout({children}){return/*#__PURE__*/index_js_default().createElement("div",{className:"layout"},/*#__PURE__*/index_js_default().createElement(Header,null),/*#__PURE__*/index_js_default().createElement("div",{className:"content"},children),/*#__PURE__*/index_js_default().createElement("footer",null,/*#__PURE__*/index_js_default().createElement("p",null,"Designed and built by Arya Bastani. In whatever town I'm in right now.")));}

/***/ }),

/***/ 273:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home)
});

// EXTERNAL MODULE: external "/Users/aryabastani/Documents/Website/node_modules/react/index.js"
var index_js_ = __webpack_require__(5985);
// EXTERNAL MODULE: ./src/components/Layout.js + 1 modules
var Layout = __webpack_require__(9008);
// EXTERNAL MODULE: ./.cache/gatsby-browser-entry.js + 11 modules
var gatsby_browser_entry = __webpack_require__(7076);
;// CONCATENATED MODULE: ./src/styles/projects.module.css
// Exports
var box = "projects-module--box--65fad";

// EXTERNAL MODULE: ./node_modules/gatsby-image/index.js
var gatsby_image = __webpack_require__(6162);
;// CONCATENATED MODULE: ./src/pages/projects.js
function Home({data}){console.log(data);const projects=data.allMdx.nodes;const Box=({children})=>/*#__PURE__*/index_js_.createElement("div",{className:box},children,projects.map(project=>/*#__PURE__*/index_js_.createElement(gatsby_browser_entry.Link,{to:"/content/projects/"+project.frontmatter.slug,key:project.id},/*#__PURE__*/index_js_.createElement("div",null,/*#__PURE__*/index_js_.createElement(gatsby_image/* default */.Z,{fluid:project.frontmatter.thumb.childImageSharp.fluid}),/*#__PURE__*/index_js_.createElement("h3",null,project.frontmatter.title),/*#__PURE__*/index_js_.createElement("p",null,project.frontmatter.tags)))));return/*#__PURE__*/index_js_.createElement(Layout/* default */.Z,null,/*#__PURE__*/index_js_.createElement("h1",null,"Projects"),/*#__PURE__*/index_js_.createElement("p",null,"This some stuff I made."),/*#__PURE__*/index_js_.createElement(Box,null));}// Export page query
const query="115817052";

/***/ })

};
;
//# sourceMappingURL=component---src-pages-projects-js.js.map