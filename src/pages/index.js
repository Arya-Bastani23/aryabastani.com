import * as React from "react"
import Layout from '../components/Layout'
import { graphql } from "gatsby"

export default function Home({ data }) {
  return (
    <Layout>
      <div>THE MAIN PAGE</div>
    </Layout>
  )
}
