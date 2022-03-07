import React from 'react'
import { useRouter } from 'react-router5'
import { logout as sendLogoutRequest } from '../../store/auth/events'
import { useStore } from 'effector-react'
import { $auth } from '../../store/auth/store'

import UIButton from '../../components/ui/button'

import './_index.scss'

function ProfilePage () {
  const router = useRouter()
  const user = useStore($auth).user

  const username = () => {
    return user ? user.username : 'guest'
  }

  const logout = async () => {
    await sendLogoutRequest()
    router.navigate('auth')
  }

  return (
    <div className="page -profile">
      <h1>Profile</h1>

      <section>
        <div>
          <label>
            <div>username:</div>
            <input type="text" value={username()} readOnly={true} />
          </label>
        </div>
      </section>

      <section>
        <div>
          <UIButton theme="danger" onClick={logout}>logout</UIButton>
        </div>
      </section>
    </div>
  )
}

export default ProfilePage
