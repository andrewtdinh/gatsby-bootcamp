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
      <ol>
        {data.allMarkdownRemark.edges.map((file) => {
          return (
            <li>
              <h2>
                {file.node.frontmatter.title}
              </h2>
              <p>
                {file.node.frontmatter.date}
              </p>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default BlogPage;