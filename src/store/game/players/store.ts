import { createStore } from 'effector'
// import { generatePlayerSet } from '../../../helpers/game'
import { clearAllPlayersData, dropPlayer, setActivePlayer, setPlayerSet } from './events'
import { setActiveChip } from '../chips/events'
import { setLog } from '../../logs/events'
import { Player, State } from './types'

const initialState = (): State => ({
  players: [],
  currentPlayer: null,
  activePlayer: null
})

export const $gamePlayers = createStore<State>(initialState())
  .on(setPlayerSet, (state, data) => {
    const players = data.map(i => new Player(i))
    return { ...state, players }
  })
  .on(setActivePlayer, (state, id) => {
    const activePlayer = state.players.find(i => i._id === id)
    if (state.activePlayer && state.activePlayer._id === id) {
      return state
    }
    setLog(`Now is ${activePlayer.color} player's turn.`)
    setActiveChip(activePlayer.color)
    return { ...state, activePlayer }
  })
  .on(dropPlayer, (state, playerId) => {
    const player = state.players.find(i => i._id === playerId)
    // player.hasLeft = true
    const updatedList = state.players.map(player => {
      if (player._id === playerId) {
        player.hasLeft = true
      }
      return player
    })
    setLog(`Player ${player.name} left the game.`)
    return { ...state, players: updatedList }
  })

  .on(clearAllPlayersData, state => {
    return initialState()
  })

export default $gamePlayers
