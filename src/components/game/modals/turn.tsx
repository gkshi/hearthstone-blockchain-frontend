import React from 'react'
import { hideGameModal, showDices } from '../../../store/game/core/events'
import { useStore } from 'effector-react'
import { $gamePlayers } from '../../../store/game/players/store'
import { $socket } from '../../../store/socket/store'

import GameModalWrapper from './wrapper'
import UIButton from '../../ui/button'

function TurnGameModalComponent () {
  const socket = useStore($socket).socket
  const activePlayer = useStore($gamePlayers).activePlayer

  const onButtonClick = async () => {
    socket.emit('game:roll-the-dice', activePlayer._id)
    hideGameModal()
    showDices()
  }

  return (
    <GameModalWrapper id="turn">
      <div className="heading">Your turn</div>
      <div>It&apos;s your turn, good luck!</div>

      <UIButton onClick={onButtonClick}>Roll the dice</UIButton>
    </GameModalWrapper>
  )
}

export default TurnGameModalComponent
