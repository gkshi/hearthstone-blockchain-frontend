import { ID, PlayerColor, Price } from '../../../types/game'

export interface Client {
  _id: ID,
}

export interface PlayerSet {
  clients: Client[],
  initialBalance: Price
}

export interface Player {
  _id: ID,
  name?: string,
  color: PlayerColor,
  balance?: Price,
  photo?: string,
  isActive: boolean
}

// eslint-disable-next-line no-redeclare
export class Player {
  constructor (props, initialBalance) {
    this._id = props._id
    this.name = props.name || `Player #${props.id}`
    this.color = props.color
    this.balance = initialBalance
    this.photo = props.photo
    this.isActive = false
  }
}

export interface State {
  players: Player[],
  currentPlayer: Player | null,
  activePlayer: Player | null
}
