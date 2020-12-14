import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import Layout from '../Layout'

const query = graphql`
  query HomeQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`

const HomePage = ({ children }) => (
  <StaticQuery
    query={query}
    render={data => {
      console.log('home', { data })
      return <Layout>{children}</Layout>
    }}
  />
)

export default HomePage
