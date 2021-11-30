import { createStore } from 'effector'
import { setLog } from './events'
import { State, Log } from './types'

export const $game = createStore<State>([])
  .on(setLog, (state, data) => {
    const log = new Log(data)
    return [log, ...state]
  })

export default $game
