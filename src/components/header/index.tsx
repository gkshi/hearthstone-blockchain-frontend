import React from 'react'
import { Link } from 'react-router5'
import { useStore } from 'effector-react'
import { $auth } from '../../store/auth/store'

import UIButton from '../ui/button'

import './_index.scss'

function HeaderComponent () {
  const user = useStore($auth).user

  const username = () => {
    return user ? user.username : 'guest'
  }

  return (
    <div className="component -header">
      <div className="container -wide flex a-center j-between">
        <nav>
          <div>
            <UIButton routeName="home">Play</UIButton>
          </div>
          <div className="item">
            <Link routeName="home">Home</Link>
          </div>
          <div className="item">
            <Link routeName="about">About</Link>
          </div>
        </nav>

        <div className="right">
          {user && <div className="item">
            <Link routeName="profile">{username()}</Link>
          </div>}
        </div>
      </div>
    </div>
  )
}

export default HeaderComponent
