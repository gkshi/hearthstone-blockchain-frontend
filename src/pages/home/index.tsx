import React, { useEffect } from 'react'
import { useStore } from 'effector-react'
import { $socket } from '../../store/socket/store'

import RoomCreator from '../../components/room-creator'
import RoomList from '../../components/room/list'

import './_index.scss'

function HomePage () {
  const socket = useStore($socket).socket

  useEffect(() => {
    socket.emit('sync')
  }, [])

  return (
    <div className="page -home">
      <section>
        <h1>Monopoly online</h1>
      </section>

      <div className="flex a-start j-between">
        <section>
          <RoomList />
        </section>
        <section>
          <RoomCreator />
        </section>
      </div>
    </div>
  )
}

export default HomePage
