import React from 'react'
import { Room } from '../../store/rooms/types'

interface RoomComponentProps {
  data: Room
}

function RoomComponent ({ data }: RoomComponentProps) {
  return (
    <div className="component -room">
      room {data.id}
    </div>
  )
}

export default RoomComponent
