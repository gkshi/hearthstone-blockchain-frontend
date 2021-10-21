import React from 'react'

import IconChance from '../../icons/question'

import './_index.scss'

function ChanceGameItemComponent () {
  return (
    <div className="intro flex column center">
      <IconChance />
      <div className="label">Chance</div>
    </div>
  )
}

export default ChanceGameItemComponent
