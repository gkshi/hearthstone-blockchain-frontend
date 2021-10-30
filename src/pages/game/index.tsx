import React, { useEffect } from 'react'
import { initGame } from '../../store/game/core/events'

import GameTable from '../../components/game/table'
import GamePlayers from '../../components/game/players'
import GameMenu from '../../components/game/menu'

import './_index.scss'

function GamePage () {
  useEffect(() => {
    initGame()
  }, [])

  return (
    <div className="page -game flex center">
      <aside className="game-aside flex column j-between">
        <GamePlayers />
        <GameMenu />
      </aside>
      <GameTable />
    </div>
  )
}

export default GamePage
