import React, { useEffect } from 'react'
import { useStore } from 'effector-react'
import { $rooms } from '../../../store/rooms/store'
import { $socket } from '../../../store/socket/store'

import Room from '../item'
import IconOptions from '../../icons/options'
import IconPlayers from '../../icons/player'

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
      <div className="filter-bar flex a-center j-between">
        <div>Rooms created: {rooms.length}</div>
        <div className="options flex a-center">
          <div className="filter-item -disabled flex a-center">
            <IconOptions />
            <div>rules: classic</div>
          </div>
          <div className="filter-item -disabled flex a-center">
            <IconPlayers />
            <div>players: 2-5</div>
          </div>
        </div>
      </div>
      <div className="list">
        {rooms.length
          ? list()
          : <div>No active rooms yet. You may create one --&#62;</div>}
      </div>
    </div>
  )
}

export default RoomListComponent
