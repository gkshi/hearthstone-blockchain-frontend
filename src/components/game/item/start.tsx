import React from 'react'
import { shortCurrencyValue } from '../../../helpers/currency'

import IconRocket from '../../icons/rocket'

import './_index.scss'

function StartGameItemComponent () {
  return (
    <div className="component intro flex column center">
      <IconRocket />
      <div className="label">Collect {shortCurrencyValue(2000000)}</div>
    </div>
  )
}

export default StartGameItemComponent
