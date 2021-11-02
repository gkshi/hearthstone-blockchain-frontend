import { createStore } from 'effector'
import { calculateChipCoordinates, generateChipSet } from '../../../helpers/game'
import { setLog } from '../../logs/events'
import { detectChipPositions, moveChip, setActiveChip, setChipSet } from './events'
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

  .on(setActiveChip, (state, color) => {
    const activeChip = state.chips.find(i => i.color === color)
    return { ...state, activeChip }
  })

  .on(detectChipPositions, state => {
    console.log('#detectChipPositions')
    setLog('Chip positions detected.')
    let chips = state.chips
    chips = chips.map((chip, i) => {
      chip.coordinates = calculateChipCoordinates(chip._id)
      return chip
    })
    return { ...state, chips }
  })

  .on(moveChip, (state, data) => {
    setLog('Chip moved.')
    const chips = state.chips.map(chip => {
      if (chip._id === data.chip) {
        chip.field = data.field
      }
      return chip
    })
    return { ...state, chips }
  })

export default $gameChips
