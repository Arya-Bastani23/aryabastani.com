// import React from "react"
// import Img from "gatsby-image"
// import Layout from "../components/Layout"
// import { graphql } from "gatsby"
// // import styles from '../styles/project-details.module.css'

// export default function ProjectDetails ({ data }) {

//   const title = data.mdx.frontmatter.title
//   return (
//     <Layout>
//       <div>
//         <h2>{title}</h2>
//         <h3>stack</h3>
//         <div>
//           {/* <Img fluid={} /> */}
//         </div>
//         {/* <div className={styles.html} dangerouslySetInnerHTML={} /> */}
//       </div>
//     </Layout>
//   )
// }
 
// export const query = graphql(`
//     query PostByID($post_id: String!) {
//             mdx(id: {eq: $post_id}) {
//                 frontmatter {
//                     title
//                 }
//         }
//     }
// `)


import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/Layout"

const Post = ({ data }) => {
  console.log(data)
  const title = data.mdx.frontmatter.title
  return (
    <Layout>
      <div>
        <h2>{title}</h2>
        <h3>stack</h3>
      </div>
    </Layout>
  )
}
export default Post

export const query = graphql`
  query PostByID($post_id: String!) {
    mdx(id: {eq: $post_id}) {
      frontmatter {
        title
      }
    }
  }
`
