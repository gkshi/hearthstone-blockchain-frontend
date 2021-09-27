import React from 'react'
import { useRouter } from 'react-router5'
import { logout as sendLogoutRequest } from '../../store/auth/events'

import UIButton from '../../components/ui/button'

import './_index.scss'

function ProfilePage () {
  const router = useRouter()

  const logout = async () => {
    await sendLogoutRequest()
    router.navigate('auth')
  }

  return (
    <div className="page -profile">
      <div>profile</div>
      <div>
        <UIButton theme="danger" onClick={logout}>logout</UIButton>
      </div>
    </div>
  )
}

export default ProfilePage
