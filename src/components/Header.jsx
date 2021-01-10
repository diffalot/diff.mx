import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

import PowButton from './PowButton'
import ForHire from '../images/for-hire.inline.svg'

const Header = ({ siteTitle }) => (
  <div className="bg-green-300 dark:bg-indigo-600">
    <nav className="container m-auto p-4 xl:px-44 flex justify-between items-end">
      <Link to="/" className="text-2xl font-black no-underline">
        {siteTitle}
      </Link>
      <PowButton>
        <Link to="/cv">
          <ForHire
            style={{ width: '4.5rem', top: '.25rem', right: '-1rem' }}
            className="relative"
          />
        </Link>
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
