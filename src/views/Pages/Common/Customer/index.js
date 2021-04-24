// ** React Imports
import { Fragment } from 'react'

// ** Third Party Components
import { Row, Col } from 'reactstrap'

// ** Tables
import CustomerTable from './CustomerTable/CustomerTable'

// ** Styles
import '@styles/react/libs/tables/react-dataTable-component.scss'


const Customer = () => {
  return (
    <Fragment>
      <h4 className="card-title">All Customers <small className="text-muted"></small></h4>
      <Row>
        <Col sm='12'>
          <CustomerTable />
        </Col>
      </Row>
    </Fragment>
  )
}

export default Customer
