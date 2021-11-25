import { RoomsDomain } from './domain'
import { Room } from './types'

export const addRoom = RoomsDomain.createEvent<Room>('add room')
