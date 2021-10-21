import React from 'react'

import IconCuff from '../../../icons/cuff'
import IconDonut from '../../../icons/donut'

import './_index.scss'

function JailGameItemComponent () {
  return (
    <div className="component intro flex column center -jail-game-item">
      <div className="donut">
        <IconDonut />
      </div>
      <div className="separator" />
      <div className="cuff">
        <IconCuff />
      </div>
    </div>
  )
}

export default JailGameItemComponent
