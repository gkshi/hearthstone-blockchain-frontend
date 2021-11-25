import { ID } from '../../react-app-env'

export class Room {
  public id: ID

  constructor (props) {
    this.id = props.id
  }
}

export type State = Room[]
