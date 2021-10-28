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

export interface State {
  players: Player[],
  chips: Chip[],
  fields: Field[],

  currentPlayer: Player | null,
  activePlayer: Player | null,

  turn: number
}
