import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'

const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
      }
    }
  }
`

const Blog = () => {
  return (
    <Layout>
      This is the blog template
    </Layout>
  )
}

export default Blog;