import React from 'react'
import $game from '../../../store/game/store'
import { useStore } from 'effector-react'

import './_index.scss'

function GameLogsComponent () {
  const gameState = useStore($game)

  return (
    <div className="component -game-logs">
      <div className="scroll-parent">
        <section>
          <div>players:</div>
          <div>{JSON.stringify(gameState.players)}</div>
        </section>
        <section>
          <div>chips:</div>
          <div>{JSON.stringify(gameState.chips)}</div>
        </section>
        <section>
          <div>fields:</div>
          <div>{JSON.stringify(gameState.fields)}</div>
        </section>
      </div>
    </div>
  )
}

export default GameLogsComponent
