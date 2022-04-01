import React from 'react'
import { hideGameModal } from '../../../store/game/core/events'
import { useStore } from 'effector-react'
// import { $game } from '../../../store/game/core/store'
import { $socket } from '../../../store/socket/store'

import GameModalWrapper from './wrapper'
import UIButton from '../../ui/button'
import $gamePlayers from '../../../store/game/players/store'

function TurnGameModalComponent () {
  const socket = useStore($socket).socket
  // const game = useStore($game)
  const activePlayer = useStore($gamePlayers).activePlayer

  const onSubmit = async () => {
    socket.emit('game:rent', {
      player: activePlayer._id,
      decision: true
    })
    hideGameModal()
  }

  const onReject = () => {
    //
    hideGameModal()
  }

  return (
    <GameModalWrapper id="rent">
      <div className="heading">Плата аренды</div>
      <div>Попадая на чужое поле, вы должны заплатить арендную плату его владельцу.</div>

      <div className="buttons">
        <UIButton onClick={onSubmit}>Заплатить</UIButton>
        {/* <UIButton theme="light" onClick={onReject}>Отказаться</UIButton> */}
      </div>
    </GameModalWrapper>
  )
}

export default TurnGameModalComponent
