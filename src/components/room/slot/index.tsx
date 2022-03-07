import React from 'react'
import { Player } from '../../../store/game/players/types'
import { ID } from '../../../react-app-env'

import Loader from '../../loader'
import IconCross from '../../icons/cross'
import IconPlayer from '../../icons/player'
import IconPlus from '../../icons/plus'

import './_index.scss'

interface RoomSlotComponentProps {
  index: number,
  player?: Player,
  host?: ID,
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
    return props.player ? props.player.name : null
  }

  return (
    <div className="component -room-slot">
      {props.droppable && <a href="#" onClick={e => drop(e)}>
        <div className="cross">
          <IconCross />
        </div>
      </a>}
      {props.exitable && props.host !== props.player._id && <a href="#" onClick={e => exit(e)}>
        <div className="cross">
          <IconCross />
        </div>
      </a>}

      <div className="circle flex center">
        {player() ? <IconPlayer /> : null}
        {isWaiting() && <Loader />}
        {props.joinable && <a className="icon-plus" href="#" onClick={e => join(e)}>
          <IconPlus />
        </a>}
      </div>

      <div className="text">
        {props.joinable && 'Join'}
        {player() || <span>&nbsp;</span>}
        {isWaiting() && <span>Waiting...</span>}
      </div>
    </div>
  )
}

export default RoomSlotComponent
