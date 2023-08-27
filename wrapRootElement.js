import React from "react";
import { ThemeProvider } from "styled-components";
import { base, light_theme } from "./src/styles/theme.js";

// Define Theme -- Thanks patrick
// Eventually there will be some color switcher here
let color_theme = light_theme;
const theme = { ...base, colors: color_theme };

console.log(theme);

const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={theme}>{element}</ThemeProvider>
);
export default wrapRootElement;
