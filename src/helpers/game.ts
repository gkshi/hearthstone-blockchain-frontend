import { chipColors } from '../config/chips'
import { gameConfig } from '../config/game'
import { Player } from '../store/game/players/types'
import { Chip } from '../store/game/chips/types'
import { items, getAllItems } from '../config/items'
import $game from '../store/game/core/store'
import { Company, Field } from '../store/game/core/types'
import $gameChips from '../store/game/chips/store'

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
  const items = getAllItems()
  return items.map(item => {
    return item.type === 'company'
      ? new Company(item)
      : new Field(item)
  })
}

export const getFieldRow = (fieldId) => {
  const topIDs = items.top.map(i => i.id)
  const rightIDs = items.right.map(i => i.id)
  const bottomIDs = items.bottom.map(i => i.id)
  const leftIDs = items.bottom.map(i => i.id)

  if (topIDs.includes(fieldId)) {
    return 'top'
  }
  if (rightIDs.includes(fieldId)) {
    return 'right'
  }
  if (bottomIDs.includes(fieldId)) {
    return 'bottom'
  }
  if (leftIDs.includes(fieldId)) {
    return 'left'
  }
  return 'corner'
}

const fitChipCoordinates = ({ middleCoordinates, chipsAmountOnField, chipNumber, row }) => {
  let [top, left] = middleCoordinates
  switch (chipsAmountOnField) {
    // 2 chips on a field
    case 2:
      if (['right', 'left', 'corner'].includes(row)) {
        // horizontal and corner fields
        switch (chipNumber) {
          case 0:
            left = left - 20
            break
          case 1:
            left = left + 20
            break
        }
      } else {
        // vertical fields
        switch (chipNumber) {
          case 0:
            top = top - 20
            break
          case 1:
            top = top + 20
            break
        }
      }
      break

    // 3 chips on a field
    case 3:
      switch (chipNumber) {
        case 0:
          top = top - 20
          break
        case 1:
          top = top + 20
          left = left - 20
          break
        case 2:
          top = top + 20
          left = left + 20
          break
      }
      break

    case 4:
      switch (chipNumber) {
        case 0:
          top = top - 20
          left = left - 20
          break
        case 1:
          top = top - 20
          left = left + 20
          break
        case 2:
          top = top + 20
          left = left - 20
          break
        case 3:
          top = top + 20
          left = left + 20
          break
      }
      break

    case 5:
      switch (chipNumber) {
        case 0:
          top = top - 26
          left = left - 26
          break
        case 1:
          top = top - 26
          left = left + 26
          break
        case 2:
          top = top + 26
          left = left - 26
          break
        case 3:
          top = top + 26
          left = left + 26
          break
      }
      break

    // 1 chip on a field
    default:
      break
  }
  return [top, left]
}

export const calculateChipCoordinates = (chipId) => {
  const state = $gameChips.getState()
  const chip = state.chips.find(i => i._id === chipId)
  const fieldEl = document.querySelector(`[data-field="${chip.field}"]`)
  const fieldRect = fieldEl.getBoundingClientRect()
  const row = getFieldRow(chip.field)
  const chipsEl = document.querySelector('[data-chips]')
  const parentRect = chipsEl.getBoundingClientRect()

  const middleTop = (fieldRect.top + fieldRect.height / 2) - parentRect.top
  const middleLeft = (fieldRect.left + fieldRect.width / 2) - parentRect.left

  const allFields = state.chips.map(i => i.field)
  const chipsAmountOnField = allFields.filter(i => i === chip.field).length
  const fieldAllChips = state.chips.filter(i => i.field === chip.field)
  const chipNumber = fieldAllChips.findIndex(i => i._id === chipId)

  const [top, left] = fitChipCoordinates({
    middleCoordinates: [middleTop, middleLeft],
    chipsAmountOnField,
    chipNumber,
    row
  })

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
}

export const getField = (fieldId) => {
  return $game.getState().fields.find(i => i.id === fieldId)
}

export const getFieldNumber = (fieldId) => {
  const fields = $game.getState().fields
  let number = 0

  fields.every((field, i) => {
    if (field.id === fieldId) {
      number = i + 1
      return false
    }
    return true
  })

  return number % fields.length
}

export const getFieldByNumber = (number) => {
  const fields = $game.getState().fields
  number = number % fields.length

  return fields[number - 1]
}

export const getFieldBySteps = (from, values, direction = 'default') => {
  const steps = values[0] + values[1]
  const numberOfFieldFrom = getFieldNumber(from)
  const numberOfFieldTo = direction === 'default'
    ? numberOfFieldFrom + steps
    : numberOfFieldFrom - steps

  return getFieldByNumber(numberOfFieldTo)
}
