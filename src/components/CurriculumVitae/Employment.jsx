import React from 'react'
import PropTypes from 'prop-types'
import { MDXProvider } from '@mdx-js/react'

const Employment = ({ role, dates, company, children }) => (
  <div style={{ pageBreakInside: 'avoid' }} className="mb-8">
    <div className="mb-3">
      <p className="flex mb-0">
        <span className="italic flex-grow">{role}</span>
        <span className="text-right flex-shrink">{dates}</span>
      </p>
      <p className="">{company}</p>
    </div>
    <MDXProvider>{children}</MDXProvider>
  </div>
)

export default Employment
