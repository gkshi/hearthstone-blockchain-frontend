import React from 'react'
import { useStore } from 'effector-react'
import $gameChips from '../../../store/game/chips/store'

import GameChip from '../chip'

import './_index.scss'

function GameChipsComponent () {
  const $chips = useStore($gameChips).chips

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
