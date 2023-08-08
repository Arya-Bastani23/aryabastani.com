"use strict";
exports.id = 560;
exports.ids = [560];
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

/***/ 4887:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5985);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9008);
// import React from "react"
// import Img from "gatsby-image"
// import Layout from "../components/Layout"
// import { graphql } from "gatsby"
// // import styles from '../styles/project-details.module.css'
// export default function ProjectDetails ({ data }) {
//   const title = data.mdx.frontmatter.title
//   return (
//     <Layout>
//       <div>
//         <h2>{title}</h2>
//         <h3>stack</h3>
//         <div>
//           {/* <Img fluid={} /> */}
//         </div>
//         {/* <div className={styles.html} dangerouslySetInnerHTML={} /> */}
//       </div>
//     </Layout>
//   )
// }
// export const query = graphql(`
//     query PostByID($post_id: String!) {
//             mdx(id: {eq: $post_id}) {
//                 frontmatter {
//                     title
//                 }
//         }
//     }
// `)
const Post=({data})=>{console.log(data);const title=data.mdx.frontmatter.title;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2",null,title),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3",null,"stack")));};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Post);const query="1788730892";

/***/ })

};
;
//# sourceMappingURL=component---src-templates-posts-js.js.map