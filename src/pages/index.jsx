import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'

import './index.css'

export default function MyFiles({ data: { allMdx } }) {
  console.log({ allMdx })
  return (
    <Layout>
      {allMdx.edges
        .sort(
          ({ node: a }, { node: b }) =>
            new Date(b.frontmatter.date) - new Date(a.frontmatter.date)
        )
        .map(({ node }, index) => (
          <div className="postRow" key={index}>
            <h2 className="postTitle">
              <a href={node.slug}>{node.frontmatter.title}</a>
            </h2>
            <p>{node.excerpt}</p>
          </div>
        ))}
    </Layout>
  )
}

export const query = graphql`
  query {
    allMdx {
      edges {
        node {
          slug
          excerpt
          frontmatter {
            tags
            title
            date
            categories
            layout
          }
        }
      }
    }
  }
`
