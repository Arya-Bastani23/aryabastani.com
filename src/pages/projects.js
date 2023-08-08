import * as React from "react"
import Layout from '../components/Layout'
import { Link, graphql } from "gatsby"
import { box } from '../styles/projects.module.css'
import Img from 'gatsby-image'


export default function Home({ data }) {
  console.log(data)
  const projects = data.allMdx.nodes
  const Box = ({ children }) => (
    <div className={box}>{children}
    {projects.map(project => (
        <Link to={"/content/projects/" + project.frontmatter.slug} key={project.id}>
        <div>
          <Img fluid={project.frontmatter.thumb.childImageSharp.fluid} />
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
    allMdx(sort: {frontmatter: {date: DESC}}) {
      nodes {
        id
        frontmatter {
          slug
          title
          tags
          thumb {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`
