import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import Header from './Header'

import './Layout.css'
import 'prismjs/themes/prism-twilight.css'

const Layout = ({ children }) => (
  <StaticQuery
    query={siteTitleQuery}
    render={data => {
      return (
        <>
          <Header siteTitle={data.site.siteMetadata.title} />
          <div className="">{children}</div>
        </>
      )
    }}
  />
)
export default Layout

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export const siteTitleQuery = graphql`
  query SiteTitleQuery {
    site {
      id
      siteMetadata {
        title
      }
    }
  }
`
