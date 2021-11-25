import React from 'react'

import UIButton from '../../components/ui/button'
import RoomCreator from '../../components/room-creator'

import './_index.scss'

function HomePage () {
  return (
    <div className="page -home">
      <section>
        <div>monopoly-blockchain-frontend</div>
      </section>

      <section>
        <RoomCreator />
      </section>

      <section>
        <UIButton routeName="game">game</UIButton>
      </section>
    </div>
  )
}

export default HomePage
