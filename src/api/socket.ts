import { $socket } from '../store/socket/store'
import { io } from 'socket.io-client'
import { setSocket } from '../store/socket/events'
import { showNotification, hideNotification } from '../store/notifications/events'
import { $auth } from '../store/auth/store'
import { addRoom, setRooms } from '../store/rooms/events'
import { SyncData } from '../react-app-env'

const addSocketListeners = (socket, storedSocket) => {
  socket.on('connect', () => {
    if (!storedSocket) {
      showNotification({
        type: 'success',
        heading: 'Socket connected',
        content: 'Connected to server successfully.'
      })
    }
  })

  socket.on('sync', (data: SyncData) => {
    console.log('# sync', data)
    data.hasActiveGame
      ? showNotification('has-active-game')
      : hideNotification('has-active-game')
    setRooms(data.rooms)
  })

  socket.on('room-created', data => {
    addRoom(data)
  })

  socket.on('game:start', () => {
    showNotification({
      heading: 'Game starts'
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

  addSocketListeners(socket, storedSocket)

  setSocket(socket)
}
