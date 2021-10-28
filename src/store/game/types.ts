import { ID, Item, Player, PlayerColor } from '../../types/game'

export type GameRules = 'classic'

export interface GameData {
  rules: GameRules,
  clients: any[]
}

export interface Chip {
  _id: ID
  color: PlayerColor
}

export interface Field extends Item {
  //
}

export type ModalType = 'turn' | 'buying' | 'tax'

export interface ModalProps {
  id?: string,
  type?: ModalType
}

export interface Modal {
  type: ModalType
}

// eslint-disable-next-line no-redeclare
export class Modal {
  constructor (props) {
    this.type = props.type
  }
}

export interface State {
  players: Player[],
  chips: Chip[],
  fields: Field[],

  currentPlayer: Player | null,
  activePlayer: Player | null,
  modal: Modal,

  turn: number
}
