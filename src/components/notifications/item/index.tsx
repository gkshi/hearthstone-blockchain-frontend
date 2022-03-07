import React, { useEffect, useState } from 'react'
import { Notification, NotificationOptions } from '../../../store/notifications/types'
import { hideNotification } from '../../../store/notifications/events'

import IconCross from '../../icons/cross'

import './_index.scss'

interface NotificationProps extends React.ComponentProps<any> {
  data?: NotificationOptions
}

function NotificationComponent ({ data, children }: NotificationProps) {
  data = new Notification(data)
  const [timer, setTimer] = useState(null)

  const setHideTimeout = () => {
    if (data.duration && !data.infinite) {
      setTimer(setTimeout(() => {
        hideNotification(data.id)
      }, data.duration))
    }
  }

  const onCloseClick = () => {
    clearTimeout(timer)
    hideNotification(data.id)
  }

  useEffect(() => {
    setHideTimeout()
  }, [])

  return (
    <div className="component -notification">
      {data.closable && <div className="close" onClick={onCloseClick}>
        <IconCross />
      </div>}

      {data.heading && <div className="heading">{data.heading}</div>}

      {children
        ? <div>{children}</div>
        : <div dangerouslySetInnerHTML={{ __html: data.content }} />}
    </div>
  )
}

export default NotificationComponent
