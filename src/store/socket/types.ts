import { Socket } from 'socket.io-client'

export type ModalName = string

export type SocketInstance = Socket | null

export type State = {
  socket: SocketInstance
}
