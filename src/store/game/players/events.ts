import { GamePlayersDomain } from './domain'
import { ID } from '../core/types'
import { Player } from './types'

export const setActivePlayer = GamePlayersDomain.createEvent<ID>('set active player')

export const setPlayerSet = GamePlayersDomain.createEvent<Player[]>('set player set')

export const dropPlayer = GamePlayersDomain.createEvent<ID>('drop player')

export const clearAllPlayersData = GamePlayersDomain.createEvent<void>('clear all data')
