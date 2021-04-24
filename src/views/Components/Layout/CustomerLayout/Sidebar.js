// ** Third Party Components
import classnames from 'classnames'
import { Link, useParams } from 'react-router-dom'
import PerfectScrollbar from 'react-perfect-scrollbar'
import { Layout, FileText, CreditCard, Server, ShoppingBag, BookOpen, UserPlus } from 'react-feather'
import { Button, ListGroup, ListGroupItem, Badge } from 'reactstrap'

const Sidebar = props => {
  // ** Props
  const { sidebarOpen, toggleCompose, setSidebarOpen, mainID, type} = props

  // ** Vars
  const params = useParams()

  console.log('MAIN', type)

  // ** Functions To Handle Folder, Label & Compose
  const handleFolder = folder => {
    // dispatch(getMails({ ...store.params, folder }))
    // dispatch(resetSelectedMail())
  }

  const handleLabel = label => {
    // dispatch(getMails({ ...store.params, label }))
    // dispatch(resetSelectedMail())
  }

  const handleComposeClick = () => {
    toggleCompose()
    setSidebarOpen(false)
  }

  // ** Functions To Active List Item
  const handleActiveItem = value => {
    if ((type === value)) {
      return true
    } else {
      return false
    }
  }

  return (
    <div
      className={classnames('sidebar-left', {
        show: sidebarOpen
      })}
    >
      <div className='sidebar'>
        <div className='sidebar-content email-app-sidebar'>
          <div className='email-app-menu'>
            <div className='form-group-compose text-center compose-btn'>
              
            </div>
            <PerfectScrollbar className='sidebar-menu-list' options={{ wheelPropagation: false }}>
              <ListGroup tag='div' className='list-group-messages'>
                <ListGroupItem
                  tag={Link}
                  to={`/admin/customers/${mainID}/overview`}                  
                  action
                  active={handleActiveItem('overview')}
                >
                  <Layout size={18} className='mr-75' />
                  <span className='align-middle'>Overview</span>
                  
                </ListGroupItem>
                <ListGroupItem
                  tag={Link}
                  to={`/admin/customers/${mainID}/contacts`}                  
                  action
                  active={handleActiveItem('contacts')}
                >
                  <UserPlus size={18} className='mr-75' />
                  <span className='align-middle'>Contact Person</span>
                  
                </ListGroupItem>                
                <ListGroupItem
                  tag={Link}
                  to={`/admin/customers/${mainID}/invoice`}                  
                  action
                  active={handleActiveItem('invoice')}
                >
                  <FileText size={18} className='mr-75' />
                  <span className='align-middle'>Invoice</span>
                </ListGroupItem>
                <ListGroupItem
                  tag={Link}
                  to={`/admin/customers/${mainID}/payment`}                   
                  action
                  active={handleActiveItem('payment')}
                >
                  <CreditCard size={18} className='mr-75' />
                  <span className='align-middle'>Customer Payment</span>
                  
                </ListGroupItem>
                <ListGroupItem
                  tag={Link}
                  to={`/admin/customers/${mainID}/estimate`}                   
                  action
                  active={handleActiveItem('estimate')}
                >
                  <Server size={18} className='mr-75' />
                  <span className='align-middle'>Estimate</span>
                </ListGroupItem>
                <ListGroupItem
                  tag={Link}
                  to={`/admin/customers/${mainID}/expenses`}                 
                  action
                  active={handleActiveItem('expenses')}
                >
                  <ShoppingBag size={18} className='mr-75' />
                  <span className='align-middle'>Expenses</span>                  
                </ListGroupItem>
                <ListGroupItem
                  tag={Link}
                  to={`/admin/customers/${mainID}/ledger`}                  
                  action
                  active={handleActiveItem('ledger')}
                >
                  <BookOpen size={18} className='mr-75' />
                  <span className='align-middle'>Ledger</span>
                </ListGroupItem>
              </ListGroup>
              
              </PerfectScrollbar>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
