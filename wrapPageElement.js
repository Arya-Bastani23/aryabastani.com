import React from "react";
import Layout from "./src/components/Layout";

// Wraps every page in the layout
const wrapPageElement = ({ element, props }) => (
  <Layout {...props}>{element}</Layout>
);
export default wrapPageElement;
