import { createStore } from 'effector'
import { showNotification, hideNotification, hideLastNotification, hideAllNotifications } from './events'
import { State, Notification } from './types'

const initialState: State = []

export const $notifications = createStore<State>(initialState)
  .on(showNotification, (state, data) => {
    const notification = new Notification(data)
    const set = new Set([...state, notification])
    state = Array.from(set) as State
    return state
  })
  .on(hideNotification, (state, id) => {
    state = state.filter((i) => i.id !== id)
    return state
  })
  .on(hideLastNotification, state => {
    state = state.slice(0, 1)
    return state
  })
  .on(hideAllNotifications, () => [])

export default $notifications
