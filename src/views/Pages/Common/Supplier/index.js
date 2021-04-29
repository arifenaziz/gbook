// ** React Imports
import { Fragment } from 'react'

// ** Third Party Components
import { Row, Col } from 'reactstrap'

// ** Tables
import SupplierTable from './SupplierTable/SupplierTable'

// ** Styles
import '@styles/react/libs/tables/react-dataTable-component.scss'


const Supplier = () => {
  return (
    <Fragment>
      <h4 className="card-title">All Suppliers <small className="text-muted"></small></h4>
      <Row>
        <Col sm='12'>
          <SupplierTable />
        </Col>
      </Row>
    </Fragment>
  )
}

export default Supplier
