import React from 'react'
import { Player } from '../../../store/game/players/types'

import Loader from '../../loader'

import './_index.scss'

interface RoomSlotComponentProps {
  index: number,
  player?: Player,
  joinable: boolean,
  exitable: boolean,
  droppable: boolean,
  onJoin: Function,
  onExit: Function,
  onDrop: Function
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

  const drop = e => {
    e.preventDefault()
    props.onDrop(props.index)
  }

  const player = () => {
    if (props.player) {
      return <div>player {props.player.name}</div>
    }
    return null
  }

  return (
    <div className="component -room-slot">
      {player()}
      {isWaiting() && <Loader />}
      {props.droppable && <a href="#" onClick={e => drop(e)}>drop</a>}
      {props.exitable && <a href="#" onClick={e => exit(e)}>exit</a>}
      {props.joinable && <a href="#" onClick={e => join(e)}>join</a>}
    </div>
  )
}

export default RoomSlotComponent
