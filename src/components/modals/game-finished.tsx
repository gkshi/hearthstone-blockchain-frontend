import React from 'react'
import { closeModal } from '../../store/modals/events'
import { useRouter } from 'react-router5'
import { useStore } from 'effector-react'
import { $game } from '../../store/game/core/store'
import { clearAllGameData } from '../../store/game/core/events'

import ModalWrapper from './wrapper'
import UIButton from '../ui/button'

function GameFinishedModal () {
  const id = 'game-finished'
  const router = useRouter()
  const winner = useStore($game).winner

  const winnerName = () => winner ? winner.name : ''

  const cancel = () => {
    closeModal(id)
  }

  const onClose = () => {
    clearAllGameData()
    router.navigate('home')
  }

  return (
    <ModalWrapper id={id} onClose={onClose}>
      <div>Game finished</div>
      <div>
        <span>winner: </span>
        <span>{winnerName()}</span>
      </div>
      <div className="buttons">
        <UIButton size="small" onClick={cancel}>Close</UIButton>
      </div>
    </ModalWrapper>
  )
}

export default GameFinishedModal
