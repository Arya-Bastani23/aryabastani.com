import * as React from "react"
import Layout from '../components/Layout'
import { Link, graphql } from "gatsby"
import * as styles from '../styles/projects.module.css'

import { box } from '../styles/projects.module.css'


export default function Home({ data }) {
  const projects = data.allMdx.nodes
  const Box = ({ children }) => (
    <div className={box}>{children}
    {projects.map(project => (
        <Link to={"/projects/" + project.frontmatter.slug + "/index"} key={project.id}>
        <div>
        <h3>{ project.frontmatter.title }</h3>
        <p>{ project.frontmatter.tags }</p>
        </div>
    </Link>
    ))}
    </div>
  )
  return (
    <Layout>
      <h1>Projects</h1>
      <p>This some stuff I made.</p>
      <Box></Box>
    </Layout>
  )
}

// Export page query
export const query = graphql`
query Projects {
    allMdx {
      nodes {
        id
        frontmatter {
          slug
          title
          tags
        }
      }
    }
  }
`
