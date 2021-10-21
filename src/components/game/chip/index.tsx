import React from 'react'

import './_index.scss'

interface GameChipComponentProps {
  data: {
    color: string
  }
}

function GameChipComponent ({ data }: GameChipComponentProps) {
  return (
    <div className={`component -game-chip -color-${data.color}`}>
      <div className="chip"></div>
    </div>
  )
}

export default GameChipComponent
