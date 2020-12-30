import React from 'react'
import PropTypes from 'prop-types'

const Layout = ({ children }) => {
  console.log({ children })
  return <div className="sm:container mx-auto">{children}</div>
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
