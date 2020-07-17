import React from 'react'
import { switchRoute } from '@/utils/renderRoute'

const Content: React.FC<any> = (props: any) => {
  return (
    <div>
      {switchRoute(props.children, props.match.path)}
    </div>
  )
}

export default Content
