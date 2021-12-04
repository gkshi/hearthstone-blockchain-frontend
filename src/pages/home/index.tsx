import React, { useEffect } from 'react'
import { useStore } from 'effector-react'
import { $auth } from '../../store/auth/store'
import { $socket } from '../../store/socket/store'

import RoomCreator from '../../components/room-creator'
import RoomList from '../../components/room/list'

import './_index.scss'

function HomePage () {
  const user = useStore($auth).user
  const socket = useStore($socket).socket

  const username = () => {
    return user ? user.username : 'guest'
  }

  useEffect(() => {
    socket.emit('sync')
  }, [])

  return (
    <div className="page -home">
      <section>
        <div>monopoly-blockchain-frontend</div>
        <div>
          <span>hello, </span>
          <span>{username()}</span>
        </div>
      </section>

      <div className="flex a-start j-between">
        <section>
          <div>rooms:</div>
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
