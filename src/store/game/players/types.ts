import { ID, Price } from '../core/types'

export type PlayerColor = 'red' | 'yellow' | 'green' | 'blue' | 'violet'

export interface Client {
  _id: ID,
  name?: string
}

export interface PlayerSet {
  clients: Client[],
  initialBalance: Price
}

export interface PlayerOptions {
  _id?: ID,
  name?: string
}

export interface Player {
  _id: ID,
  name: string,
  color: PlayerColor,
  balance?: Price,
  photo?: string,
  hasLeft: boolean
}

// eslint-disable-next-line no-redeclare
export class Player {
  constructor (props) {
    this._id = props._id
    this.name = props.name || `Player #${props.id}`
    this.color = props.color
    this.balance = props.balance
    this.photo = props.photo
    this.hasLeft = props.hasLeft
  }
}

export interface State {
  players: Player[],
  currentPlayer: Player | null,
  activePlayer: Player | null
}
