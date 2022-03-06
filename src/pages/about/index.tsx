import React from 'react'

import './_index.scss'

function AboutPage () {
  return (
    <div className="page -about">
      <h1>About the project</h1>

      <section>
        <div>
          <a href="https://github.com/gkshi/monopoly-blockchain-frontend" target="_blank" rel="noreferrer">GitHub repo</a>
        </div>
      </section>

      <section>
        <div>
          <a href="http://gkshi.github.io/" target="_blank" rel="noreferrer">More projects</a>
        </div>
      </section>
    </div>
  )
}

export default AboutPage
