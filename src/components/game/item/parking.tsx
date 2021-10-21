import React from 'react'

import IconParking from '../../icons/parking'

import './_index.scss'

function ParkingGameItemComponent () {
  return (
    <div className="component intro flex column center">
      <IconParking />
      <div className="label">Free parking</div>
    </div>
  )
}

export default ParkingGameItemComponent
