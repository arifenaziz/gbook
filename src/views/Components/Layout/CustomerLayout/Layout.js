// ** React Imports
import { Children, Fragment, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

// ** Email App Component Imports

import Sidebar from './Sidebar'

// ** Third Party Components
import classnames from 'classnames'

import PerfectScrollbar from 'react-perfect-scrollbar'
// ** Styles
import '@styles/react/apps/app-email.scss'

import { Menu, Search, Folder, Tag, Mail, Trash, Edit2, Info } from 'react-feather'
import {
    Row,
    Col,
    Badge,
    Card,
    Table,
    CardBody,
    CardFooter,
    CardHeader,
    DropdownMenu,
    DropdownItem,
    DropdownToggle,
    UncontrolledDropdown
  } from 'reactstrap'

const Layout = ({children, mainID, type}) => {
  // ** States
  const [query, setQuery] = useState('')
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [composeOpen, setComposeOpen] = useState(false)

  // ** Toggle Compose Function
  const toggleCompose = () => setComposeOpen(!composeOpen)

  // ** Vars
  const params = useParams()

  return (
    <Fragment>
      <Sidebar
        sidebarOpen={sidebarOpen}
        toggleCompose={toggleCompose}
        setSidebarOpen={setSidebarOpen}    
        mainID={mainID}    
        type={type}
      />
      <div className='content-right'>
        <div className='content-body'>
          <div
            className={classnames('body-content-overlay', {
              show: sidebarOpen
            })}
            onClick={() => setSidebarOpen(false)}
          ></div>
          

    <Fragment>
      <div className='email-app-list'>
        <div className='app-fixed-search d-flex align-items-center'>
          <div className='sidebar-toggle d-block d-lg-none ml-1' onClick={() => setSidebarOpen(true)}>
            <Menu />
          </div>

      </div>
      <div className="scroll">
       {children}
      </div>
      </div>
      
    
    </Fragment>

        </div>
      </div>
    </Fragment>
  )
}

export default Layout
