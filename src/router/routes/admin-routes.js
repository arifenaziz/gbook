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
      },
      {
        path: '/admin/suppliers',
        exact: true,
        component: lazy(() => import('../../views/Pages/Common/Supplier')),
        meta: {
          action: 'admin'
        }
      },
      {
        path: '/admin/suppliers/new',
        exact: true,
        component: lazy(() => import('../../views/Pages/Common/Supplier/AddSupplier/AddSupplier')),
        meta: {
          action: 'admin'
        }
      },
      {
        path: '/admin/suppliers/edit/:id',
        exact: true,
        component: lazy(() => import('../../views/Pages/Common/Supplier/EditSupplier/EditSupplier')),
        meta: {
          action: 'admin'
        }
      },      
      {
        path: '/admin/suppliers/:id/overview',
        exact: true,
        appLayout: true,
        className: 'email-application',
        component: lazy(() => import('../../views/Pages/Common/Supplier/View/Overview/Overview')),
        name: 'overview',
        meta: {
          action: 'admin'
        }
      },
      {
        path: '/admin/suppliers/:id/banks',
        exact: true,
        appLayout: true,
        className: 'email-application',
        component: lazy(() => import('../../views/Pages/Common/Supplier/View/Bank/Bank')),
        name: 'banks',
        meta: {
          action: 'admin'
        }
      },      
      {
        path: '/admin/suppliers/:id/bills',
        exact: true,
        appLayout: true,
        className: 'email-application',
        component: lazy(() => import('../../views/Pages/Common/Supplier/View/Bill/Bill')),
        name: 'bills',
        meta: {
          action: 'admin'
        }
      },
      {
        path: '/admin/suppliers/:id/payment',
        exact: true,
        appLayout: true,
        className: 'email-application',
        component: lazy(() => import('../../views/Pages/Common/Supplier/View/Payment/Payment')),
        name: 'payment',
        meta: {
          action: 'admin'
        }
      },
      {
        path: '/admin/suppliers/:id/purchaseOrder',
        exact: true,
        appLayout: true,
        className: 'email-application',
        component: lazy(() => import('../../views/Pages/Common/Supplier/View/PurchaseOrder/PurchaseOrder')),
        name: 'purchaseOrder',
        meta: {
          action: 'admin'
        }
      },
      {
        path: '/admin/suppliers/:id/expenses',
        exact: true,
        appLayout: true,
        className: 'email-application',
        component: lazy(() => import('../../views/Pages/Common/Supplier/View/Expenses/Expenses')),
        name: 'expenses',
        meta: {
          action: 'admin'
        }
      },
      {
        path: '/admin/suppliers/:id/statement',
        exact: true,
        appLayout: true,
        className: 'email-application',
        component: lazy(() => import('../../views/Pages/Common/Supplier/View/Statement/Statement')),
        name: 'statement',
        meta: {
          action: 'admin'
        }
      }      
]