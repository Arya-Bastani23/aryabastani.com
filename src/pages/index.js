import * as React from 'react'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'
import { box } from '../styles/home.module.css'
import Img from 'gatsby-image'

export default function Home({ data }) {
  const Box = ({ children }) => (
    <section className={box}>{children}
      <div>
        <h3>Hello, I'm Arya Bastani. I created this site to highlight things that I think are cool.</h3>
        <p>I graduated from Berkeley before.</p>
      </div>
      <Img fluid = {data.file.childImageSharp.fluid} />
    </section>
  )
  return (
    <Layout>
      <Box></Box>
    </Layout>
  )
}

export const query  = graphql`
  query ProfilePic {
    file(relativePath: {eq: "profile.jpg"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`