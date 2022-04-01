import React from 'react'
import { hideGameModal } from '../../../store/game/core/events'
import { useStore } from 'effector-react'
import { $game } from '../../../store/game/core/store'
import { $socket } from '../../../store/socket/store'

import GameModalWrapper from './wrapper'
import UIButton from '../../ui/button'
import $gamePlayers from '../../../store/game/players/store'

function TurnGameModalComponent () {
  const socket = useStore($socket).socket
  const game = useStore($game)
  const activePlayer = useStore($gamePlayers).activePlayer

  const onSubmit = async () => {
    console.log('game', game)
    socket.emit('game:buying', {
      player: activePlayer._id,
      decision: true
    })
    hideGameModal()
  }

  const onReject = () => {
    console.log('game', game)
    socket.emit('game:buying', {
      player: activePlayer._id,
      decision: false
    })
    hideGameModal()
  }

  return (
    <GameModalWrapper id="buying">
      <div className="heading">Покупка поля</div>
      <div>Если вы откажетесь от покупки, поле будет выставлено на общий аукцион.</div>

      <div className="buttons">
        <UIButton onClick={onSubmit}>Купить</UIButton>
        <UIButton theme="light" onClick={onReject}>Отказаться</UIButton>
      </div>
    </GameModalWrapper>
  )
}

export default TurnGameModalComponent
