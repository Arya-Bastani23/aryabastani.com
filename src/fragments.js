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
      published
      pinned
      excerpt
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

// Project fragments
export const projectFragment = graphql`
  fragment ProjectQuery on Query {
    projects: allMdx(
      sort: { fields: frontmatter___date, order: DESC }
      filter: {
        frontmatter: { published: { eq: true }, templateKey: { eq: "project" } }
      }
    ) {
      nodes {
        id
        ...PostElements
      }
    }
  }
`;

export const limittedProjectFragment = graphql`
  fragment LimittedProjectQuery on Query {
    projects: allMdx(
      limit: 2
      sort: { fields: frontmatter___date, order: DESC }
      filter: {
        frontmatter: {
          published: { eq: true }
          templateKey: { eq: "project" }
          pinned: { eq: true }
        }
      }
    ) {
      nodes {
        id
        ...PostElements
      }
    }
  }
`;

// Blog Fragment
export const limittedBlogFragment = graphql`
  fragment LimittedBlogQuery on Query {
    blog: allMdx(
      limit: 4
      sort: { fields: frontmatter___date, order: DESC }
      filter: {
        frontmatter: {
          published: { eq: true }
          templateKey: { eq: "blog" }
          pinned: { eq: true }
        }
      }
    ) {
      nodes {
        id
        ...PostElements
      }
    }
  }
`;

export const blogFragment = graphql`
  fragment BlogQuery on Query {
    blog: allMdx(
      sort: { fields: frontmatter___date, order: DESC }
      filter: {
        frontmatter: { published: { eq: true }, templateKey: { eq: "blog" } }
      }
    ) {
      nodes {
        id
        ...PostElements
      }
    }
  }
`;
