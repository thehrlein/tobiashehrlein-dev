import React from "react"
import Headline from "../components/headline"
import Layout from "../components/layout"
import { graphql } from "gatsby"

export default function Apps({ data }) {
  return (
    <Layout>
      <Headline headlineText={data.site.siteMetadata.title} />
      <Headline headlineText="It's pretty cool" />
      <h1>About Pandas Eating Lots</h1>
      <p>
        We're the only site running on your computer dedicated to showing the
        best photos and videos of pandas eating lots of food.
      </p>
    </Layout>
  )
}

// Page queries live outside of the component definition - by convention 
// at the end of a page component file — and are only available on page components.
export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
