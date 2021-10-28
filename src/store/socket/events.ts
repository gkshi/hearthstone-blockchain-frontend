import { SocketDomain } from './domain'
import { SocketInstance } from './types'

export const setSocket = SocketDomain.createEvent<SocketInstance>('set socket')
