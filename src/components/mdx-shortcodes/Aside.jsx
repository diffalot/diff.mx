import React from 'react'
import PropTypes from 'prop-types'
import { MDXProvider } from '@mdx-js/react'

// Provide common components here
import shortcodes from './'

const Aside = ({ children }) => {
  return (
    <aside className="float-right w-2/5 m-2 p-2 text-xs bg-green-100">
      <MDXProvider components={shortcodes}>{children}</MDXProvider>
    </aside>
  )
}

Aside.propTypes = {
  markdown: PropTypes.string
}

Aside.defaultProps = {
  markdown: ''
}

export default Aside
