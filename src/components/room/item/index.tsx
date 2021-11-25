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

  const isPlayerAlreadyJoined = () => {
    const roomPlayers = data.players.map(i => i._id)
    return roomPlayers.includes(user._id)
  }

  const isJoinable = slotIndex => {
    const slotPlayer = data.players[slotIndex]
    return !slotPlayer &&
      slotPlayer?._id !== user._id &&
      !isHost() &&
      !isPlayerAlreadyJoined()
  }

  const isExitable = slotIndex => {
    const slotPlayer = data.players[slotIndex]
    return slotPlayer?._id === user._id
  }

  const closeRoom = () => {
    socket.emit('close-room', data.id)
  }

  const onJoin = index => {
    socket.emit('join-to-room', {
      room: data.id,
      player: user,
      index
    })
  }

  const onExit = index => {
    socket.emit('exit-from-room', {
      room: data.id,
      player: user,
      index
    })
  }

  const slots = () => {
    const arr = []
    for (let i = 0; i < data.slots; i++) {
      arr.push(i)
    }
    return arr.map(i => <RoomSlot
      player={data.players[i]}
      key={i}
      index={i}
      joinable={isJoinable(i)}
      exitable={isExitable(i)}
      onJoin={onJoin}
      onExit={onExit}
    />)
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
