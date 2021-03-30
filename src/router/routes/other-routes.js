import { lazy } from 'react'

export default [
    {
        path: '/login',
        component: lazy(() => import('../../views/Pages/Login')),
        layout: 'BlankLayout',
        meta: {
          authRoute: true
        }
      },
      {
        path: '/error',
        component: lazy(() => import('../../views/Pages/Error')),
        layout: 'BlankLayout'
      }     
]