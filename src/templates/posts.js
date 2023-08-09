import { graphql } from "gatsby";
import React from "react";

const Post = ({ data: { mdx }, children }) => {
  const { frontmatter } = mdx;
  return (
    <div>
      <h2>{frontmatter.title}</h2>
      <h3>stack</h3>
      {children}
    </div>
  );
};
export default Post;

export const query = graphql`
  query PostByID($post_id: String!) {
    mdx(id: { eq: $post_id }) {
      ...PostElements
    }
  }
`;
