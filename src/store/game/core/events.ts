import { GameDomain } from './domain'
import { DiceProps, GameData, ModalProps, FieldBuyingProps } from './types'

export const initGame = GameDomain.createEvent<GameData>('init game')
export const syncGame = GameDomain.createEvent<GameData>('sync game')
export const resetGame = GameDomain.createEvent<void>('reset game')

export const showGameModal = GameDomain.createEvent<ModalProps>('show game modal')
export const hideGameModal = GameDomain.createEvent<void>('hide game modal')

export const rollTheDice = GameDomain.createEvent<DiceProps>('roll the dice')
export const showDices = GameDomain.createEvent<void>('show dices')
export const hideDices = GameDomain.createEvent<void>('hide dices')

export const buyField = GameDomain.createEvent<FieldBuyingProps>('buy field')
