import { GamePlayersDomain } from './domain'
import { ID } from '../core/types'
import { PlayerSet } from './types'

export const setActivePlayer = GamePlayersDomain.createEvent<ID>('set active player')

export const setPlayerSet = GamePlayersDomain.createEvent<PlayerSet>('set player set')
