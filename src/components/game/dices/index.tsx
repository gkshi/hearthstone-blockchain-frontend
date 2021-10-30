import React, { useEffect, useState } from 'react'
import { hideDices } from '../../../store/game/events'
import { useStore } from 'effector-react'
import $game from '../../../store/game/store'
import { nextTick } from '../../../helpers/next-tick'

import { CSSTransition } from 'react-transition-group'

import './_index.scss'

function GameDiceComponent () {
  const storedDices = useStore($game).dices
  const [show, setShow] = useState(false)

  const hide = () => {
    setShow(false)
    hideDices()
  }

  const setDiceValue = (number, el) => {
    let x = 0; let y = 20; let z = -20
    switch (number) {
      case 1:
        x = 0
        y = 20
        z = -20
        break
      case 2:
        x = -100
        y = -150
        z = 10
        break
      case 3:
        x = 0
        y = -100
        z = -10
        break
      case 4:
        x = 0
        y = 100
        z = -10
        break
      case 5:
        x = 80
        y = 120
        z = -10
        break
      case 6:
        x = 0
        y = 200
        x = 10
        break
    }
    el.style.transform = `rotateX(${x}deg) rotateY(${y}deg) rotateZ(${z}deg)`
  }

  const animate = () => {
    const platform = document.getElementById('platform')
    platform.classList.remove('stop')
    platform.classList.add('playing')

    setTimeout(function () {
      platform.classList.remove('playing')
      platform.classList.add('stop')

      const dice1 = document.getElementById('dice1')
      setDiceValue(storedDices.values[0], dice1)
      const dice2 = document.getElementById('dice2')
      setDiceValue(storedDices.values[1], dice2)

      platform.style.transform = 'translate3d(0,0, 0px)'
    }, 800)
  }

  useEffect(() => {
    setShow(storedDices.show)
  }, [storedDices.show])

  useEffect(() => {
    if (show) {
      nextTick(() => {
        animate()
      })
      setTimeout(() => {
        hide()
      }, 2000)
    }
  }, [show])

  return (
    <CSSTransition
      in={show}
      timeout={0}
      classNames="dice"
      unmountOnExit
    >
      <div className="component -game-dice">
        <div className="intro">
          <div id="platform" className="flex center">
            <div className="dice" id="dice1">
              <div className="side front">
                <div className="dot center"></div>
              </div>
              <div className="side front inner"></div>
              <div className="side top">
                <div className="dot dtop dleft"></div>
                <div className="dot dbottom dright"></div>
              </div>
              <div className="side top inner"></div>
              <div className="side right">
                <div className="dot dtop dleft"></div>
                <div className="dot center"></div>
                <div className="dot dbottom dright"></div>
              </div>
              <div className="side right inner"></div>
              <div className="side left">
                <div className="dot dtop dleft"></div>
                <div className="dot dtop dright"></div>
                <div className="dot dbottom dleft"></div>
                <div className="dot dbottom dright"></div>
              </div>
              <div className="side left inner"></div>
              <div className="side bottom">
                <div className="dot center"></div>
                <div className="dot dtop dleft"></div>
                <div className="dot dtop dright"></div>
                <div className="dot dbottom dleft"></div>
                <div className="dot dbottom dright"></div>
              </div>
              <div className="side bottom inner"></div>
              <div className="side back">
                <div className="dot dtop dleft"></div>
                <div className="dot dtop dright"></div>
                <div className="dot dbottom dleft"></div>
                <div className="dot dbottom dright"></div>
                <div className="dot center dleft"></div>
                <div className="dot center dright"></div>
              </div>
              <div className="side back inner"></div>
              <div className="side cover x"></div>
              <div className="side cover y"></div>
              <div className="side cover z"></div>
            </div>
            <div className="dice" id="dice2">
              <div className="side front">
                <div className="dot center"></div>
              </div>
              <div className="side front inner"></div>
              <div className="side top">
                <div className="dot dtop dleft"></div>
                <div className="dot dbottom dright"></div>
              </div>
              <div className="side top inner"></div>
              <div className="side right">
                <div className="dot dtop dleft"></div>
                <div className="dot center"></div>
                <div className="dot dbottom dright"></div>
              </div>
              <div className="side right inner"></div>
              <div className="side left">
                <div className="dot dtop dleft"></div>
                <div className="dot dtop dright"></div>
                <div className="dot dbottom dleft"></div>
                <div className="dot dbottom dright"></div>
              </div>
              <div className="side left inner"></div>
              <div className="side bottom">
                <div className="dot center"></div>
                <div className="dot dtop dleft"></div>
                <div className="dot dtop dright"></div>
                <div className="dot dbottom dleft"></div>
                <div className="dot dbottom dright"></div>
              </div>
              <div className="side bottom inner"></div>
              <div className="side back">
                <div className="dot dtop dleft"></div>
                <div className="dot dtop dright"></div>
                <div className="dot dbottom dleft"></div>
                <div className="dot dbottom dright"></div>
                <div className="dot center dleft"></div>
                <div className="dot center dright"></div>
              </div>
              <div className="side back inner"></div>
              <div className="side cover x"></div>
              <div className="side cover y"></div>
              <div className="side cover z"></div>
            </div>
          </div>
        </div>
      </div>
    </CSSTransition>
  )
}

export default GameDiceComponent
