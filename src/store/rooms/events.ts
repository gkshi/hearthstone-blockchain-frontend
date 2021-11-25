import { RoomsDomain } from './domain'
import { Room } from './types'

export const addRoom = RoomsDomain.createEvent<Room>('add room')

export const setRooms = RoomsDomain.createEvent<Room[]>('add rooms')
