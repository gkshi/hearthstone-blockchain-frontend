import React from 'react'
import { useStore } from 'effector-react'
import $game from '../../../store/game/store'

import GameChip from '../chip'

import './_index.scss'

function GameChipsComponent () {
  const $chips = useStore($game).chips

  const chips = () => {
    return $chips.map(chip => <GameChip data={chip} key={chip._id} />)
  }

  return (
    <div className="component -game-chips">
      {chips()}
    </div>
  )
}

export default GameChipsComponent
