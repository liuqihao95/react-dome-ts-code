import React, { Suspense, Component } from 'react'
import { Spin } from 'antd'

const asyncComponent = (LazyComponent: any) => {
  return class extends Component {
    render () {
      console.log(LazyComponent)
      return (
        <Suspense fallback={<Spin />}>
          <LazyComponent />
        </Suspense>
      )
    }
  }
}

export default asyncComponent
