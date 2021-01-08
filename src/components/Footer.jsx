import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

import Image from './Image'
import CC from '../images/creativecommons-cc.inline.svg'
import CCBy from '../images/creativecommons-by.inline.svg'

const Footer = ({ githubURL }) => (
  <div className="bg-green-300 dark:bg-indigo-600">
    <div className="sm:container mx-auto p-4 font-bold">
      <p>
        <a
          rel="license"
          href="https://creativecommons.org/licenses/by/4.0/"
          title="Creative Commons Attribution 4.0 International license">
          <CC className="inline h-9 -m-4" />
          <CCBy className="inline h-9 -mr-2" />
          2014-2021 Alice Davis
        </a>
      </p>
      {githubURL ? (
        ''
      ) : (
        <p className="pt-3">
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
