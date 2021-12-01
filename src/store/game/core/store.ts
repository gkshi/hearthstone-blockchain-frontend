import { createStore } from 'effector'
import {
  initGame,
  syncGame,
  resetGame,
  showGameModal,
  hideGameModal,
  rollTheDice,
  hideDices, buyField, showDices
} from './events'
import { setLog } from '../../logs/events'
import { Company, Modal, State } from './types'
import { generateFieldSet, getGameConfig } from '../../../helpers/game'
import { setActivePlayer, setPlayerSet } from '../players/events'
import { detectChipPositions, setChipSet } from '../chips/events'
import { Client } from '../players/types'
import $gamePlayers from '../players/store'

const initialState = (): State => ({
  id: null,
  slots: 0,
  fields: [],

  modal: null,

  dices: {
    show: false,
    values: []
  },

  turn: 0,
  isInitialized: false
})

export const $game = createStore<State>(initialState())
  .on(initGame, (state, data) => {
    setLog('Game initialized.')
    const fields = generateFieldSet()
    const gameConfig = getGameConfig(data.rules)
    const initialBalance = gameConfig.initialBalance
    setPlayerSet({
      clients: (data.players as Client[]),
      initialBalance
    })

    return {
      ...state,
      id: data.id,
      payers: data.players,
      slots: data.slots,
      fields,
      isInitialized: true
    }
  })

  .on(syncGame, (state, data) => {
    setChipSet(data.chips.list)
    setTimeout(() => detectChipPositions(), 0)
    setLog('Game started.')
    return state
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

export default $game
