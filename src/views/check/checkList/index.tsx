import React, { Component } from 'react'
import ReactDOM from 'react-dom'

export default class CheckList extends Component<any, any> {
  state = {
    messages: []
  }
  private timeID: any
  private rootNode: any

  componentDidMount () {
    this.rootNode = ReactDOM.findDOMNode(this)
    for (let i = 0; i < 60; i++) this.handleMessage()//初始化20条
    this.timeID = window.setInterval(() => {//设置定时器
      if (this.state.messages.length > 200) {//大于200条，终止
        window.clearInterval(this.timeID)
      } else {
        this.handleMessage()
      }
    }, 1000)
  }

  componentWillUnmount () {//清除定时器
    window.clearInterval(this.timeID)
  }

  // 在render之前调用，state已更新
  getSnapshotBeforeUpdate () {//很关键的，我们获取当前rootNode的scrollHeight，传到componentDidUpdate 的参数perScrollHeight
    return this.rootNode.scrollHeight
  }

  componentDidUpdate (perProps: any, perState: any, perScrollHeight: number) {
    console.log(perScrollHeight)
    const curScrollTop = this.rootNode.scrollTop
    this.rootNode.scrollTop = curScrollTop + (this.rootNode.scrollHeight - perScrollHeight)
  }


  handleMessage () {//用于增加msg
    this.setState((pre: any) => ({
      messages: [`msg: ${pre.messages.length}`, ...pre.messages]
    }))
  }

  render () {
    return (
      <div>
        {this.state.messages.map(msg => (
          <div style={{height: '20px'}} key={msg}>{msg} </div>
        ))}
      </div>
    )
  }
}

