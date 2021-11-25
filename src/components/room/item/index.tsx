import React from 'react'
import { $auth } from '../../../store/auth/store'
import { useStore } from 'effector-react'
import { Room } from '../../../store/rooms/types'

import RoomSlot from '../slot'

import './_index.scss'
import $socket from '../../../store/socket/store'

interface RoomComponentProps {
  data: Room
}

function RoomComponent ({ data }: RoomComponentProps) {
  const user = useStore($auth).user
  const socket = useStore($socket).socket

  const isHost = () => {
    return user._id === data.host
  }

  const isJoinable = slotIndex => {
    const slotPlayer = data.players[slotIndex]
    return !slotPlayer && slotPlayer?._id !== user._id && !isHost()
  }

  const slots = () => {
    const arr = []
    for (let i = 0; i < data.slots; i++) {
      arr.push(i)
    }
    return arr.map(i => <RoomSlot
      player={data.players[i]}
      key={i}
      joinable={isJoinable(i)}
    />)
  }

  const closeRoom = () => {
    socket.emit('close-room', data.id)
  }

  return (
    <div className="component -room">
      <div>room #{data.id}</div>
      <div className="slots flex a-center j-start">
        {slots()}
      </div>
      {isHost() && <div>
        <a href="#" onClick={closeRoom}>close room</a>
      </div>}
    </div>
  )
}

export default RoomComponent
