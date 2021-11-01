import { ID } from '../core/types'
import { PlayerColor } from '../players/types'

export interface MoveChipProps {
  chip: ID,
  field: ID
}

export interface Chip {
  _id: ID,
  color: PlayerColor,
  field: ID,
  coordinates?: {
    top: string,
    left: string
  } | null
}

// eslint-disable-next-line no-redeclare
export class Chip {
  constructor (props) {
    this._id = props._id
    this.color = props.color
    this.field = props.field
    this.coordinates = props.coordinates || null
  }
}

export interface State {
  chips: Chip[],
  activeChip: Chip
}
