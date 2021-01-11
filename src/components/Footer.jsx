import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

import CC from '../images/creativecommons-cc.inline.svg'
import CCBy from '../images/creativecommons-by.inline.svg'

import GitHub from '../images/git.inline.svg'
import Twitter from '../images/twitter.inline.svg'

const Footer = ({ githubURL, githubText }) => (
  <div className="bg-green-300 dark:bg-indigo-600 text-right print:hidden">
    <div className="md:flex md:justify-between md:flex-row-reverse container mx-auto px-4 xl:px-44 py-24 font-bold">
      <div className="">
        {!githubURL ? (
          ''
        ) : (
          <p className="text-xs font-light">
            <Link target="_blank" to={githubURL}>
              {githubText ? githubText : 'Source code available on GitHub'}
            </Link>
          </p>
        )}
        <p className="pt-7 font-sans text-right">
          <a
            className="no-underline"
            rel="license"
            target="_blank"
            href="https://creativecommons.org/licenses/by/4.0/"
            title="Creative Commons Attribution 4.0 International license">
            <CC className="inline h-3 -ml-6 -mr-12" />
            <CCBy className="inline h-3 -mr-5" />
            <span
              style={{
                fontFamily:
                  'ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"'
              }}
              className="mt-3 text-sm font-sans">
              2013-2021 Alice Davis
            </span>
          </a>
        </p>
      </div>
      <p className="pt-7 md:-mt-5">
        <a target="_blank" href="https://twitter.com/diffalot">
          <Twitter className="inline h-12 -mr-2" />
        </a>
        <a target="_blank" href="https://github.com/diffalot">
          <GitHub className="inline h-12 -mr-8" />
        </a>
      </p>
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
