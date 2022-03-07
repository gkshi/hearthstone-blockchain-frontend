import React, { useEffect, useState } from 'react'
import { useRouter } from 'react-router5'
import { $socket } from '../../store/socket/store'
import { $auth } from '../../store/auth/store'
import { initGame } from '../../store/game/core/events'
import { removeRoom } from '../../store/rooms/events'

import UIButton from '../../components/ui/button'

import './_index.scss'

function RoomCreatorComponent () {
  const [slots, setSlots] = useState(2)
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
    socket.on('game:start', payload => {
      initGame(payload.game)
      removeRoom(payload.fromRoom)
      router.navigate('game')
    })

    socket.on('sync', data => {
      setDisabled(data.hasCreatedRoom)
    })

    return () => {
      socket.off('sync')
    }
  }, [])

  return (
    <div className={`component -room-creator ${disabled ? '-disabled' : ''}`}>
      <div className="intro">
        <div className="flex a-center j-between">
          <div>Room creator</div>
          <div className="flex center">
            <div>player slots:</div>
            <div>
              <input type="number" value={slots} min={2} max={5} onChange={e => setSlots(+e.target.value)} />
            </div>
          </div>
        </div>

        <div className="button">
          <UIButton onClick={createRoom}>Create new room</UIButton>
        </div>
      </div>
    </div>
  )
}

export default RoomCreatorComponent
