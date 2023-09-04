// import TeX from "@matejmazur/react-katex";
import React from "react";
import { ThemeProvider } from "styled-components";
import { MDXProvider } from "@mdx-js/react";
import { base, light_theme } from "./src/styles/theme.js";

// MDX Provider Setup
// Setting up components for MDXProvider

const components = {
  // div: (props) => {
  //   if (props.className.includes("math-display")) {
  //     import("katex/dist/katex.min.css");
  //     return <TeX block math={props.children} />;
  //   }
  //   return <div {...props} />;
  // },
  // span: (props) => {
  //   console.log(props);
  //   if (props.className.includes("math-inline")) {
  //     import("katex/dist/katex.min.css");
  //     return <TeX math={props.children} />;
  //   }
  //   return <span {...props} />;
  // },
};

// Define Theme -- Thanks patrick
// Eventually there will be some color switcher here
let color_theme = light_theme;
const theme = { ...base, colors: color_theme };

const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={theme}>
    <MDXProvider components={components}>{element}</MDXProvider>
  </ThemeProvider>
);
export default wrapRootElement;
