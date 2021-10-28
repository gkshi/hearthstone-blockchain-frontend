import React from 'react'
import { Player } from '../../../types/game'
import { shortCurrencyValue } from '../../../helpers/currency'

import './_index.scss'

interface GamePlayerProps extends React.ComponentProps<any> {
  data?: Player
}

function GamePlayerComponent ({ data }: GamePlayerProps) {
  return (
    <div className={`component -game-player -color-${data.color} flex a-center`}>
      <div className="left">
        <div className="color">
          {data.photo ? <img className="photo" src={data.photo} alt=""/> : null}
        </div>
      </div>

      <div className="middle">
        <div className="name">{data.name}</div>
        <div className="balance">{shortCurrencyValue(data.balance)}</div>
      </div>

      <div className="right">
        <div />
      </div>
    </div>
  )
}

export default GamePlayerComponent
