import { Player } from '../game/players/types'

export interface Log {
  author?: Player,
  content: string
}

// eslint-disable-next-line no-redeclare
export class Log {
  constructor (props) {
    if (typeof props === 'string') {
      this.content = props
    } else {
      this.content = props.content
      this.author = props.author
    }
  }
}

export type State = Log[]
