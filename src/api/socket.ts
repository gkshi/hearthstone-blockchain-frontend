import { $socket } from '../store/socket/store'
import { io } from 'socket.io-client'
import { setSocket } from '../store/socket/events'
import { showNotification } from '../store/notifications/events'
import { $auth } from '../store/auth/store'

const addSocketListeners = socket => {
  socket.on('connect', () => {
    showNotification({
      type: 'success',
      heading: 'Socket connected',
      content: `ID #${socket.id}`
    })
  })

  socket.on('room-created', data => {
    showNotification({
      heading: 'Room created',
      content: data.toString()
    })
  })

  socket.on('disconnect', () => {
    showNotification({
      type: 'success',
      heading: 'Socket disconnected'
    })
  })
}

export const connect = () => {
  const storedSocket = $socket.getState().socket
  if (storedSocket && storedSocket.connected) {
    return
  }
  const user = $auth.getState().user
  const socket = io(process.env.REACT_APP_API_BASE_URL, {
    // withCredentials: true
    auth: {
      id: user?._id || null
    }
  })

  addSocketListeners(socket)

  setSocket(socket)
}
