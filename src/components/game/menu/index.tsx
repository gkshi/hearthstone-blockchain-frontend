import React from 'react'
import { openModal } from '../../../store/modals/events'

import UIButton from '../../ui/button'

import './_index.scss'

function GameMenuComponent () {
  const onLeaveClick = () => {
    openModal('leave-game')
  }

  return (
    <div className="component -game-menu">
      <UIButton theme="dark">Help</UIButton>
      <UIButton className="hover-danger" theme="dark" onClick={onLeaveClick}>Leave game</UIButton>
    </div>
  )
}

export default GameMenuComponent
