import React, { useEffect, useState } from 'react'
import { nextTick } from '../../../helpers/next-tick'
import { items } from '../../../config/items'

import TableItem from '../item'
import GameChips from '../chips'
import GameDices from '../dices'
import GameModals from '../modals'
import GameLogs from '../logs'

import './_index.scss'
import { useStore } from 'effector-react'
import $game from '../../../store/game/core/store'

function GameTableComponent () {
  const isGameInitialized = useStore($game).isInitialized

  const [tableWidth, setTableWidth] = useState(0)
  const [tableHeight, setTableHeight] = useState(0)

  const tableStyle = () => ({
    width: tableWidth,
    height: tableHeight
  })

  const topRow = () => {
    return items.top.map((item, i) => <TableItem
      row="top"
      data={item}
      tooltipPlacement={i < 3 ? 'bottom-start' : i > 5 ? 'bottom-end' : 'bottom'}
      key={item.id}
    />)
  }

  const rightRow = () => {
    return items.right.map((item, i) => <TableItem
      row="right"
      data={item}
      tooltipPlacement={i < 4 ? 'left-start' : i > 5 ? 'left-end' : 'left'}
      key={item.id}
    />)
  }

  const bottomRow = () => {
    return items.bottom.map((item, i) => <TableItem
      row="bottom"
      data={item}
      tooltipPlacement={i < 2 ? 'top-end' : i > 6 ? 'top-start' : 'top'}
      key={item.id}
    />)
  }

  const leftRow = () => {
    return items.left.map((item, i) => <TableItem
      row="left"
      data={item}
      tooltipPlacement={i < 3 ? 'right-start' : i > 5 ? 'right-end' : 'right'}
      key={item.id}
    />)
  }

  const fit = () => {
    nextTick(() => {
      const width = window.innerWidth
      const height = window.innerHeight
      const gap = 40
      const orientation = width > height ? 'horizontal' : 'vertical'

      if (orientation === 'horizontal') {
        setTableHeight(height - gap)
        setTableWidth(height - gap)
      } else {
        setTableWidth(width - gap)
        setTableHeight(width - gap)
      }
    })
  }

  useEffect(() => {
    fit()
    window.addEventListener('resize', fit)

    return () => {
      window.removeEventListener('resize', fit)
    }
  }, [])

  if (!isGameInitialized) {
    return null
  }

  return (
    <div className="component -game-table" style={tableStyle()}>
      <GameChips />

      <div className="row -top">
        <TableItem row="top" data={{ id: 'start', type: 'start' }} />
        {topRow()}
        <TableItem row="top" data={{ id: 'jail', type: 'jail' }} />
      </div>

      <div className="row -right">
        {rightRow()}
      </div>

      <div className="row -bottom">
        <TableItem row="top" data={{ id: 'parking', type: 'parking' }} />
        {bottomRow()}
        <TableItem row="top" data={{ id: 'police', type: 'police' }} />
      </div>

      <div className="row -left">
        {leftRow()}
      </div>

      <div className="middle flex center">
        <GameDices />
        <GameModals />
        <GameLogs />
      </div>
    </div>
  )
}

export default GameTableComponent
