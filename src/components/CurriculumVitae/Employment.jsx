import React from 'react'
import PropTypes from 'prop-types'
import { MDXProvider } from '@mdx-js/react'

const Employment = ({ role, dates, company, children }) => (
  <div className="mb-8">
    <div className="flex flex-wrap mb-2">
      <div className="italic flex-grow">{role}</div>
      <div className="text-right flex-shrink">{dates}</div>
      <div className="flex-grow">{company}</div>
    </div>
    <MDXProvider>{children}</MDXProvider>
  </div>
)

export default Employment
