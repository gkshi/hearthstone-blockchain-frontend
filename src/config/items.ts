import { Item } from '../types/game'

export const items = {
  top: [
    {
      id: 'free_parking',
      type: 'event',
      name: 'Бесплатная стоянка'
    },
    {
      id: 'place_1',
      type: 'place',
      name: 'ул. Тверская',
      color: 'red',
      price: '220'
    },
    {
      id: 'chance_1',
      type: 'event',
      name: 'Шанс'
    },
    {
      id: 'place_2',
      type: 'place',
      name: 'Пушкинская ул.',
      color: 'red',
      price: '220'
    },
    {
      id: 'place_3',
      type: 'place',
      name: 'пл. Маяковского',
      color: 'red',
      price: '240'
    },
    {
      id: 'company_1',
      type: 'company',
      name: 'Казанская железная дорога',
      price: '200'
    },
    {
      id: 'place_4',
      type: 'place',
      name: 'ул. Грузинский вал',
      color: 'yellow',
      price: '260'
    },
    {
      id: 'place_5',
      type: 'place',
      name: 'ул. Чайковского',
      color: 'yellow',
      price: '260'
    },
    {
      id: 'company_2',
      type: 'company',
      name: 'Водопровод',
      price: '150'
    },
    {
      id: 'place_6',
      type: 'place',
      name: 'Смоленская пл.',
      color: 'yellow',
      price: '280'
    },
    {
      id: 'go_to_jail',
      type: 'event',
      name: 'Отправляйтесь в тюрьму'
    }
  ],

  right: [
    {
      id: 'place_7',
      type: 'place',
      name: 'ул. Щусева',
      color: 'green',
      price: '300'
    },
    {
      id: 'place_8',
      type: 'place',
      name: 'Гоголевский бульвар',
      color: 'green',
      price: '300'
    },
    {
      id: 'community_chest_1',
      type: 'event',
      name: 'Общественная казна'
    },
    {
      id: 'place_9',
      type: 'place',
      name: 'Кутузовский проспект',
      color: 'green',
      price: '320'
    },
    {
      id: 'company_3',
      type: 'company',
      name: 'Ленинградская железная дорога',
      price: '200'
    },
    {
      id: 'chance_2',
      type: 'event',
      name: 'Шанс'
    },
    {
      id: 'place_10',
      type: 'place',
      name: 'ул. Малая Бронная',
      color: 'blue',
      price: '350'
    },
    {
      id: 'luxury_tax',
      type: 'event',
      name: 'Сверхналог',
      price: '100'
    },
    {
      id: 'place_11',
      type: 'place',
      name: 'ул. Арбат',
      color: 'blue',
      price: '400'
    }
  ],

  bottom: [
    {
      id: 'go',
      type: 'event',
      name: 'Получи зарплату, проходя это поле'
    },
    {
      id: 'place_12',
      type: 'place',
      name: 'Житная ул.',
      color: 'vinous',
      price: '60'
    },
    {
      id: 'community_chest_2',
      type: 'event',
      name: 'Общественная казна'
    },
    {
      id: 'place_13',
      type: 'place',
      name: 'Нагатинская ул.',
      color: 'vinous',
      price: '60'
    },
    {
      id: 'income_tax',
      type: 'event',
      name: 'Подоходный налог',
      price: '200'
    },
    {
      id: 'company_4',
      type: 'company',
      name: 'Рижская железная дорога',
      price: '200'
    },
    {
      id: 'place_14',
      type: 'place',
      name: 'Варшавское шоссе',
      color: 'light-blue',
      price: '100'
    },
    {
      id: 'chance_3',
      type: 'event',
      name: 'Шанс'
    },
    {
      id: 'place_15',
      type: 'place',
      name: 'ул. Огарева',
      color: 'light-blue',
      price: '100'
    },
    {
      id: 'place_16',
      type: 'place',
      name: 'Первая Парковая ул.',
      color: 'light-blue',
      price: '120'
    },
    {
      id: 'just_visiting',
      type: 'event',
      name: 'Просто посетители'
    }
  ],

  left: [
    {
      id: 'place_17',
      type: 'place',
      name: 'ул. Полянка',
      color: 'orange',
      price: '140'
    },
    {
      id: 'company_5',
      type: 'company',
      name: 'Электростанция',
      price: '150'
    },
    {
      id: 'place_18',
      type: 'place',
      name: 'ул. Сретенка',
      color: 'pink',
      price: '140'
    },
    {
      id: 'place_19',
      type: 'place',
      name: 'Ростовская наб.',
      color: 'pink',
      price: '160'
    },
    {
      id: 'company_6',
      type: 'company',
      name: 'Курская железная дорога',
      price: '200'
    },
    {
      id: 'place_20',
      type: 'place',
      name: 'Рязанский проспект',
      color: 'pink',
      price: '180'
    },
    {
      id: 'community_chest_3',
      type: 'event',
      name: 'Общественная казна'
    },
    {
      id: 'place_21',
      type: 'place',
      name: 'ул. Вавилова',
      color: 'orange',
      price: '180'
    },
    {
      id: 'place_22',
      type: 'place',
      name: 'Рублевское шоссе',
      color: 'orange',
      price: '200'
    }
  ]
} as {
  top: Item[],
  right: Item[],
  bottom: Item[],
  left: Item[]
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
