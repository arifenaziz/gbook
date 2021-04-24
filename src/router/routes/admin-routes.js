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
      },
      {
        path: '/admin/item',
        exact: true,
        component: lazy(() => import('../../views/Pages/Common/Item')),
        meta: {
          action: 'admin'
        }
      },
      {
        path: '/admin/customers',
        exact: true,
        component: lazy(() => import('../../views/Pages/Common/Customer')),
        meta: {
          action: 'admin'
        }
      },
      {
        path: '/admin/customers/new',
        exact: true,
        component: lazy(() => import('../../views/Pages/Common/Customer/AddCustomer/AddCustomer')),
        meta: {
          action: 'admin'
        }
      },
      {
        path: '/admin/customers/edit/:id',
        exact: true,
        component: lazy(() => import('../../views/Pages/Common/Customer/EditCustomer/EditCustomer')),
        meta: {
          action: 'admin'
        }
      },      
      {
        path: '/admin/customers/:id/overview',
        exact: true,
        appLayout: true,
        className: 'email-application',
        component: lazy(() => import('../../views/Pages/Common/Customer/View/Overview/Overview')),
        name: 'overview',
        meta: {
          action: 'admin'
        }
      },
      {
        path: '/admin/customers/:id/contacts',
        exact: true,
        appLayout: true,
        className: 'email-application',
        component: lazy(() => import('../../views/Pages/Common/Customer/View/Contact/Contact')),
        name: 'contacts',
        meta: {
          action: 'admin'
        }
      },      
      {
        path: '/admin/customers/:id/invoice',
        exact: true,
        appLayout: true,
        className: 'email-application',
        component: lazy(() => import('../../views/Pages/Common/Customer/View/Invoice/Invoice')),
        name: 'invoice',
        meta: {
          action: 'admin'
        }
      },
      {
        path: '/admin/customers/:id/payment',
        exact: true,
        appLayout: true,
        className: 'email-application',
        component: lazy(() => import('../../views/Pages/Common/Customer/View/Payment/Payment')),
        name: 'payment',
        meta: {
          action: 'admin'
        }
      },
      {
        path: '/admin/customers/:id/estimate',
        exact: true,
        appLayout: true,
        className: 'email-application',
        component: lazy(() => import('../../views/Pages/Common/Customer/View/Estimate/Estimate')),
        name: 'estimate',
        meta: {
          action: 'admin'
        }
      },
      {
        path: '/admin/customers/:id/expenses',
        exact: true,
        appLayout: true,
        className: 'email-application',
        component: lazy(() => import('../../views/Pages/Common/Customer/View/Expenses/Expenses')),
        name: 'expenses',
        meta: {
          action: 'admin'
        }
      },
      {
        path: '/admin/customers/:id/ledger',
        exact: true,
        appLayout: true,
        className: 'email-application',
        component: lazy(() => import('../../views/Pages/Common/Customer/View/Ledger/Ledger')),
        name: 'ledger',
        meta: {
          action: 'admin'
        }
      }                                                                       
  ]