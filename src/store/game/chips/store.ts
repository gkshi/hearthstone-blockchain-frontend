import { createStore } from 'effector'
import { calculateChipCoordinates } from '../../../helpers/game'
import { setLog } from '../../logs/events'
import { detectChipPositions, moveChip, setActiveChip, setChipSet, clearAllChipsData } from './events'
import { State } from './types'

const initialState = (): State => ({
  chips: [],
  activeChip: null
})

export const $gameChips = createStore<State>(initialState())
  .on(setChipSet, (state, data) => {
    return { ...state, chips: data }
  })

  .on(setActiveChip, (state, color) => {
    const activeChip = state.chips.find(i => i.color === color)
    return { ...state, activeChip }
  })

  .on(detectChipPositions, state => {
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

  .on(clearAllChipsData, state => {
    return initialState()
  })

export default $gameChips
