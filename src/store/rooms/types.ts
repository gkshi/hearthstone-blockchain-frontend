import { ID } from '../../react-app-env'
import { Player } from '../game/players/types'

type Slots = 2 | 3 | 4 | 5

export class Room {
  public id: ID
  public slots: Slots
  public players: Player[]
  public host: ID

  constructor (props) {
    this.id = props.id
    this.slots = props.slots
    this.players = props.players
    this.host = props.host
  }
}

export type State = Room[]
