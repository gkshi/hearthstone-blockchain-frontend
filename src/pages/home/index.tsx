import React from 'react'

import UIButton from '../../components/ui/button'
import RoomCreator from '../../components/room-creator'
import RoomList from '../../components/room/list'

import './_index.scss'

function HomePage () {
  return (
    <div className="page -home">
      <section>
        <div>monopoly-blockchain-frontend</div>
      </section>

      <div className="flex a-start j-between">
        <section>
          <div>rooms:</div>
          <RoomList />
        </section>
        <section>
          <RoomCreator />
        </section>
      </div>

      <section>
        <UIButton routeName="game">game</UIButton>
      </section>
    </div>
  )
}

export default HomePage
