export type Price = number | string

export interface Item {
  id: string,
  type: 'place' | 'event' | 'company',
  name?: string,
  color?: 'red' | 'yellow' | 'blue' | 'green' | 'vinous' | 'light-blue' | 'pink' | 'orange',
  price?: Price
}
