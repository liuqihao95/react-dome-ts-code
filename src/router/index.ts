import { lazy } from 'react'
// login
const Login = lazy(() => import('@/views/login'))
const layout = lazy(() => import('@/views/layout'))
//
const check = lazy(() => import('@/views/check'))
const checkList = lazy(() => import('@/views/check/checkList'))
const CreateCheck = lazy(() => import('@/views/check/createCheck'))
//
const content = lazy(() => import('@/views/content'))
const contentList = lazy(() => import('@/views/content/contentList'))
const createContent = lazy(() => import('@/views/content/createContent'))

export interface RouteConfig {
  path: string
  name?: string
  exact?: boolean
  component: any
  redirect?: string
  children?: RouteConfig[]
  meta?: any
}

const routes: RouteConfig[] = [
  {
    exact: true,
    path: 'login',
    component: Login
  },
  {
    path: 'layout',
    component: layout,
    children: [
      {
        path: 'check',
        component: check,
        children: [
          {
            path: 'checkList',
            component: checkList
          },
          {
            path: 'CreateCheck',
            component: CreateCheck
          }

        ]
      },
      {
        path: 'content',
        component: content,
        children: [
          {
            path: 'contentList',
            component: contentList
          },
          {
            path: 'createContent',
            component: createContent
          }
        ]
      }
    ]
  }
]

export default routes
