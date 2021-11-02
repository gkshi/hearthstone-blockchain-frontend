import React, { useState } from 'react'
import { hideGameModal, rollTheDice } from '../../../store/game/core/events'

import GameModalWrapper from './wrapper'
import UIButton from '../../ui/button'
import { detectChipPositions, moveChip, setActiveChip } from '../../../store/game/chips/events'
import { PlayerColor } from '../../../store/game/players/types'

function TurnGameModalComponent () {
  const [testChip, setTestChip] = useState<PlayerColor>('red')

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
    // TODO: для тестов
    const [num1, num2] = [15, 0]
    setActiveChip(testChip)
    // const [num1, num2] = await getRandomDiceValues()
    rollTheDice([num1, num2])
  }

  // TODO: для тестов
  const onSelectChange = (e) => {
    console.log('onSelectChange', e.target.value)
    setTestChip(e.target.value)
  }

  return (
    <GameModalWrapper id="turn">
      <div className="heading">Your turn</div>
      <div>It&apos;s your turn, good luck!</div>

      {/* TODO: для тестов */}
      <div>
        <span>chip</span>
        <select name="chip" id="chip" onChange={onSelectChange}>
          <option value={null} selected={true}>-</option>
          <option value="red">red</option>
          <option value="yellow">yellow</option>
          <option value="green">green</option>
          <option value="blue">blue</option>
          <option value="violet">violet</option>
        </select>
      </div>

      <UIButton onClick={onButtonClick}>Roll the dice</UIButton>
    </GameModalWrapper>
  )
}

export default TurnGameModalComponent
