import React, { useEffect, useState } from 'react'
import { useStore } from 'effector-react'
import { nextTick } from '../../../helpers/next-tick'
import { hideDices } from '../../../store/game/core/events'
import $game from '../../../store/game/core/store'

import { CSSTransition } from 'react-transition-group'

import './_index.scss'
import { setLog } from '../../../store/logs/events'

function GameDiceComponent () {
  const storedDices = useStore($game).dices
  const [minAnimationShown, setMinAnimationShown] = useState(false)
  const minAnimationDelay = 1000
  const delayAfterSet = 1200

  const hide = () => {
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

  const animate = async () => {
    await nextTick()
    const platform = document.getElementById('platform')
    platform.classList.remove('stop')
    platform.classList.add('playing')

    const platform2 = document.getElementById('platform2')
    platform2.classList.remove('stop')
    platform2.classList.add('playing')
  }

  const stopAnimate = async () => {
    await nextTick()
    const platform = document.getElementById('platform')
    platform.classList.remove('stop')
    platform.classList.add('playing')

    const platform2 = document.getElementById('platform2')
    platform2.classList.remove('stop')
    platform2.classList.add('playing')

    platform.classList.remove('playing')
    platform.classList.add('stop')

    platform2.classList.remove('playing')
    platform2.classList.add('stop')

    const dice1 = document.getElementById('dice1')
    setDiceValue(storedDices.values[0], dice1)
    const dice2 = document.getElementById('dice2')
    setDiceValue(storedDices.values[1], dice2)

    platform.style.transform = 'translate3d(-180px,0, 0px)'
    platform2.style.transform = 'translate3d(180px,0, 0px)'
  }

  const setValuesAndStop = () => {
    if (storedDices.values.length && minAnimationShown) {
      setLog(`Rolling the dice (${storedDices.values.toString()}).`)
      stopAnimate()
      setTimeout(hide, delayAfterSet)
    }
  }

  useEffect(() => {
    setValuesAndStop()
  }, [minAnimationShown])

  useEffect(() => {
    if (storedDices.show) {
      animate()
      setTimeout(() => {
        setMinAnimationShown(true)
      }, minAnimationDelay)
    } else {
      setMinAnimationShown(false)
    }
  }, [storedDices.show])

  useEffect(() => {
    setValuesAndStop()
  }, [storedDices.values])

  return (
    <CSSTransition
      in={storedDices.show}
      timeout={300}
      classNames="dice"
    >
      <div className={`component -game-dice ${!storedDices.show ? '-hidden' : ''}`}>
        <div className="intro">
          <div id="platform" className="platform flex center">
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
          </div>
          <div id="platform2" className="platform flex center">
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
