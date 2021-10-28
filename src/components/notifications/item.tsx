import React, { useEffect, useState } from 'react'
import { NotificationOptions } from '../../store/notifications/types'
import { hideNotification } from '../../store/notifications/events'

import IconCross from '../icons/cross'

interface NotificationProps {
  data?: NotificationOptions
}

function NotificationComponent ({ data }: NotificationProps) {
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

      {data.heading && <div>{data.heading}</div>}
      <div dangerouslySetInnerHTML={{ __html: data.content }} />
    </div>
  )
}

export default NotificationComponent
