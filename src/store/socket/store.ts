import { createStore } from 'effector'
import { setSocket } from './events'
import { State } from './types'

const initialState: State = {
  socket: null
}

export const $socket = createStore<State>(initialState)
  .on(setSocket, (state, socket) => {
    return { ...state, socket }
  })

export default $socket
