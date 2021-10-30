import { createStore } from 'effector'
import {
  startGame,
  resetGame,
  showGameModal,
  hideGameModal,
  rollTheDice,
  hideDices
} from './events'
import { setLog } from '../logs/events'
import { Modal, State } from './types'
import {
  generateChipSet,
  generatePlayerSet,
  getGameConfig
} from '../../helpers/game'

const initialState = (): State => ({
  chips: [],
  fields: [],
  players: [],

  currentPlayer: null,
  activePlayer: null,
  modal: null,

  dices: {
    show: false,
    values: []
  },

  turn: 0
})

export const $game = createStore<State>(initialState())
  .on(startGame, (state, data) => {
    setLog('Game started.')
    const chips = generateChipSet(5)
    const gameConfig = getGameConfig(data.rules)
    const initialBalance = gameConfig.initialBalance
    const players = generatePlayerSet(data.clients, initialBalance)
    return { ...state, chips, players }
  })
  .on(resetGame, (state) => {
    setLog('Игра сброшена.')
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
    setLog('Брошены кости.')
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

export default $game
