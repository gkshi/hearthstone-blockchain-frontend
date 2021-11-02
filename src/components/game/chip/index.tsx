import React from 'react'
import { Chip } from '../../../store/game/chips/types'

import './_index.scss'

interface GameChipComponentProps {
  data: Chip
}

function GameChipComponent ({ data }: GameChipComponentProps) {
  const style = () => data.coordinates

  return (
    <div className={`component -game-chip -color-${data.color}`} style={style()}>
      <div className="chip" />
      <div className="indicator">
        <div className="point" />
      </div>
    </div>
  )
}

export default GameChipComponent
