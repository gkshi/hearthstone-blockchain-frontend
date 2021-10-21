import React from 'react'
import { shortPrice } from '../../../helpers/currency'

import IconBank from '../../icons/bank'

import './_index.scss'

function CommunityChestGameItemComponent () {
  return (
    <div className="intro flex column center">
      <IconBank />
      <div className="label">Community chest</div>
    </div>
  )
}

export default CommunityChestGameItemComponent
