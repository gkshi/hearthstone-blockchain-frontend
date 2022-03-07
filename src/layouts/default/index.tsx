import React from 'react'

import './_index.scss'

import HeaderComponent from '../../components/header'
import NotificationController from '../../components/notifications/controller'

interface LayoutProps {
  children?: React.ReactNode
}

function DefaultLayout ({ children }: LayoutProps) {
  return (
    <div className="layout -default">
      <HeaderComponent />
      <main>
        <div className="container -wide">
          {children}
        </div>
      </main>

      <NotificationController />
    </div>
  )
}

export default DefaultLayout
