import React from 'react'
import PropTypes from 'prop-types'
import { MDXProvider } from '@mdx-js/react'

const Employment = ({ role, dates, company, children }) => (
  <div style={{ pageBreakInside: 'avoid' }} className="mb-4">
    <div className="mb-2">
      <div className="flex mb-0">
        <span className="italic flex-grow">{role}</span>
        <span className="text-right flex-shrink">{dates}</span>
      </div>
      <div className="">{company}</div>
    </div>
    <MDXProvider>{children}</MDXProvider>
  </div>
)

export default Employment
