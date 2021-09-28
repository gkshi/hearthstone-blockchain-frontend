import React from 'react'
import { Item } from '../../../types/game'

import './_index.scss'

interface GameItemProps extends React.ComponentProps<any> {
  row?: 'top' | 'right' | 'bottom' | 'left',
  data?: Item
}

function GameItemComponent ({ row, data }: GameItemProps) {
  const label = () => data ? data.name || data.type : 'item'

  const priceBlock = () => {
    return data ? <div className="price">{data.price}Ξ</div> : null
  }

  return (
    <div className={`component -table-item -row-${row}`}>
      {data && data.type === 'place'
        ? <><div className={`color -${data.color}`} />
        <div className="label flex center">
          <div>
            <div>{label()}</div>
            {priceBlock()}
          </div>
        </div></>
        : null}

      {data && data.type === 'event'
        ? <><div className="label flex center">
          <div>{label()}</div>
          </div></>
        : null}

      {data && data.type === 'company'
        ? <><div className="label flex center">
          <div>
            <div>{label()}</div>
            {priceBlock()}
          </div>
        </div></>
        : null}
    </div>
  )
}

export default GameItemComponent
