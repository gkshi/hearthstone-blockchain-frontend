import React from 'react'
import {
  startGame as _startGame,
  showGameModal
} from '../../../store/game/core/events'
import { setActivePlayer as _setActivePlayer } from '../../../store/game/players/events'

import UIButton from '../../ui/button'

import './_index.scss'

function GameMenuComponent () {
  const setTurnToPlayer = (e) => {
    e.preventDefault()
    showGameModal({
      type: 'turn'
    })
  }

  const setActivePlayer = (e) => {
    e.preventDefault()
    _setActivePlayer(1)
  }

  const startGame = (e) => {
    e.preventDefault()
    _startGame({
      rules: 'classic',
      clients: [
        {
          _id: 1,
          name: 'player1'
        },
        {
          _id: 2,
          name: 'player2'
        },
        {
          _id: 3,
          name: 'player3',
          photo: 'https://avatars.githubusercontent.com/u/499550?v=4'
        }
        // {
        //   _id: 4,
        //   name: 'player4'
        // }
      ]
    })
  }

  return (
    <div className="component -game-menu">
      <div className="system-menu">
        <a href="#" onClick={(e) => startGame(e)}>start game</a>
        <a href="#" onClick={(e) => setActivePlayer(e)}>set active player</a>
        <a href="#" onClick={(e) => setTurnToPlayer(e)}>set turn to player</a>
      </div>

      <UIButton theme="dark">Help</UIButton>
      <UIButton className="hover-danger" theme="dark">Leave game</UIButton>
    </div>
  )
}

export default GameMenuComponent
