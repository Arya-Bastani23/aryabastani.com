const path = require('path')

exports.createPages = async ({ graphql, actions}) => {

    const { data } = await graphql(`
        query PageInfo {
            allMdx {
                nodes {
                    frontmatter {
                        slug
                    }
                    id
                }
            }
        }
    `)

    data.allMdx.nodes.forEach(node => {
        console.log(node)
        actions.createPage({
            path: "/content/projects/" + node.frontmatter.slug,
            component: path.resolve('./src/templates/posts.js'),
            context: { post_id: node.id }
        })
    });
}