import React from 'react'
import { useStore } from 'effector-react'
import { $gamePlayers } from '../../../store/game/players/store'

import GamePlayer from '../player'

import './_index.scss'

function GamePlayersComponent () {
  const players = useStore($gamePlayers).players

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
