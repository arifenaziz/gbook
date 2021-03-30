import { lazy } from 'react'
export default [
    {
      path: '/manager/home',
      exact: true,
      component: lazy(() => import('../../views/Pages/Manager/Home')),
      meta: {
        action: 'manager'
      }
    },
    {
      path: '/manager/item',
      exact: true,
      component: lazy(() => import('../../views/Pages/Common/Item')),
      meta: {
        action: 'manager'
      }
    }      
]