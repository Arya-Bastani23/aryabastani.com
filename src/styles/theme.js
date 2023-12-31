// ref: https://tailwindcss.com/docs/customizing-colors

import colors from "./base_colors";

export const base = {
  shadow: "rgba(0, 0, 0, 0.2) 0px 2px 8px 2px",
  background_darken: "rgba(0, 0, 0, 0.05)",
  fonts: {
    main: "Charter",
    code: "Fira Code",
  },
  grid: {
    gap: "1em",
  },
  radii: {
    content: "0.5rem",
    feature: "1rem",
  },
  transitions: {
    main: "0.2s ease-in-out",
  },
  widths: {
    max: "1400px",
    content: "900px",
  },
};

let family = "neutral";
let accent = "green";
export const light_theme = {
  all: colors,
  background: colors[family][50],
  primary: colors[accent][900], // Dark Green
  borders: colors[family][500],
  buttons: {
    border: colors[accent][900],
    border_hover: colors[accent][700],
  },
  cards: {
    background: colors[family][100],
  },
  text: {
    dark: colors[family][900],
    normal: colors[family][800],
    light: colors[family][600],
  },
  links: {
    normal: colors[accent][700],
    visited: colors.purple[700],
  },
};
