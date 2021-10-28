import React, { useEffect, useState } from 'react'
import { CSSTransition } from 'react-transition-group'

import './_index.scss'
import { useStore } from 'effector-react'
import { $game } from '../../../../store/game/store'

interface ModalWrapperProps extends React.ComponentProps<any> {
  id: string
}

function GameModalWrapperComponent (props: ModalWrapperProps) {
  const storedModal = useStore($game).modal
  const [show, setShow] = useState(false)

  useEffect(() => {
    const unwatch = $game.watch(state => {
      setShow(state.modal && state.modal.type === props.id)
    })
    return () => {
      unwatch()
    }
  }, [storedModal])

  return (
    <CSSTransition
      in={show}
      timeout={0}
      classNames="modal"
      unmountOnExit
    >
      <div className="component -game-modal-wrapper">
        {props.children}
      </div>
    </CSSTransition>
  )
}

export default GameModalWrapperComponent
