import React from 'react'
import { Player } from '../../../store/game/players/types'

import './_index.scss'

interface RoomSlotComponentProps {
  player?: Player,
  joinable: boolean
}

function RoomSlotComponent ({ player, joinable }: RoomSlotComponentProps) {
  const join = () => {
    console.log('join')
  }

  const playerContent = () => {
    if (player) {
      return <div>player {player.name}</div>
    }
    return null
  }

  return (
    <div className="component -room-slot">
      {playerContent()}
      {joinable && <a href="#" onClick={join}>join</a>}
    </div>
  )
}

export default RoomSlotComponent
