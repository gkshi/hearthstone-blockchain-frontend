/// <reference types="react-scripts" />

import { AxiosError } from 'axios'
import { Room } from './store/rooms/types'

export type ID = string | number

export interface SyncData {
  rooms: Room[]
}

export module Api {
  export interface ApiErrorData {
    message?: string,
    code?: number
  }

  export interface Error extends AxiosError {
    data: ApiErrorData
  }
}
