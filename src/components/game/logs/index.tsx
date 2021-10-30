import React from 'react'
import $logs from '../../../store/logs/store'
import { useStore } from 'effector-react'

import './_index.scss'

function GameLogsComponent () {
  const storedLogs = useStore($logs)

  const logs = () => {
    return storedLogs.map((log, i) => <div key={i}>{log.content}</div>)
  }

  return (
    <div className="component -game-logs">
      <div className="scroll-parent">
        {logs()}
      </div>
    </div>
  )
}

export default GameLogsComponent
