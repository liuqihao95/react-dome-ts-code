import React from 'react'
import { Menu } from 'antd'
import { AppstoreOutlined, SettingOutlined } from '@ant-design/icons'
import { withRouter } from 'react-router-dom'

const { SubMenu } = Menu

class CCWSider extends React.Component<any, any> {
  handleClick = (item: any) => {
    const pathname = `${this.props.match.path}/${item.keyPath.reverse().join('/')}`
    if (this.props.location.pathname !== pathname)
      this.props.history.push({ pathname, state: { day: 'Friday' } })
  }

  render () {
    const PathArr: string[] = this.props.location.pathname.split('/')
    const defaultSelectedKeys: string[] = [PathArr[2], PathArr[3]]
    const defaultOpenKeys: string[] = [PathArr[2]]
    return (
      <div className='CCWSider'>
        <Menu
          onClick={this.handleClick}
          style={{ width: '100%', height: '100%' }}
          defaultSelectedKeys={defaultSelectedKeys}
          defaultOpenKeys={defaultOpenKeys}
          mode="inline"
        >
          <SubMenu key="check" icon={<AppstoreOutlined />} title="Check">
            <Menu.Item key="checkList">Check List</Menu.Item>
            <Menu.Item key="CreateCheck">Create Check</Menu.Item>
          </SubMenu>
          <SubMenu
            key="content"
            title={
              <p>
                <SettingOutlined />
                <span>Content Management</span>
              </p>
            }
          >
            <Menu.Item key="contentList">Content List</Menu.Item>
            <Menu.Item key="createContent">Create Content</Menu.Item>
          </SubMenu>
        </Menu>
      </div>
    )
  }
}

export default withRouter(CCWSider)
