import { graphql } from "gatsby";
import React from "react";
import styled from "styled-components";
require("katex/dist/katex.min.css");

const MDXContent = styled.div(
  ({ theme }) => `
  
  // Sizing
  max-width: ${theme.widths.content};
  margin: 0 auto;

  // Headings
  h1, h2, h3, h4 {
    svg {
      height: 0.75em;
      width: 0.75em;
      margin: 0.3em 0.1em;
    }
  }

  // Math rendering
  // em means neighboring so it becomes same size as neighbors
  .math-inline {
    font-size: 1em; 
  }


  // Link
  a {
    font-weight: 500;
    text-decoration: underline rgba(0,0,0,0.0);
    transition: text-decoration-color ${theme.transitions.main};
    color: ${theme.colors.links.normal};
    &:visited {
      color: ${theme.colors.links.visited};
    }

    &:hover, &:focus {
      text-decoration: underline;
      text-decoration-color: inherit;
    }
  }

  // Image and Video
  .gatsby-resp-image-wrapper, video {
    max-width: 300px !important;
    overflow: hidden;
    border-radius: 10px;
    box-shadow: ${theme.shadow};
    margin: 1em 0em;
  }

  figcaption {
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: ${theme.fonts.code};
    font-size: 1rem;
  }

  .gatsby-resp-image-figure {
    margin: 1rem auto;
  }
  
  // Inline Code
  code {
    font-size: 0.8em;
    border: 1px solid ${theme.colors.borders};
    border-radius: 5px;
    background-color: ${theme.background_darken};
    padding: 2px;
    color: black;
  }

  // Blockquote
  blockquote {
    background-color: ${theme.background_darken};
    padding: 0.75rem 1.25rem;
    border-left: 0.3rem solid  ${theme.colors.primary};
    margin: 0rem;
    margin-top: 0.5rem;
    p {
      margin: 0;
    }
  }

  // Table
  table {
    margin: 0 auto;
    thead {
      border-bottom: 0.15rem solid  ${theme.colors.primary};
      th {
        padding: 0.5rem;
        border: 1px solid black;
        font-weight: 500;
      }
    }
    
    tbody {
      td {
        text-align: center;
        padding: 0.5rem 0.5rem;
        border: 1px solid black;
      }
    }
  }
  
  // Footnotes
  .footnotes {
    hr {
      color: ${theme.colors.borders};
    }
  }
`
);

const Post = ({ data: { mdx }, children }) => {
  const { frontmatter } = mdx;
  return (
    <MDXContent>
      <div>
        <h1>
          <strong>{frontmatter.title}</strong>
        </h1>
        {children}
      </div>
    </MDXContent>
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
