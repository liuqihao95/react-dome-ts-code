import React from 'react'

import { renderRoutes } from '@/utils/renderRoute'
import '@/App.less'
import routes from '@/router'

function App () {
  return (
    <div className="App">
      {renderRoutes(routes)}
    </div>
  )
}

export default App
