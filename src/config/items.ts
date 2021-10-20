import { Item, Company } from '../types/game'

export const items = {
  top: [
    {
      id: 'company_1',
      alias: 'chanel',
      name: 'Chanel',
      type: 'company',
      color: 'orange',
      price: 60
    }
  ],

  right: [
    {
      id: 'company_7',
      alias: 'vk',
      name: 'VK',
      type: 'company',
      color: 'blue-green',
      price: 140
    }
  ],

  bottom: [
    {
      id: 'company_15',
      alias: 'aeroflot',
      name: 'Aeroflot',
      type: 'company',
      color: 'green',
      price: 220
    }
  ],

  left: [
    {
      id: 'company_23',
      alias: 'youtube',
      name: 'YouTube',
      type: 'company',
      color: 'violet',
      price: 300
    }
  ]
} as {
  top: Item[] | Company[],
  right: Item[] | Company[],
  bottom: Item[] | Company[],
  left: Item[] | Company[]
}

export function getItems (query: string | object): Item[] {
  if (typeof query === 'string') {
    query = { id: query }
  }
  const allItems = [...items.top, ...items.right, ...items.bottom, ...items.left]
  return allItems.filter(item => {
    let isFits = true
    Object.keys(query).forEach(key => {
      // @ts-ignore
      isFits = query[key] === item[key]
    })
    return isFits
  })
}

export function getItem (query: string | object) {
  return getItems(query)[0]
}

export default items
