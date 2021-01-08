import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const Header = ({ siteTitle }) => (
  <div className="bg-green-300 dark:bg-indigo-600">
    <nav className="container m-auto p-4 xl:px-44">
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
