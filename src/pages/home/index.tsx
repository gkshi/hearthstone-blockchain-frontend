import React from 'react'

import UIButton from '../../components/ui/button'

import './_index.scss'

function HomePage () {
  return (
    <div className="page -home">
      <div>monopoly-blockchain-frontend</div>
      <div>
        <UIButton routeName="game">game</UIButton>
      </div>
    </div>
  )
}

export default HomePage
