import React from 'react'
import PropTypes from 'prop-types'

const professionalGreeting = 'Comrades:'

const powerfulGenderNeutralGreetings = [
  'Ahoy, mateys',
  'Good morning, Krusty crew',
  'Hey, glitterkittens',
  'Dearest Smotchkiss',
  'Folks',
  'Friends',
  'Comrades',
  'Gentle Beings',
  'Y’all or Yinz or Youse or You’ns',
  'Allies',
  'Colleagues',
  'Compatriots',
  'Collaborators',
  'My Companions'
]

const randomGreeting = () => {
  /* prettier-ignore */
  const greeting =
  powerfulGenderNeutralGreetings[
    Math.floor(
      Math.random() * (powerfulGenderNeutralGreetings.length)
    )
  ]

  return greeting
}

const displayDate = () =>
  new Intl.DateTimeFormat('en-US', {
    dateStyle: 'full'
  }).format(new Date())

const Salutation = ({}) => (
  <>
    <p className="pb-3">{displayDate()}</p>
    <p className="print:hidden">{`${randomGreeting()}:`}</p>
    <p className="hidden print:block">{professionalGreeting}</p>
  </>
)

export default Salutation
