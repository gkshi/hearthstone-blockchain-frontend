import { createStore } from 'effector'
import { generatePlayerSet } from '../../../helpers/game'
import { setActivePlayer, setPlayerSet } from './events'
import { setActiveChip } from '../chips/events'
import { setLog } from '../../logs/events'
import { State } from './types'

const initialState = (): State => ({
  players: [],
  currentPlayer: null,
  activePlayer: null
})

export const $gamePlayers = createStore<State>(initialState())
  .on(setPlayerSet, (state, data) => {
    setLog('Player set generated.')
    const players = generatePlayerSet(data.clients, data.initialBalance)
    return { ...state, players }
  })
  .on(setActivePlayer, (state, id) => {
    setLog('Active player set.')
    const activePlayer = state.players.find(i => i._id === id)
    setActiveChip(activePlayer.color)
    return { ...state, activePlayer }
  })

export default $gamePlayers
