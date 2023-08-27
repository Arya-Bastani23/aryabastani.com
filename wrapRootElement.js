import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./src/styles/theme.js";

// let color_theme = light_theme;

console.log(theme);

const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={theme}>{element}</ThemeProvider>
);
export default wrapRootElement;
