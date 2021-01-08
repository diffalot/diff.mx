import React from 'react'
import PropTypes from 'prop-types'

import './page.css'
import './fonts.css'
import './markdown.css'

const Layout = ({ children }) => {
  return <div className="cv">{children}</div>
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
