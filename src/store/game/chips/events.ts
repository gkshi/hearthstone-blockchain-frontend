import { GameChipsDomain } from './domain'

export const setChipSet = GameChipsDomain.createEvent<number>('set chip set')
