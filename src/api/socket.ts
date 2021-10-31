import { $socket } from '../store/socket/store'
import { io } from 'socket.io-client'
import { setSocket } from '../store/socket/events'
import { showNotification } from '../store/notifications/events'

const addSocketListeners = socket => {
  socket.on('connect', () => {
    showNotification({
      type: 'success',
      heading: 'Socket connected',
      content: `ID #${socket.id}`
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
  const socket = io(process.env.REACT_APP_API_BASE_URL, {
    // withCredentials: true
  })

  addSocketListeners(socket)

  setSocket(socket)
}
