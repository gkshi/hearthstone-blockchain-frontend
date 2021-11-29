import React from 'react'
import { useStore } from 'effector-react'
import $notifications from '../../../store/notifications/store'

import Notification from '../item'
import HasActiveGameNotification from '../has-active-game'

import './_index.scss'

function NotificationsComponent () {
  const list = useStore($notifications)

  const customNotifications = () => {
    return list
      .filter(i => typeof i !== 'string')
      .map((item, i) => <Notification data={item} key={item.id} />)
  }

  const showNotification = (id): boolean => {
    return !!list.find(i => i === id)
  }

  return (
    <div className="component -notifications">
      {customNotifications()}
      {showNotification('has-active-game') && <HasActiveGameNotification/>}
    </div>
  )
}

export default NotificationsComponent
