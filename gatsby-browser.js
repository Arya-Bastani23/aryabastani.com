import "@code-hike/mdx/styles.css";
import "sanitize.css";
import "sanitize.css/typography.css";

export { default as wrapPageElement } from "./wrapPageElement";
export { default as wrapRootElement } from "./wrapRootElement";

export const onInitialClientRender = () => {
  const loadTimer = 0;
  const animTimer = loadTimer + 200;
  setTimeout(function () {
    document.getElementById("___loader").style.opacity = "0";
  }, loadTimer);
  setTimeout(function () {
    document.getElementById("___loader").style.display = "none";
  }, animTimer);
};
