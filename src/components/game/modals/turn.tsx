import React from 'react'
import { hideGameModal, rollTheDice } from '../../../store/game/events'
import { DiceProps } from '../../../store/game/types'

import GameModalWrapper from './wrapper'
import UIButton from '../../ui/button'

function TurnGameModalComponent () {
  const getRandomDiceValues = async (): Promise<number[]> => {
    const min = 1
    const max = 6
    // return await fetch(`https://www.random.org/integers/?num=2&min=${min}&max=${max}&col=1&&base=10&format=plain&rnd=new`)
    //   .then(res => res.text())
    //   .then(res => {
    //     return res.split('\n').slice(0, -1).map(i => +i)
    //   })
    //   .catch(() => [Math.floor(Math.random() * (max - min + 1)) + min, Math.floor(Math.random() * (max - min + 1)) + min])

    return [Math.floor(Math.random() * (max - min + 1)) + min, Math.floor(Math.random() * (max - min + 1)) + min]
  }
  const onButtonClick = async () => {
    hideGameModal()
    const [num1, num2] = await getRandomDiceValues()
    rollTheDice([num1, num2])
  }

  return (
    <GameModalWrapper id="turn">
      <div className="heading">Your turn</div>
      <div>It&apos;s your turn, good luck!</div>
      <UIButton onClick={onButtonClick}>Roll the dice</UIButton>
    </GameModalWrapper>
  )
}

export default TurnGameModalComponent
