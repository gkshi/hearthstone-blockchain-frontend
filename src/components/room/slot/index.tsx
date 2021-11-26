import React from 'react'
import { Player } from '../../../store/game/players/types'

import Loader from '../../loader'

import './_index.scss'

interface RoomSlotComponentProps {
  index: number,
  player?: Player,
  joinable: boolean,
  exitable: boolean,
  onJoin: Function,
  onExit: Function
}

function RoomSlotComponent (props: RoomSlotComponentProps) {
  const isWaiting = () => {
    return !props.player && !props.joinable
  }

  const join = e => {
    e.preventDefault()
    props.onJoin(props.index)
  }

  const exit = e => {
    e.preventDefault()
    props.onExit(props.index)
  }

  const playerContent = () => {
    if (props.player) {
      return <div>player {props.player.name}</div>
    }
    return null
  }

  return (
    <div className="component -room-slot">
      {playerContent()}
      {isWaiting() && <Loader />}
      {props.exitable && <a href="#" onClick={e => exit(e)}>exit</a>}
      {props.joinable && <a href="#" onClick={e => join(e)}>join</a>}
    </div>
  )
}

export default RoomSlotComponent
