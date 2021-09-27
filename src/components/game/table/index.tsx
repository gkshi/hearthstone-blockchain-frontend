import React, { useEffect, useState } from 'react'
import { nextTick } from '../../../helpers/next-tick'
import { items } from '../../../config/items'

import TableItem from '../item'

import './_index.scss'

function GameTableComponent () {
  const [tableWidth, setTableWidth] = useState(0)
  const [tableHeight, setTableHeight] = useState(0)

  const tableStyle = () => ({
    width: tableWidth,
    height: tableHeight
  })

  const topRow = () => {
    return items.top.map(item => <TableItem data={item} key={item.id} />)
  }

  const rightRow = () => {
    return items.right.map(item => <TableItem data={item} key={item.id} />)
  }

  const bottomRow = () => {
    return items.bottom.map(item => <TableItem data={item} key={item.id} />)
  }

  const leftRow = () => {
    return items.left.map(item => <TableItem data={item} key={item.id} />)
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
  }, [])

  return (
    <div className="component -game-table" style={tableStyle()}>
      <div className="row -top">
        {topRow()}
      </div>

      <div className="row -right">
        {rightRow()}
      </div>

      <div className="row -bottom">
        {bottomRow()}
      </div>

      <div className="row -left">
        {leftRow()}
      </div>

      <div className="middle">
        middle
      </div>
    </div>
  )
}

export default GameTableComponent
