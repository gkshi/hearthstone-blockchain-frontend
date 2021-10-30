import { ID, Item, PlayerColor } from '../../../types/game'

export interface Chip {
  _id: ID
  color: PlayerColor,
  item: Item
}

// eslint-disable-next-line no-redeclare
export class Chip {
  constructor (props) {
    this._id = props._id
    this.color = props.color
  }
}

export interface State {
  chips: Chip[],
  activeChip: Chip
}
