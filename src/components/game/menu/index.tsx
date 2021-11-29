import React from 'react'
import {
  showGameModal,
  buyField as _buyField
} from '../../../store/game/core/events'
import { openModal } from '../../../store/modals/events'

import UIButton from '../../ui/button'

import './_index.scss'

function GameMenuComponent () {
  const setTurnToPlayer = (e) => {
    e.preventDefault()
    showGameModal({
      type: 'turn'
    })
  }

  const buyField = (e) => {
    e.preventDefault()
    console.log('buyField')
    _buyField({
      field: 'adidas',
      owner: 'red'
    })
  }

  const onLeaveClick = () => {
    openModal('leave-game')
  }

  return (
    <div className="component -game-menu">
      <div className="system-menu">
        <a href="#" onClick={(e) => setTurnToPlayer(e)}>set turn to player</a>
        <a href="#" onClick={(e) => buyField(e)}>buy field</a>
      </div>

      <UIButton theme="dark">Help</UIButton>
      <UIButton className="hover-danger" theme="dark" onClick={onLeaveClick}>Leave game</UIButton>
    </div>
  )
}

export default GameMenuComponent
