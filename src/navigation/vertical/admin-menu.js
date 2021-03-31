import { Mail, Home, CheckCircle, Circle, Columns  } from 'react-feather'

export default [
  {
    id: 'home',
    title: 'Home',
    icon: <Home size={20} />,
    navLink: '/admin/home',
    action: 'admin'    
  },
  {
    id: 'inventory',
    title: 'Inventory',
    icon: <Columns size={20} />,
    action: 'admin',
    children: [
      {
        id: 'category',
        title: 'Category',
        icon: <Circle size={12} />,
        action: 'admin',
        navLink: '/admin/category'
      },
      {
        id: 'brand',
        title: 'Brand',
        icon: <Circle size={12} />,
        action: 'admin',
        navLink: '/admin/brand'
      },
      {
        id: 'unit',
        title: 'Unit',
        icon: <Circle size={12} />,
        action: 'admin',
        navLink: '/admin/unit'
      },
      {
        id: 'items',
        title: 'Items',
        icon: <Circle size={12} />,
        action: 'admin',
        navLink: '/admin/home'
      }            
    ]
  }  
]
