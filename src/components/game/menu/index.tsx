import React from 'react'

import UIButton from '../../ui/button'

import './_index.scss'

function GameMenuComponent () {
  return (
    <div className="component -game-menu">
      <UIButton theme="dark">Help</UIButton>
      <UIButton className="hover-danger" theme="dark">Leave game</UIButton>
    </div>
  )
}

export default GameMenuComponent
