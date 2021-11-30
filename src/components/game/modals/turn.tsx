import React, { useEffect } from 'react'
import { hideGameModal, rollTheDice } from '../../../store/game/core/events'
import { setActiveChip } from '../../../store/game/chips/events'
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
  }

  useEffect(() => {
    socket.on('game:roll-the-dice', (values: [number, number]) => {
      hideGameModal()
      setActiveChip(activePlayer.color)
      rollTheDice(values)
    })
  }, [])

  return (
    <GameModalWrapper id="turn">
      <div className="heading">Your turn</div>
      <div>It&apos;s your turn, good luck!</div>

      <UIButton onClick={onButtonClick}>Roll the dice</UIButton>
    </GameModalWrapper>
  )
}

export default TurnGameModalComponent
