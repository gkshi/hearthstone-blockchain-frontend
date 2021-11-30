import { Player, PlayerColor, PlayerOptions } from '../players/types'

// global
export type ID = number | string
export type Price = number | string
export type GameRules = 'classic'

export interface GameInitOptions {
  id: ID,
  slots: number,
  rules: string,
  players: PlayerOptions[]
}

export interface GameData {
  rules: GameRules,
  clients: any[]
}

export type GameField = Field | Company

// field
export type FieldType = 'start' | 'company' | 'chest' | 'tax' | 'chance' | 'jail' | 'parking' | 'police'
export type FieldColor = 'pink' | 'red' | 'orange' | 'blue-green' | 'vinous' | 'blue' | 'green' | 'light-blue' | 'violet' | 'gray'

export interface Field {
  id: ID,
  type: FieldType
}

// eslint-disable-next-line no-redeclare
export class Field {
  constructor (props) {
    this.id = props.id
    this.type = props.type
  }
}

export interface FieldCategory {
  id: ID,
  alias: string,
  name: string
}

// eslint-disable-next-line no-redeclare
export class FieldCategory {
  constructor (props) {
    this.id = props.id
    this.alias = props.alias
    this.name = props.name
  }
}

export interface FieldData {
  id?: ID,
  alias?: string,
  name?: string,
  type?: FieldType,
  category?: string,
  color?: FieldColor
}

export interface Company extends Field {
  alias: string,
  name: string,
  color: FieldColor,
  price?: Price,
  category: FieldCategory,
  owner?: PlayerColor | null
}

// eslint-disable-next-line no-redeclare
export class Company extends Field {
  constructor (props) {
    super(props)
    this.alias = props.alias
    this.name = props.name
    this.category = new FieldCategory(props.category)
    this.owner = props.owner || null
  }
}

// modals
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

// dices
export type DiceProps = [number, number] | []

// buying
export interface FieldBuyingProps {
  field: ID,
  owner: PlayerColor
}

// game state
export interface State {
  id?: ID,
  slots: number,
  fields: GameField[],

  modal: Modal,

  dices: {
    show: boolean,
    values: DiceProps
  },

  isInitialized: boolean,
  turn: number
}
