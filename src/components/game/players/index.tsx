import React from 'react'
import { Player } from '../../../types/game'

import GamePlayer from '../player'

import './_index.scss'

function GamePlayersComponent () {
  const list = [
    {
      id: 1,
      name: 'player1',
      color: 'red',
      balance: 15000
    },
    {
      id: 2,
      name: 'player2',
      color: 'green',
      balance: 15000
    },
    {
      id: 3,
      name: 'player3',
      color: 'blue',
      balance: 15000,
      photo: 'https://avatars.githubusercontent.com/u/499550?v=4'
    },
    {
      id: 4,
      name: 'player4',
      color: 'violet',
      balance: 15000
    },
    {
      id: 5,
      name: 'player5',
      color: 'yellow',
      balance: 15000
    }
  ] as Player[]

  const playerList = () => {
    return list.map(player => <GamePlayer data={player} key={player.id} />)
  }

  return (
    <div className="component -game-players">
      {playerList()}
    </div>
  )
}

export default GamePlayersComponent
