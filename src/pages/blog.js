import React from 'react';
import Layout from '../components/layout'
import { useStaticQuery, graphql } from 'gatsby'

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
            excerpt
            html
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <h1>Blog</h1>
      <p>Pages will show up here later on</p>
    </Layout>
  )
}

export default BlogPage;