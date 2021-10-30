import { Item, Company } from '../types/game'

export const items = {
  top: [
    {
      id: 'company_1',
      alias: 'chanel',
      name: 'Chanel',
      type: 'company',
      color: 'pink',
      price: 60000
    },
    {
      id: 'chest_1',
      type: 'chest'
    },
    {
      id: 'company_2',
      alias: 'boss',
      name: 'Hugo Boss',
      type: 'company',
      color: 'pink',
      price: 60000
    },
    {
      id: 'tax_1',
      type: 'tax'
    },
    {
      id: 'company_3',
      alias: 'mercedes',
      name: 'Mercedes Benz',
      type: 'company',
      color: 'red',
      price: 200000
    },
    {
      id: 'company_4',
      alias: 'adidas',
      name: 'Adidas',
      type: 'company',
      color: 'orange',
      price: 100000
    },
    {
      id: 'chance_1',
      type: 'chance'
    },
    {
      id: 'company_5',
      alias: 'puma',
      name: 'Puma',
      type: 'company',
      color: 'orange',
      price: 100000
    },
    {
      id: 'company_6',
      alias: 'nike',
      name: 'Nike',
      type: 'company',
      color: 'orange',
      price: 120000
    }
  ],

  right: [
    {
      id: 'company_7',
      alias: 'vk',
      name: 'VK',
      type: 'company',
      color: 'blue-green',
      price: 140000
    },
    {
      id: 'company_8',
      alias: 'epicgames',
      name: 'Epic Games',
      type: 'company',
      color: 'vinous',
      price: 150000
    },
    {
      id: 'company_9',
      alias: 'facebook',
      name: 'Facebook',
      type: 'company',
      color: 'blue-green',
      price: 140000
    },
    {
      id: 'company_10',
      alias: 'telegram',
      name: 'Telegram',
      type: 'company',
      color: 'blue-green',
      price: 160000
    },
    {
      id: 'company_11',
      alias: 'audi',
      name: 'Audi',
      type: 'company',
      color: 'red',
      price: 200000
    },
    {
      id: 'company_12',
      alias: 'cocacola',
      name: 'Coca-Cola',
      type: 'company',
      color: 'blue',
      price: 180000
    },
    {
      id: 'chest_2',
      type: 'chest'
    },
    {
      id: 'company_13',
      alias: 'pepsi',
      name: 'Pepsi',
      type: 'company',
      color: 'blue',
      price: 180000
    },
    {
      id: 'company_14',
      alias: 'fanta',
      name: 'Fanta',
      type: 'company',
      color: 'blue',
      price: 180000
    }
  ],

  bottom: [
    {
      id: 'company_15',
      alias: 'aeroflot',
      name: 'Aeroflot',
      type: 'company',
      color: 'green',
      price: 220000
    },
    {
      id: 'chance_2',
      type: 'chance'
    },
    {
      id: 'company_16',
      alias: 'smartavia',
      name: 'Smart Avia',
      type: 'company',
      color: 'green',
      price: 220000
    },
    {
      id: 'company_17',
      alias: 's7',
      name: 'S7 Airlines',
      type: 'company',
      color: 'green',
      price: 240000
    },
    {
      id: 'company_18',
      alias: 'mitsubishi',
      name: 'Mitsubishi',
      type: 'company',
      color: 'red',
      price: 200000
    },
    {
      id: 'company_19',
      alias: 'mcdonalds',
      name: 'McDonald’s',
      type: 'company',
      color: 'light-blue',
      price: 260000
    },
    {
      id: 'company_20',
      alias: 'burgerking',
      name: 'Burger King',
      type: 'company',
      color: 'light-blue',
      price: 260000
    },
    {
      id: 'company_21',
      alias: 'ea',
      name: 'EA Sports',
      type: 'company',
      color: 'vinous',
      price: 150000
    },
    {
      id: 'company_22',
      alias: 'kfc',
      name: 'Kentucky Fried Chicken',
      type: 'company',
      color: 'light-blue',
      price: 280000
    }
  ],

  left: [
    {
      id: 'company_23',
      alias: 'youtube',
      name: 'YouTube',
      type: 'company',
      color: 'violet',
      price: 300000
    },
    {
      id: 'company_24',
      alias: 'amazon',
      name: 'Amazon',
      type: 'company',
      color: 'violet',
      price: 300000
    },
    {
      id: 'chest_3',
      type: 'chest'
    },
    {
      id: 'company_25',
      alias: 'microsoft',
      name: 'Microsoft',
      type: 'company',
      color: 'violet',
      price: 320000
    },
    {
      id: 'company_26',
      alias: 'bmw',
      name: 'BMW',
      type: 'company',
      color: 'red',
      price: 200000
    },
    {
      id: 'chance_3',
      type: 'chance'
    },
    {
      id: 'company_27',
      alias: 'apple',
      name: 'Apple',
      type: 'company',
      color: 'gray',
      price: 350000
    },
    {
      id: 'tax_2',
      type: 'tax'
    },
    {
      id: 'company_28',
      alias: 'mi',
      name: 'Xiaomi',
      type: 'company',
      color: 'gray',
      price: 400000
    }
  ]
} as {
  top: Item[] | Company[],
  right: Item[] | Company[],
  bottom: Item[] | Company[],
  left: Item[] | Company[]
}

export const systemItems = [
  {
    id: 'start',
    alias: 'start',
    type: 'start'
  },
  {
    id: 'jail',
    alias: 'jail',
    type: 'jail'
  },
  {
    id: 'police',
    alias: 'police',
    type: 'police'
  },
  {
    id: 'parking',
    alias: 'parking',
    type: 'parking'
  }
]

export function getAllItems () {
  return [
    systemItems[0],
    ...items.top,
    systemItems[1],
    ...items.right,
    systemItems[2],
    ...items.bottom,
    systemItems[3],
    ...items.left]
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
