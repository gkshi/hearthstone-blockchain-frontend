import { GameDomain } from './domain'
import { DiceProps, GameData, GameInitOptions, ModalProps, FieldBuyingProps } from './types'

export const initGame = GameDomain.createEvent<GameInitOptions>('init game')
export const startGame = GameDomain.createEvent<GameData>('start game')
export const resetGame = GameDomain.createEvent<void>('reset game')

export const showGameModal = GameDomain.createEvent<ModalProps>('show game modal')
export const hideGameModal = GameDomain.createEvent<void>('hide game modal')

export const rollTheDice = GameDomain.createEvent<DiceProps>('roll the dice')
export const hideDices = GameDomain.createEvent<void>('hide dices')

export const buyField = GameDomain.createEvent<FieldBuyingProps>('buy field')
