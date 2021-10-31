import React from 'react'
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

interface GameItemProps extends React.ComponentProps<any> {
  row?: 'top' | 'right' | 'bottom' | 'left',
  data?: ItemData | Company
}

function GameItemWrapper ({ row, data }: GameItemProps) {
  const className = () => {
    return `component -table-item -row-${row} ${'color' in data ? '-color-' + data.color : ''}`
  }

  return (
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
  )
}

export default GameItemWrapper
