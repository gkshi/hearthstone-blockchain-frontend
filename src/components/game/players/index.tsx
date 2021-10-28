import React from 'react'
import { useStore } from 'effector-react'
import $game from '../../../store/game/store'

import GamePlayer from '../player'

import './_index.scss'

function GamePlayersComponent () {
  const players = useStore($game).players

  const playerList = () => {
    return players.map(player => <GamePlayer data={player} key={player._id} />)
  }

  return (
    <div className="component -game-players">
      {playerList()}
    </div>
  )
}

export default GamePlayersComponent
