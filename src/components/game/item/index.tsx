import React from 'react'
import Tippy from '@tippyjs/react'
import { Company, ItemData } from '../../../types/game'

import CompanyItem from './company'
import StartItem from './start'
import CommunityChestItem from './community-chest'
import ChanceItem from './chance'
import TaxItem from './tax'
import ParkingItem from './parking'
import PoliceItem from './police'
import JailItem from './jail'

import './_index.scss'
import 'tippy.js/dist/tippy.css'

interface GameItemProps extends React.ComponentProps<any> {
  row?: 'top' | 'right' | 'bottom' | 'left',
  data?: ItemData | Company
}

function GameItemWrapper ({ row, data }: GameItemProps) {
  const isInteractive = () => {
    return !['start', 'jail', 'parking', 'police'].includes(data.type)
  }

  const className = () => {
    return `component -table-item -row-${row} ${'color' in data ? '-color-' + data.color : ''} ${isInteractive() ? '-interactive' : ''}`
  }

  const tooltip = () => {
    return <div className="tooltip">
      <div>
        <div>{data.name}</div>
        <div>{data.category}</div>
      </div>
    </div>
  }

  const tooltipPlacement = () => {
    switch (row) {
      case 'top':
        return 'bottom'
      case 'right':
        return 'left'
      case 'bottom':
        return 'top'
      case 'left':
        return 'right'
      default:
        return 'auto'
    }
  }

  const onTooltipMount = (instance) => {
    if (['start', 'jail', 'parking', 'police'].includes(data.type)) {
      instance.destroy()
    }
  }

  return (
    <Tippy
      content={tooltip()}
      interactive={true}
      appendTo={() => document.body}
      arrow={false}
      trigger='click'
      placement={tooltipPlacement()}
      onMount={(instance) => onTooltipMount(instance)}
    >
      <div className={className()} data-field={data.id}>
        {data.type === 'company' ? <CompanyItem data={data as Company} row={row}/> : null}
        {data.type === 'start' ? <StartItem /> : null}
        {data.type === 'chest' ? <CommunityChestItem /> : null}
        {data.type === 'chance' ? <ChanceItem /> : null}
        {data.type === 'tax' ? <TaxItem /> : null}
        {data.type === 'parking' ? <ParkingItem /> : null}
        {data.type === 'police' ? <PoliceItem /> : null}
        {data.type === 'jail' ? <JailItem /> : null}
      </div>
    </Tippy>
  )
}

export default GameItemWrapper
