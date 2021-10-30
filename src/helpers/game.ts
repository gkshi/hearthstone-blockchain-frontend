import { chipColors } from '../config/chips'
import { gameConfig } from '../config/game'
import { Player } from '../store/game/players/types'
import { Chip } from '../store/game/chips/types'
import { getAllItems, systemItems } from '../config/items'

export const getGameConfig = (rules) => {
  return gameConfig[rules]
}

export const generateChipSet = length => {
  const set = []

  for (let i = 0; i < length; i++) {
    set.push(new Chip({
      _id: i,
      color: chipColors[i]
    }))
  }

  return set
}

export const generateFieldSet = () => {
  return getAllItems()
}

export const generatePlayerSet = (clients, initialBalance) => {
  return clients.map((client, i) => {
    client.color = chipColors[i]
    return new Player(client, initialBalance)
  })
  // return clients.map((client, i) => ({
  //   _id: client._id,
  //   color: chipColors[i],
  //   name: client.name,
  //   photo: client.photo,
  //   balance: initialBalance || 0
  // }))
}
