import React from 'react'
import { closeModal } from '../../store/modals/events'
import { useStore } from 'effector-react'
import { $socket } from '../../store/socket/store'
import { useRouter } from 'react-router5'

import ModalWrapper from './wrapper'
import UIButton from '../ui/button'

function LeaveGameModal () {
  const id = 'leave-game'
  const socket = useStore($socket).socket
  const router = useRouter()

  const cancel = () => {
    closeModal(id)
  }

  const leave = () => {
    socket.emit('leave-game')
    cancel()
    router.navigate('home')
  }

  return (
    <ModalWrapper id={id}>
      <div>Are you sure you want to leave the game?</div>
      <div className="buttons">
        <UIButton size="small" theme="danger" onClick={leave}>Leave</UIButton>
        <UIButton size="small" theme="dark" onClick={cancel}>Cancel</UIButton>
      </div>
    </ModalWrapper>
  )
}

export default LeaveGameModal
