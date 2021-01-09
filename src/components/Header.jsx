import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

import PowButton from './PowButton'

const Header = ({ siteTitle }) => (
  <div className="bg-green-300 dark:bg-indigo-600">
    <nav className="container m-auto p-4 xl:px-44 flex justify-between items-end">
      <Link to="/" className="text-2xl font-black">
        {siteTitle}
      </Link>
      <PowButton>
        <Link to="/cv">For Hire!</Link>
      </PowButton>
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
