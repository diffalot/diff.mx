import React from 'react'
import { MDXProvider } from '@mdx-js/react'

/*
 * The Aside is not fully rendered markdown since it will be passed in during
 * Post.jsx creation. for this reason it receives MDX renderable children which
 * we pass into the MDXProvider
 */
const Aside = ({ children }) => {
  return (
    <aside className="float-right w-2/5 m-2 p-2 text-xs text-sans bg-green-100 dark:bg-indigo-500 dark:text-gray-100">
      <MDXProvider>{children}</MDXProvider>
    </aside>
  )
}

export default Aside
