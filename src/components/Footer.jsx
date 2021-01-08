import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

import Image from './Image'
import CC from '../images/creativecommons-cc.inline.svg'
import CCBy from '../images/creativecommons-by.inline.svg'

const Footer = ({ githubURL }) => (
  <div className="bg-green-300 dark:bg-indigo-600 text-right">
    <div className="sm:container mx-auto p-4 font-bold">
      <p className=" align-bottom">
        <a
          rel="license"
          href="https://creativecommons.org/licenses/by/4.0/"
          title="Creative Commons Attribution 4.0 International license">
          <CC className="inline h-3 -ml-6 -mr-12" />
          <CCBy className="inline h-3 -mr-5" />
          <span className="mt-3 text-sm">2014-2021 Alice Davis</span>
        </a>
      </p>
      {!githubURL ? (
        ''
      ) : (
        <p className="pt-3 text-xs font-light">
          {/* prettier-ignore */}
          <Link target="_blank" to={githubURL}>
            Source code available on GitHub
          </Link>
        </p>
      )}
    </div>
  </div>
)

Footer.propTypes = {
  githubURL: PropTypes.string
}

Footer.defaultProps = {
  githubURL: ''
}

export default Footer
