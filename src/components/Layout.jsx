import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import Header from './Header'
import Footer from './Footer'

import './Layout.css'
import 'prismjs/themes/prism-twilight.css'

const Layout = layoutArgs => {
  const { children, githubURL, githubText } = layoutArgs
  console.log({ layoutArgs })
  return (
    <StaticQuery
      query={siteTitleQuery}
      render={data => {
        console.log({ data })
        return (
          <>
            <Header siteTitle={data.site.siteMetadata.title} />
            <div className="container m-auto">{children}</div>
            <Footer githubURL={githubURL} githubText={githubText} />
          </>
        )
      }}
    />
  )
}
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
