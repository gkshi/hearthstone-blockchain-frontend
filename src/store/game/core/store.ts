import { createStore } from 'effector'
import {
  initGame,
  startGame,
  resetGame,
  showGameModal,
  hideGameModal,
  rollTheDice,
  hideDices, buyField
} from './events'
import { setLog } from '../../logs/events'
import { Company, Modal, State } from './types'
import { generateFieldSet, getGameConfig } from '../../../helpers/game'
import { setActivePlayer, setPlayerSet } from '../players/events'
import { detectChipPositions, setChipSet } from '../chips/events'
import { Client } from '../players/types'

const initialState = (): State => ({
  id: null,
  slots: 0,
  fields: [],
  players: [],

  currentPlayer: null,
  activePlayer: null,
  modal: null,

  dices: {
    show: false,
    values: []
  },

  turn: 0,
  isInited: false
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
      fields,
      isInited: true
    }
  })

  .on(startGame, (state, data) => {
    setLog('Game started.')
    setChipSet(state.slots)
    detectChipPositions()
    setActivePlayer(state.players[0]._id)
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

  .on(rollTheDice, (state, values) => {
    setLog(`Брошены кости (${values.toString()}).`)
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
