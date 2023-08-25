import { graphql } from "gatsby";

export const siteMetadata = graphql`
  fragment SiteMetadata on Query {
    site {
      siteMetadata {
        author
        description
        siteUrl
      }
    }
  }
`;

export const hero = graphql`
  fragment Hero on Query {
    allMdx(filter: { frontmatter: { title: { eq: "Hero" } } }) {
      nodes {
        frontmatter {
          thumb {
            childImageSharp {
              gatsbyImageData(
                width: 800
                placeholder: BLURRED
                transformOptions: { cropFocus: ENTROPY }
              )
            }
          }
        }
      }
    }
  }
`;

export const postElements = graphql`
  fragment PostElements on Mdx {
    frontmatter {
      slug
      date(formatString: "MMM. Do, YYYY")
      templateKey
      title
      tags
      pinned
      thumb {
        childImageSharp {
          gatsbyImageData(
            width: 800
            placeholder: BLURRED
            transformOptions: { cropFocus: ENTROPY }
          )
        }
      }
    }
    fields {
      readingTime {
        text
      }
    }
  }
`;
