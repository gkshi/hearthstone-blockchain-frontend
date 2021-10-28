import React from 'react'
import { useStore } from 'effector-react'
import $notifications from '../../store/notifications/store'

import Notification from './item'

import './_index.scss'

function NotificationsComponent () {
  const list = useStore($notifications)

  const notifications = () => {
    return list.map((item, i) => <Notification data={item} key={i} />)
  }

  return (
    <div className="component -notifications">
      {notifications()}
    </div>
  )
}

export default NotificationsComponent
