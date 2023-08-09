const path = require("path");
const readingTime = require("reading-time");

// Adding some extra fields for you
exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `Mdx`) {
    // Reading Time
    createNodeField({
      node,
      name: `readingTime`,
      value: readingTime(node.body),
    });
  }
};

exports.createPages = async ({ graphql, actions }) => {
  const { data } = await graphql(`
    query PageInfo {
      allMdx {
        nodes {
          frontmatter {
            slug
          }
          internal {
            contentFilePath
          }
          id
        }
      }
    }
  `);

  // Resolve template
  postTemplate = path.resolve("./src/templates/posts.js");

  data.allMdx.nodes.forEach((node) => {
    actions.createPage({
      path: "/projects/" + node.frontmatter.slug,
      component: `${postTemplate}?__contentFilePath=${node.internal.contentFilePath}`,
      context: {
        post_id: node.id,
      },
    });
  });
};
