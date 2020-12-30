import React from 'react'
import PropTypes from 'prop-types'

const Header = ({ name, location, email, website }) => (
  <div className="flex flex-col justify-center leading-tight">
    <h1 className="text-center text-4xl lg:text-6xl font-bold place-self-center border-b-2 border-black p-2 mb-2 w-9/12">
      {name}
    </h1>
    <p className="place-self-center">{location}</p>
    <p className="place-self-center underline">
      <a href={`mailto:${email}`} target="_blank">
        {email}
      </a>
    </p>
    <p className="place-self-center underline">
      <a href="/">{website}</a>
    </p>
  </div>
)

export default Header
