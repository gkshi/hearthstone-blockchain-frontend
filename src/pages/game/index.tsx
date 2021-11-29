import React, { useEffect } from 'react'
import { useStore } from 'effector-react'
import { router } from '../../index'
import { SyncData } from '../../react-app-env'
import { $socket } from '../../store/socket/store'

import GameTable from '../../components/game/table'
import GamePlayers from '../../components/game/players'
import GameMenu from '../../components/game/menu'

import './_index.scss'

function GamePage () {
  const socket = useStore($socket).socket

  useEffect(() => {
    socket.on('sync', (data: SyncData) => {
      if (!data.hasActiveGame) {
        router.navigate('home')
      }
    })
  }, [])

  return (
    <div className="page -game">
      <div className="page-parent">
        <div className="page-parent-intro flex center">
          <aside className="game-aside flex column j-between">
            <GamePlayers />
            <GameMenu />
          </aside>
          <GameTable />
        </div>
      </div>
    </div>
  )
}

export default GamePage
