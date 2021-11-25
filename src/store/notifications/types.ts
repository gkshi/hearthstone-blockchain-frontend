export type NotificationType = 'default' | 'success' | 'warning' | 'error'

export type NotificationID = string

export interface NotificationOptions {
  id?: NotificationID,
  type?: NotificationType,
  heading?: string,
  content?: string,
  duration?: number,
  infinite?: boolean,
  closable?: boolean
}

export interface Notification {
  id: NotificationID,
  type: NotificationType,
  heading?: string,
  content: string,
  duration: number,
  infinite: boolean,
  closable: boolean
}

const defaultNotificationProps = {
  type: 'default',
  heading: '',
  content: '',
  duration: 4000, // "0" is the same as "infinite: true"
  infinite: false, // "true" is the same as "duration: 0"
  closable: true
}

// eslint-disable-next-line no-redeclare
export class Notification {
  constructor (props) {
    const mergedProps = { ...defaultNotificationProps, ...props }

    this.id = Math.random().toFixed(10).slice(2)
    this.type = mergedProps.type
    this.heading = mergedProps.heading
    this.content = mergedProps.content

    this.duration = mergedProps.duration
    this.infinite = mergedProps.infinite
    this.closable = mergedProps.closable
  }
}

export type State = Notification[]
