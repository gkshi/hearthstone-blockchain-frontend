import React from 'react'

import IconMoney from '../../icons/money'

import './_index.scss'

function TaxGameItemComponent () {
  return (
    <div className="intro flex column center">
      <IconMoney />
      <div className="label">Tax</div>
    </div>
  )
}

export default TaxGameItemComponent
