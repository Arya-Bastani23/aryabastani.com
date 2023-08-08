exports.createPages = async ({ graphql, actions}) => {

    const { data } = await graphql(`
        query MyQuery {
            allMdx {
            nodes {
                frontmatter {
                slug
                }
            }
            }
        }
    `)

    data.allMdx.nodes.array.forEach(node => {
        actions.createPage({
            path: '/projects/' + node.frontmatter.slug
        })
    });
}