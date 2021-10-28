import { createStore } from 'effector'
import { startGame, resetGame, showGameModal } from './events'
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

  turn: 0
})

export const $game = createStore<State>(initialState())
  .on(startGame, (state, data) => {
    console.log('# start game')
    const chips = generateChipSet(5)
    const gameConfig = getGameConfig(data.rules)
    const initialBalance = gameConfig.initialBalance
    const players = generatePlayerSet(data.clients, initialBalance)
    return { ...state, chips, players }
  })
  .on(resetGame, (state) => {
    console.log('# reset game')
    return initialState()
  })
  .on(showGameModal, (state, data) => {
    console.log('# show modal')
    const modal = new Modal(data)
    return { ...state, modal }
  })

export default $game
