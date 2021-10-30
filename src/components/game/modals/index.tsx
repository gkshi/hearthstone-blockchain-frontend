import React from 'react'
import { useStore } from 'effector-react'
import { $game } from '../../../store/game/store'

import TurnModal from './turn'

import './_index.scss'

function GameModalsComponent () {
  const storedModal = useStore($game).modal

  if (!storedModal) {
    return null
  }

  return (
    <div className="component -game-modals">
      <TurnModal />
    </div>
  )
}

export default GameModalsComponent
