import React from 'react'

import IconPolice from '../../icons/police'

import './_index.scss'

function PoliceGameItemComponent () {
  return (
    <div className="component intro flex column center">
      <IconPolice />
      <div className="label">Go to jail</div>
    </div>
  )
}

export default PoliceGameItemComponent
