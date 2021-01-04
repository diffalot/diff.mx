import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

import Image from './Image'

const Footer = ({ githubURL }) => (
  <div className="bg-green-300 dark:bg-indigo-600">
    <div className="sm:container mx-auto p-4">
      <p>
        <a
          rel="license"
          href="https://creativecommons.org/licenses/by/4.0/"
          title="Creative Commons Attribution 4.0 International license">
          <Image src="creativecommons-cc.svg" />
          <Image src="creativecommons-by.svg" />
          2014-2021 Alice Davis
        </a>
      </p>
      {githubURL ? (
        ''
      ) : (
        <p className="">
          Source code available at
          <Link to={githubURL}>{githubURL}</Link>
        </p>
      )}
    </div>
  </div>
)

Footer.propTypes = {
  githubURL: PropTypes.string
}

Footer.defaultProps = {
  githubURL: false
}

export default Footer
