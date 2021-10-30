import { createStore } from 'effector'
import { generateChipSet } from '../../../helpers/game'
import { setLog } from '../../logs/events'
import { setChipSet } from './events'
import { State } from './types'
import $game from '../core/store'

const initialState = (): State => ({
  chips: [],
  activeChip: null
})

export const $gameChips = createStore<State>(initialState())
  .on(setChipSet, (state, length) => {
    setLog('Chip set generated.')
    const field = $game.getState().fields.find(i => i.id === 'start')
    let chips = generateChipSet(length)
    chips = chips.map(chip => {
      return { ...chip, field: field.id }
    })
    return { ...state, chips }
  })

export default $gameChips
