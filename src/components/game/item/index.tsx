import React from 'react'
import { Item } from '../../../types/game'

import './_index.scss'

interface GameItemProps extends React.ComponentProps<any> {
  data?: Item
}

function GameItemComponent ({ data }: GameItemProps) {
  const label = () => data ? data.name || data.type : 'item'

  return (
    <div className="component -table-item">
      {label()}
    </div>
  )
}

export default GameItemComponent
