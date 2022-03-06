import { RoomsDomain } from './domain'
import { Room } from './types'
import { ID } from '../../react-app-env'

export const addRoom = RoomsDomain.createEvent<Room>('add room')

export const setRooms = RoomsDomain.createEvent<Room[]>('add rooms')

export const removeRoom = RoomsDomain.createEvent<ID>('remove room')
