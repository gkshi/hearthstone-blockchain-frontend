import React from 'react'
import { Player } from '../../../store/game/players/types'
import { shortCurrencyValue } from '../../../helpers/currency'
import { useStore } from 'effector-react'
import $gamePlayers from '../../../store/game/players/store'

import './_index.scss'

interface GamePlayerProps extends React.ComponentProps<any> {
  data?: Player
}

function GamePlayerComponent ({ data }: GamePlayerProps) {
  const storedActivePlayer = useStore($gamePlayers).activePlayer

  const className = () => {
    let str = `component -game-player -color-${data.color} flex a-center`
    if (storedActivePlayer && storedActivePlayer._id === data._id) {
      str += ' -active'
    }
    return str
  }

  return (
    <div className={className()}>
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
