import React from 'react'
import $socket from '../../store/socket/store'

import UIButton from '../../components/ui/button'

function RoomCreatorComponent () {
  const socket = $socket.getState().socket

  const createRoom = () => {
    console.log('createRoom')
    const data = {}
    socket.emit('create-room', data)
  }

  return (
    <div className="component -room-creator">
      <div>room creator</div>
      <div>d</div>
      <div>
        <UIButton onClick={createRoom}>create</UIButton>
      </div>
    </div>
  )
}

export default RoomCreatorComponent
