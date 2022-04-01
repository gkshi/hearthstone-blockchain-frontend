import React from 'react'
import PropTypes from 'prop-types'

import NotificationController from '../../components/notifications/controller'

import './_index.scss'

const SimpleLayout: React.FC = ({ children }) => {
  return (
    <div className="layout -simple">
      <main>
        {children}
      </main>

      <NotificationController />
    </div>
  )
}

SimpleLayout.propTypes = {
  children: PropTypes.node
}

export default SimpleLayout
