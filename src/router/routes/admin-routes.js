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
      },
      {
        path: '/admin/brand',
        exact: true,
        component: lazy(() => import('../../views/Pages/Common/Brand')),
        meta: {
          action: 'admin'
        }
      },
      {
        path: '/admin/unit',
        exact: true,
        component: lazy(() => import('../../views/Pages/Common/Unit')),
        meta: {
          action: 'admin'
        }
      }                  
  ]