import React from 'react'
import { Company, ItemData } from '../../../types/game'
import CompanyItem from './company'

import './_index.scss'

interface GameItemProps extends React.ComponentProps<any> {
  row?: 'top' | 'right' | 'bottom' | 'left',
  data?: ItemData | Company
}

function GameItemWrapper ({ row, data }: GameItemProps) {
  const className = () => {
    return `component -table-item -row-${row} ${'color' in data ? '-color-' + data.color : ''}`
  }

  return (
    <div className={className()}>
      {data.type === 'company'
        ? <CompanyItem data={data as Company} row={row}/>
        : <div className="intro flex center">item</div>}
    </div>
  )
}

export default GameItemWrapper
