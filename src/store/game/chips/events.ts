import { GameChipsDomain } from './domain'
import { MoveChipProps } from './types'
import { PlayerColor } from '../players/types'

export const setChipSet = GameChipsDomain.createEvent<number>('set chip set')

export const setActiveChip = GameChipsDomain.createEvent<PlayerColor>('set active chip')

export const moveChip = GameChipsDomain.createEvent<MoveChipProps>('set chip field')

export const detectChipPositions = GameChipsDomain.createEvent('detect chip positions')
