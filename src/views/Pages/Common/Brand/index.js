// ** React Imports
import { Fragment } from 'react'

// ** Third Party Components
import { Row, Col } from 'reactstrap'

// ** Tables
import BrandTable from './BrandTable/BrandTable'

// ** Styles
import '@styles/react/libs/tables/react-dataTable-component.scss'


const Brand = () => {
  return (
    <Fragment>
      <h4 className="card-title">Product Brand <small className="text-muted"></small></h4>
      <Row>
        <Col sm='12'>
          <BrandTable />
        </Col>
      </Row>
    </Fragment>
  )
}

export default Brand
