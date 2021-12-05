import React, { useEffect, useState } from 'react'
import { useRouter } from 'react-router5'
import { $socket } from '../../store/socket/store'
import { $auth } from '../../store/auth/store'
import { initGame } from '../../store/game/core/events'

import UIButton from '../../components/ui/button'

import './_index.scss'

function RoomCreatorComponent () {
  const [slots, setSlots] = useState(4)
  const [disabled, setDisabled] = useState(false)
  const socket = $socket.getState().socket
  const router = useRouter()

  const createRoom = () => {
    const data = {
      slots,
      players: [$auth.getState().user]
    }
    socket.emit('create-room', data)
  }

  useEffect(() => {
    socket.on('game:start', data => {
      initGame(data)
      router.navigate('game')
    })

    socket.on('sync', data => {
      setDisabled(data.hasCreatedRoom)
    })

    return () => {}
  }, [])

  return (
    <div className={`component -room-creator ${disabled ? '-disabled' : ''}`}>
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
