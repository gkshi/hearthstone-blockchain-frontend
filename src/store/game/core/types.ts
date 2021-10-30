import { ID } from '../../../types/game'
import { Player } from '../players/types'

export type GameRules = 'classic'

export interface GameData {
  rules: GameRules,
  clients: any[]
}

export interface Field {
  id: ID
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

export type DiceProps = [number, number] | []

export interface State {
  players: Player[],
  fields: Field[],

  currentPlayer: Player | null,
  activePlayer: Player | null,
  modal: Modal,

  dices: {
    show: boolean,
    values: DiceProps
  },

  turn: number
}
