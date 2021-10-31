import { chipColors } from '../config/chips'
import { gameConfig } from '../config/game'
import { Player } from '../store/game/players/types'
import { Chip } from '../store/game/chips/types'
import { getAllItems } from '../config/items'
import $game from '../store/game/core/store'

export const getGameConfig = (rules) => {
  return gameConfig[rules]
}

export const generateChipSet = length => {
  const set = []

  for (let i = 0; i < length; i++) {
    set.push(new Chip({
      _id: i + 1,
      color: chipColors[i]
    }))
  }

  return set
}

export const generateFieldSet = () => {
  return getAllItems()
}

export const calculateChipCoordinates = (elRect, chipsAmount, chipNumber) => {
  const chipsEl = document.querySelector('[data-chips]')
  const parentRect = chipsEl.getBoundingClientRect()

  const top = (elRect.top + elRect.height / 2) - parentRect.top
  const left = (elRect.left + elRect.width / 2) - parentRect.left

  return {
    top: `${top}px`,
    left: `${left}px`
  }
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

export const getField = (fieldId) => {
  return $game.getState().fields.find(i => i.id === fieldId)
}
