import { Mail, Home, CheckCircle, Circle, Columns, Users, Briefcase  } from 'react-feather'

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
        navLink: '/admin/item'
      }            
    ]
  },
  {
    id: 'customer',
    title: 'Customer',
    icon: <Users size={20} />,
    navLink: '/admin/customers',
    action: 'admin'    
  },
  {
    id: 'supplier',
    title: 'Supplier',
    icon: <Briefcase size={20} />,
    navLink: '/admin/suppliers',
    action: 'admin'    
  }      
]
