import React from 'react'

import GameModalWrapper from './wrapper'
import UIButton from '../../ui/button'

function TurnGameModalComponent () {
  const rollTheDice = () => {
    console.log('roll')
  }

  return (
    <GameModalWrapper id="turn">
      <div className="heading">Your turn</div>
      <div>It&apos;s your turn, good luck!</div>
      <UIButton onClick={rollTheDice}>Roll the dice</UIButton>
    </GameModalWrapper>
  )
}

export default TurnGameModalComponent
