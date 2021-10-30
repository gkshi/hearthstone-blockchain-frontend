import { createStore } from 'effector'
import {
  startGame,
  resetGame,
  showGameModal,
  hideGameModal,
  rollTheDice,
  hideDices
} from './events'
import { setLog } from '../../logs/events'
import { Modal, State } from './types'
import {
  generateChipSet,
  getGameConfig
} from '../../../helpers/game'
import { setActivePlayer, setPlayerSet } from '../players/events'

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

    // general
    const gameConfig = getGameConfig(data.rules)
    // chips
    const chips = generateChipSet(5)
    // players
    const initialBalance = gameConfig.initialBalance
    setPlayerSet({
      clients: data.clients,
      initialBalance
    })
    setActivePlayer(data.clients[0]._id)

    return { ...state, chips }
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
