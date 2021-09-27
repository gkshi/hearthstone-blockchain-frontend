import React from 'react'

import GameTable from '../../components/game/table'

import './_index.scss'

function GamePage () {
  return (
    <div className="page -game flex center">
      <GameTable />
    </div>
  )
}

export default GamePage
