import React, { useState } from 'react'
import { $socket } from '../../store/socket/store'
import { $auth } from '../../store/auth/store'

import UIButton from '../../components/ui/button'

function RoomCreatorComponent () {
  const [slots, setSlots] = useState(4)
  const socket = $socket.getState().socket

  const createRoom = () => {
    console.log('createRoom')
    const data = {
      slots,
      players: [$auth.getState().user]
    }
    socket.emit('create-room', data)
  }

  return (
    <div className="component -room-creator">
      <div>room creator</div>
      <div>
        <span>slots:</span>
        <input type="number" value={slots} min={2} max={5} onChange={e => setSlots(+e.target.value)} />
      </div>
      <div>
        <UIButton onClick={createRoom}>create</UIButton>
      </div>
    </div>
  )
}

export default RoomCreatorComponent
