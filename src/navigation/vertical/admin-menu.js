import { Mail, Home, CheckCircle, Circle } from 'react-feather'

export default [
  {
    id: 'home',
    title: 'Home',
    icon: <Home size={20} />,
    navLink: '/admin/home',
    action: 'admin'    
  },
  {
    id: 'category',
    title: 'Category',
    icon: <CheckCircle size={20} />,
    navLink: '/admin/category',
    action: 'admin'    
  }
]
