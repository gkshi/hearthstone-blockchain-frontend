/// <reference types="react-scripts" />

import { AxiosError } from 'axios'

export type ID = string | number

export module Api {
  export interface ApiErrorData {
    message?: string,
    code?: number
  }

  export interface Error extends AxiosError {
    data: ApiErrorData
  }
}
