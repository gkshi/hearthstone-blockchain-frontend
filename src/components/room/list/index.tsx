import React, { useEffect } from 'react'
import { useStore } from 'effector-react'
import { $rooms } from '../../../store/rooms/store'
import { $socket } from '../../../store/socket/store'

import Room from '../item'

import './_index.scss'

function RoomListComponent () {
  const socket = useStore($socket).socket
  const rooms = useStore($rooms)

  const list = () => {
    return rooms.map(room => <Room data={room} key={room.id} />)
  }

  useEffect(() => {
    socket.emit('watch-rooms')
    return () => {
      socket.emit('unwatch-rooms')
    }
  }, [])

  return (
    <div className="component -room-list">
      {list()}
    </div>
  )
}

export default RoomListComponent
