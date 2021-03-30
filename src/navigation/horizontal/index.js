import { Mail, Home } from 'react-feather'

export default [
  {
    id: 'home',
    title: 'Home123',
    icon: <Home size={20} />,
    navLink: '/home',
    action: 'admin',
    resource: ''
    
  },
  {
    id: 'secondPage',
    title: 'Second Page',
    icon: <Mail size={20} />,
    navLink: '/second-page'
  }
]
