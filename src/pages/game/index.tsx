import React, { useEffect } from 'react'
import { useStore } from 'effector-react'
import { router } from '../../index'
import { SyncData } from '../../react-app-env'
import { $socket } from '../../store/socket/store'
import { syncGame, initGame, showGameModal, rollTheDice } from '../../store/game/core/events'
import { setActivePlayer } from '../../store/game/players/events'
import { Player } from '../../store/game/players/types'
import { $auth } from '../../store/auth/store'
import { $game } from '../../store/game/core/store'

import GameTable from '../../components/game/table'
import GamePlayers from '../../components/game/players'
import GameMenu from '../../components/game/menu'

import './_index.scss'

function GamePage () {
  const user = useStore($auth).user
  const game = useStore($game)
  const socket = useStore($socket).socket

  const setActivePlayerAndShowDices = (player: Player) => {
    setActivePlayer(player._id)
    if (player._id === user._id) {
      showGameModal({
        type: 'turn'
      })
    }
  }

  const exitFromGamePage = () => {
    router.navigate('home')
  }

  useEffect(() => {
    socket.on('sync', (data: SyncData) => {
      if (!data.hasActiveGame) {
        exitFromGamePage()
      }
    })

    socket.on('game:sync', data => {
      if (!data) {
        exitFromGamePage()
        return
      }
      if (!game.isInitialized) {
        initGame(data)
      }
      syncGame(data)
      setActivePlayerAndShowDices(data.activePlayer)
    })

    socket.on('game:set-active-player', (player: Player) => {
      setActivePlayerAndShowDices(player)
    })

    socket.on('game:roll-the-dice', (values: [number, number]) => {
      rollTheDice(values)
    })

    socket.emit('game:sync')
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
