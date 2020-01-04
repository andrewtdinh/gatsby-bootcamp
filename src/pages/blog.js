import React from 'react';
import Layout from '../components/layout'
import { useStaticQuery, graphql, Link } from 'gatsby'

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
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <h1>Blog</h1>
      <ol>
        {data.allMarkdownRemark.edges.map((edge) => {
          const pathToBlog = `/blog/${edge.node.fields.slug}`
          return (
            <li>
              <Link to={pathToBlog}>
                <h2>{edge.node.frontmatter.title}</h2>
              </Link>
              <p>{edge.node.frontmatter.date}</p>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default BlogPage;