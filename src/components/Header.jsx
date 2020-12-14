import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const Header = ({ siteTitle }) => (
  <div className="bg-green-300 p-4">
    <nav className="sm:container mx-auto">
      <h1 className="inline text-2xl font-black">
        <Link to="/">{siteTitle}</Link>
      </h1>
    </nav>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string
}

Header.defaultProps = {
  siteTitle: ''
}

export default Header
