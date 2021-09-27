import React from 'react'
import PropTypes from 'prop-types'

import './_index.scss'

const SimpleLayout: React.FC = ({ children }) => {
  return (
    <div className="layout -clean">
      <main>
        {children}
      </main>
    </div>
  )
}

SimpleLayout.propTypes = {
  children: PropTypes.node
}

export default SimpleLayout
