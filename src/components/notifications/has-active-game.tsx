import React from 'react'
import { useRouter } from 'react-router5'
import { NotificationOptions } from '../../store/notifications/types'

import Notification from './item'
import UIButton from '../ui/button'
import { hideNotification } from '../../store/notifications/events'

function HasActiveGameNotification () {
  const router = useRouter()

  const data = {
    id: 'has-active-game',
    heading: 'You have an open game!',
    infinite: true,
    closable: false
  } as NotificationOptions

  const openGame = () => {
    router.navigate('game')
    hideNotification(data.id)
  }

  if (router.getState().name === 'game') {
    return null
  }

  return (
    <Notification data={data}>
      <UIButton onClick={openGame}>Open game</UIButton>
    </Notification>
  )
}

export default HasActiveGameNotification
