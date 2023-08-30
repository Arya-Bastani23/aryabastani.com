import React from "react";
import { ThemeProvider } from "styled-components";
import { MDXProvider } from "@mdx-js/react";
import { base, light_theme } from "./src/styles/theme.js";

// Define Theme -- Thanks patrick
// Eventually there will be some color switcher here
let color_theme = light_theme;
const theme = { ...base, colors: color_theme };

const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={theme}>
    <MDXProvider>{element}</MDXProvider>
  </ThemeProvider>
);
export default wrapRootElement;
