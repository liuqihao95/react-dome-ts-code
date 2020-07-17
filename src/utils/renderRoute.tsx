import React, { Suspense } from 'react'
import { Prompt } from 'react-router'
import { HashRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
import { Spin, Modal } from 'antd'

export interface RouteConfig {
  path: string
  name?: string
  exact?: boolean
  component?: any
  redirect?: string
  children?: RouteConfig[]
  meta?: any
}

const getConfirmation = (message: string, callback: (arg0: boolean) => void) => {
  Modal.confirm({
    title: '离开该页面，表单信息将不被保留？是否确定离开该页面？',
    content: '',
    okText: '确定',
    cancelText: '取消',
    onOk () {
      callback(true)
    },
    onCancel () {
      callback(false)
    }
  })
}

export const renderRoutes2 = ((routes: RouteConfig[] = []) => (
  <Router getUserConfirmation={getConfirmation}>
    <Prompt message="Are you sure you want to leave?" />
    {switchRoute(routes)}
  </Router>
))

export const renderRoutes = ((routes: RouteConfig[] = []) => (
  <Router>
    {/*<Router getUserConfirmation={getConfirmation}>*/}
    {/*  <Prompt message="Are you sure you want to leave?" />*/}
    {switchRoute(routes)}
  </Router>
))

export const switchRoute = (routes: RouteConfig[] = [], matchUrl = '/') => (
  <Suspense fallback={<Spin />}>
    <Switch>
      {routes.map((route, i) => {
        const { path, exact, children = [] }: RouteConfig = route
        return <Route
          key={path || i}
          exact={exact || false}
          path={matchUrl === '/' ? `/${path}` : `${matchUrl}/${path}`}
          render={(props) => (
            <route.component {...props} children={children} />
          )}
        />
      })}
      {routes.length !== 0 &&
      <Redirect to={matchUrl === '/' ? `/${routes[0].path}` : `${matchUrl}/${routes[0].path}`} />}
    </Switch>
  </Suspense>
)
