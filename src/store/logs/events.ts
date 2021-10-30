import { LogsDomain } from './domain'
import { Log } from './types'

export const setLog = LogsDomain.createEvent<Log | string>('set log')
