import { GameDomain } from './domain'
import { GameData, ModalProps } from './types'

export const startGame = GameDomain.createEvent<GameData>('start game')

export const resetGame = GameDomain.createEvent<void>('reset game')

export const showGameModal = GameDomain.createEvent<ModalProps>('show game modal')
