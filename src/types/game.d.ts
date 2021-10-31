export type ID = number | string
export type Price = number | string

export type ItemType = 'start' | 'company' | 'chest' | 'tax' | 'chance' | 'jail' | 'parking' | 'police'
export type ItemColor = 'pink' | 'red' | 'orange' | 'blue-green' | 'vinous' | 'blue' | 'green' | 'light-blue' | 'violet' | 'gray'

export type PlayerColor = 'red' | 'yellow' | 'green' | 'blue' | 'violet'

export interface Item {
  id: ID,
  type: ItemType
}

export interface ItemData {
  id?: Item.id,
  type?: Item.type,
  name?: string,
  category?: string
}

export interface Company extends Item {
  alias: string,
  name: string,
  color: ItemColor,
  price?: Price,
  category: ID
}

export interface ItemCategory {
  id: ID,
  alias: string,
  name: string
}
