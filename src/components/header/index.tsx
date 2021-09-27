import React from 'react'
import { Link } from 'react-router5'
import { useStore } from 'effector-react'
import { $auth } from '../../store/auth/store'

import './_index.scss'

function HeaderComponent () {
  const user = useStore($auth).user

  return (
    <div className="component -header">
      <nav>
        <div>
          <Link routeName="home">home</Link>
        </div>
        <div>
          <Link routeName="about">about</Link>
        </div>
        {user && <div>
          <Link routeName="profile">profile</Link>
        </div>}
      </nav>
    </div>
  )
}

export default HeaderComponent
