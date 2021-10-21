import React from 'react'

import GameChip from '../chip'

import './_index.scss'

function GameChipsComponent () {
  return (
    <div className="component -game-chips">
      <GameChip data={{ color: 'red' }} />
      <GameChip data={{ color: 'green' }} />
      <GameChip data={{ color: 'blue' }} />
      <GameChip data={{ color: 'violet' }} />
      <GameChip data={{ color: 'yellow' }} />
    </div>
  )
}

export default GameChipsComponent
