import React from 'react'
import { useStore } from 'effector-react'
import { $game } from '../../../store/game/core/store'

import RollingModal from './rolling'
import BuyingModal from './buying'
import RentModal from './rent'

import './_index.scss'

function GameModalsComponent () {
  const storedModal = useStore($game).modal

  if (!storedModal) {
    return null
  }

  return (
    <div className="component -game-modals">
      <RollingModal />
      <BuyingModal />
      <RentModal />
    </div>
  )
}

export default GameModalsComponent
