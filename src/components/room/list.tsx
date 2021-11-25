import React from 'react'
import { useStore } from 'effector-react'
import $rooms from '../../store/rooms/store'

import Room from './index'

function RoomListComponent () {
  const rooms = useStore($rooms)

  const list = () => {
    return rooms.map(room => <Room data={room} key={room.id} />)
  }

  return (
    <div className="component -room-list">
      {list()}
    </div>
  )
}

export default RoomListComponent
