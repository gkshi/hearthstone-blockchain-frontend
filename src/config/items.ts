import { Field, Company, FieldCategory } from '../store/game/core/types'

export const categories = [
  {
    id: 1,
    alias: 'perfumery',
    name: 'Парфюмерия'
  },
  {
    id: 2,
    alias: 'auto',
    name: 'Автомобили'
  },
  {
    id: 3,
    alias: 'clothes',
    name: 'Одежда'
  },
  {
    id: 4,
    alias: 'social',
    name: 'Социальные сети'
  },
  {
    id: 5,
    alias: 'developers',
    name: 'Разработчики игр'
  },
  {
    id: 6,
    alias: 'drinks',
    name: 'Напитки'
  },
  {
    id: 7,
    alias: 'airlines',
    name: 'Авиакомпании'
  },
  {
    id: 8,
    alias: 'food',
    name: 'Еда'
  },
  {
    id: 9,
    alias: 'video_streaming',
    name: 'Видеостриминговые сервисы'
  },
  {
    id: 10,
    alias: 'digital',
    name: 'Цифровая техника'
  }
] as FieldCategory[]

export const items = {
  top: [
    {
      id: 'company_1',
      alias: 'chanel',
      name: 'Chanel',
      type: 'company',
      category: 'perfumery',
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
      category: 'perfumery',
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
      category: 'auto',
      color: 'red',
      price: 200000
    },
    {
      id: 'company_4',
      alias: 'adidas',
      name: 'Adidas',
      type: 'company',
      category: 'clothes',
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
      category: 'clothes',
      color: 'orange',
      price: 100000
    },
    {
      id: 'company_6',
      alias: 'nike',
      name: 'Nike',
      type: 'company',
      category: 'clothes',
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
      category: 'social',
      color: 'blue-green',
      price: 140000
    },
    {
      id: 'company_8',
      alias: 'epicgames',
      name: 'Epic Games',
      type: 'company',
      category: 'developers',
      color: 'vinous',
      price: 150000
    },
    {
      id: 'company_9',
      alias: 'facebook',
      name: 'Facebook',
      type: 'company',
      category: 'social',
      color: 'blue-green',
      price: 140000
    },
    {
      id: 'company_10',
      alias: 'telegram',
      name: 'Telegram',
      type: 'company',
      category: 'social',
      color: 'blue-green',
      price: 160000
    },
    {
      id: 'company_11',
      alias: 'audi',
      name: 'Audi',
      type: 'company',
      category: 'auto',
      color: 'red',
      price: 200000
    },
    {
      id: 'company_12',
      alias: 'cocacola',
      name: 'Coca-Cola',
      type: 'company',
      category: 'drinks',
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
      category: 'drinks',
      color: 'blue',
      price: 180000
    },
    {
      id: 'company_14',
      alias: 'fanta',
      name: 'Fanta',
      type: 'company',
      category: 'drinks',
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
      category: 'airlines',
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
      category: 'airlines',
      color: 'green',
      price: 220000
    },
    {
      id: 'company_17',
      alias: 's7',
      name: 'S7 Airlines',
      type: 'company',
      category: 'airlines',
      color: 'green',
      price: 240000
    },
    {
      id: 'company_18',
      alias: 'mitsubishi',
      name: 'Mitsubishi',
      type: 'company',
      category: 'auto',
      color: 'red',
      price: 200000
    },
    {
      id: 'company_19',
      alias: 'mcdonalds',
      name: 'McDonald’s',
      type: 'company',
      category: 'food',
      color: 'light-blue',
      price: 260000
    },
    {
      id: 'company_20',
      alias: 'burgerking',
      name: 'Burger King',
      type: 'company',
      category: 'food',
      color: 'light-blue',
      price: 260000
    },
    {
      id: 'company_21',
      alias: 'ea',
      name: 'EA Sports',
      type: 'company',
      category: 'developers',
      color: 'vinous',
      price: 150000
    },
    {
      id: 'company_22',
      alias: 'kfc',
      name: 'KFC',
      type: 'company',
      category: 'food',
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
      category: 'video_streaming',
      color: 'violet',
      price: 300000
    },
    {
      id: 'company_24',
      alias: 'netflix',
      name: 'Netflix',
      type: 'company',
      category: 'video_streaming',
      color: 'violet',
      price: 300000
    },
    {
      id: 'chest_3',
      type: 'chest'
    },
    {
      id: 'company_25',
      alias: 'twitch',
      name: 'Twitch',
      type: 'company',
      category: 'video_streaming',
      color: 'violet',
      price: 320000
    },
    {
      id: 'company_26',
      alias: 'bmw',
      name: 'BMW',
      type: 'company',
      category: 'auto',
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
      category: 'digital',
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
      category: 'digital',
      color: 'gray',
      price: 400000
    }
  ]
} as {
  top: Field[] | Company[],
  right: Field[] | Company[],
  bottom: Field[] | Company[],
  left: Field[] | Company[]
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
    id: 'parking',
    alias: 'parking',
    type: 'parking'
  },
  {
    id: 'police',
    alias: 'police',
    type: 'police'
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

export function getItems (query: string | object): Field[] {
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
