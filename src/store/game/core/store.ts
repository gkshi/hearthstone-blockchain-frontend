import { createStore } from 'effector'
import {
  initGame,
  syncGame,
  resetGame,
  showGameModal,
  hideGameModal,
  rollTheDice,
  hideDices,
  buyField,
  showDices,
  setWinner, clearAllGameData
} from './events'
import { setLog } from '../../logs/events'
import { Company, Modal, State } from './types'
import { generateFieldSet } from '../../../helpers/game'
import { clearAllPlayersData, setPlayerSet } from '../players/events'
import { clearAllChipsData, detectChipPositions, setChipSet } from '../chips/events'
import { Player } from '../players/types'
// import { Client } from '../players/types'

const initialState = (): State => ({
  id: null,
  slots: 0,
  fields: [],
  modal: null,
  dices: {
    show: false,
    values: []
  },
  isInitialized: false,
  isStarted: false,
  winner: null
})

export const $game = createStore<State>(initialState())
  .on(initGame, (state, data) => {
    setLog('Game initialized.')
    const fields = generateFieldSet()

    return {
      ...state,
      id: data.id,
      payers: data.players,
      slots: data.slots,
      fields,
      isInitialized: true,
      isStarted: false
    }
  })

  .on(syncGame, (state, data) => {
    setPlayerSet(data.players as Player[])
    setChipSet(data.chips.list)
    setTimeout(() => detectChipPositions(), 0)
    if (!state.isStarted) {
      setLog('Game started.')
    }
    return { ...state, isStarted: true }
  })

  .on(resetGame, (state) => {
    setLog('Game reseted.')
    return initialState()
  })

  .on(showGameModal, (state, data) => {
    const modal = new Modal(data)
    return { ...state, modal }
  })

  .on(hideGameModal, (state) => {
    return { ...state, modal: null }
  })

  .on(showDices, state => {
    return {
      ...state,
      dices: { show: true, values: [] }
    }
  })

  .on(rollTheDice, (state, values) => {
    return {
      ...state,
      dices: { show: true, values }
    }
  })

  .on(hideDices, (state) => {
    return {
      ...state,
      dices: { show: false, values: [] }
    }
  })

  .on(buyField, (state, data) => {
    setLog(`Field ${data.field} was bought by ${data.owner} player.`)
    const fields = state.fields.map((field: Company) => {
      if (field.alias === data.field) {
        field.owner = data.owner
      }
      return field
    })
    return { ...state, fields }
  })

  .on(setWinner, (state, winner) => {
    console.log('# setWinner', winner)
    return { ...state, winner }
  })

  .on(clearAllGameData, state => {
    clearAllChipsData()
    clearAllPlayersData()
    return initialState()
  })

export default $game
