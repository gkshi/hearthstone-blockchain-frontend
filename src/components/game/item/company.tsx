import React from 'react'
import { Company } from '../../../types/game'
import { shortPrice } from '../../../helpers/currency'

import './_index.scss'

interface CompanyGameItemProps extends React.ComponentProps<any> {
  data?: Company
}

function CompanyGameItemComponent ({ row, data }: CompanyGameItemProps) {
  const icon = () => {
    let component = null
    try {
      component = require(`../../icons/companies/${data.alias}.tsx`).default
      // component = () => import(`../../icons/companies/${data.alias}.tsx`)
    } catch (e) {}

    return component
      ? React.createElement(component, {})
      : null
  }

  return (
    <div className="component intro flex center">
      <div>
        <div>{icon()}</div>
        <div className="price-block">
          <div className="price">{shortPrice(data.price)}</div>
        </div>
      </div>
    </div>
  )
}

export default CompanyGameItemComponent
