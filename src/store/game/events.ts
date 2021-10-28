import { GameDomain } from './domain'
import { GameData } from './types'

export const startGame = GameDomain.createEvent<GameData>('start game')

export const resetGame = GameDomain.createEvent<void>('reset game')
