export type ID = number | string

export type Price = number | string

// export enum ItemType {
//   Start = 'start',
//   Company = 'company',
//   CommunityChest = 'chest',
//   Tax = 'tax',
//   Chance = 'chance',
//   Jail = 'jail',
//   Parking = 'parking',
//   Police = 'police'
// }

export interface Item {
  id: ID,
  type: 'start' | 'company' | 'chest' | 'tax' | 'chance' | 'jail' | 'parking' | 'police'
}

export interface ItemData {
  id?: Item.id,
  type?: Item.type
}

export interface Company extends Item {
  alias: string,
  name: string,
  color: 'pink' | 'red' | 'orange' | 'blue-green' | 'vinous' | 'blue' | 'green' | 'light-blue' | 'violet' | 'gray',
  price?: Price
}

export interface Player {
  id: ID,
  name?: string,
  color: 'red' | 'yellow' | 'green' | 'blue' | 'violet',
  balance?: Price,
  photo?: string
}
