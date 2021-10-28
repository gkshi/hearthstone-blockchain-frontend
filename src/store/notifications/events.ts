import { NotificationsDomain } from './domain'
import { NotificationID, NotificationOptions } from './types'

export const showNotification = NotificationsDomain.createEvent<NotificationOptions>('show notification')

export const hideNotification = NotificationsDomain.createEvent<NotificationID>('hide notification')

export const hideLastNotification = NotificationsDomain.createEvent<void>('hide last notification')

export const hideAllNotifications = NotificationsDomain.createEvent<void>('hide all notifications')
