import React from 'react'
import { Company } from '../../../types/game'

import './_index.scss'

interface GameItemProps extends React.ComponentProps<any> {
  data?: Company
}

function GameItemComponent ({ row, data }: GameItemProps) {
  const label = () => data
    ? data.name || data.type
    : 'item'

  const priceBlock = () => {
    return data ? <div className="price">{data.price}k</div> : null
  }

  return (
    <div className={`component -table-item -row-${row}`}>
      <div className="label flex center">
        <div>
          <div>{label()}</div>
          {priceBlock()}
        </div>
      </div>
    </div>
  )
}

export default GameItemComponent
