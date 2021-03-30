import { lazy } from 'react'
export default [
      {
        path: '/admin/home',
        exact: true,
        component: lazy(() => import('../../views/Pages/Admin/Home')),
        meta: {
          action: 'admin'
        }
      },
      {
        path: '/admin/category',
        exact: true,
        component: lazy(() => import('../../views/Pages/Common/Category')),
        meta: {
          action: 'admin'
        }
      }      
  ]