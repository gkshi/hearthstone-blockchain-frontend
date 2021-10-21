import React from 'react'

import IconChance from '../../icons/question'

import './_index.scss'

function ChanceGameItemComponent () {
  return (
    <div className="component intro flex column center">
      <IconChance />
      <div className="label">Chance</div>
    </div>
  )
}

export default ChanceGameItemComponent
