import React from 'react'
import $game from '../../../store/game/core/store'
import { useStore } from 'effector-react'
import { Company, FieldData } from '../../../store/game/core/types'
import { Placement } from 'tippy.js'

import Tippy from '@tippyjs/react'
import CompanyItem from './company'
import StartItem from './start'
import CommunityChestItem from './community-chest'
import ChanceItem from './chance'
import TaxItem from './tax'
import ParkingItem from './parking'
import PoliceItem from './police'
import JailItem from './jail'

import IconStar from '../../icons/star'

import './_index.scss'
import 'tippy.js/dist/tippy.css'

interface GameItemProps extends React.ComponentProps<any> {
  row?: 'top' | 'right' | 'bottom' | 'left',
  data?: FieldData | Company,
  tooltipPlacement?: Placement
}

function GameItemWrapper ({ row, data, tooltipPlacement }: GameItemProps) {
  const storedField = useStore($game).fields.find(i => i.id === data.id)

  const isInteractive = () => {
    return !['start', 'jail', 'parking', 'police', 'chance', 'tax', 'chest'].includes(data.type)
  }

  const className = () => {
    return `component -table-item -row-${row} ${'color' in data ? '-color-' + data.color : ''} ${isInteractive() ? '-interactive' : ''}`
  }

  const _tooltipPlacement = () => tooltipPlacement || 'auto'

  const onTooltipMount = (instance) => {
    if (!isInteractive()) {
      instance.destroy()
    }
  }

  const tooltip = () => {
    return <div className={`field-tooltip -color-${data.color}`}>
      <header>
        <div className="name">{data.name}</div>
        <div className="category">{data.category}</div>
      </header>

      <section>
        <div>Стройте филиалы, чтобы увеличить ренту.</div>
      </section>

      <section>
        <div className="row">
          <div>Базовая рента</div>
          <div>-</div>
        </div>
        <div className="row">
          <div className="flex a-center">
            <IconStar />
          </div>
          <div>-</div>
        </div>
        <div className="row">
          <div className="flex a-center">
            <IconStar />
            <IconStar />
          </div>
          <div>-</div>
        </div>
        <div className="row">
          <div className="flex a-center">
            <IconStar />
            <IconStar />
            <IconStar />
          </div>
          <div>-</div>
        </div>
        <div className="row">
          <div className="flex a-center">
            <IconStar />
            <IconStar />
            <IconStar />
            <IconStar />
          </div>
          <div>-</div>
        </div>
        <div className="row">
          <div>
            <IconStar theme="gold" />
          </div>
          <div>-</div>
        </div>
      </section>

      <section>
        <div className="row">
          <div>Стоимость поля</div>
          <div>-</div>
        </div>
        <div className="row">
          <div>Залог поля</div>
          <div>-</div>
        </div>
        <div className="row">
          <div>Выкуп поля</div>
          <div>-</div>
        </div>
        <div className="row">
          <div>Покупка филиала</div>
          <div>-</div>
        </div>
      </section>
    </div>
  }

  const attributes = () => {
    const obj = {}
    obj['data-field'] = data.id
    if ('owner' in storedField) {
      obj['data-owner'] = storedField.owner
    }
    return obj
  }

  return (
    <Tippy
      content={tooltip()}
      interactive={true}
      appendTo={() => document.body}
      arrow={false}
      trigger='click'
      placement={_tooltipPlacement()}
      theme='field'
      onMount={(instance) => onTooltipMount(instance)}
    >
      <div className={className()} {...attributes()}>
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
