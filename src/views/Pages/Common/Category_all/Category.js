// ** React Imports
import { Fragment } from 'react'

// ** Custom Components
import Breadcrumbs from '@components/breadcrumbs'

// ** Third Party Components
import { Row, Col } from 'reactstrap'

// ** Tables
import CategoryTable from './CategoryTable/CateoryTable'

// ** Styles
import '@styles/react/libs/tables/react-dataTable-component.scss'


const Tables = () => {
  return (
    <Fragment>
      <h4 className="card-title">Product Category <small className="text-muted"></small></h4>
      <Row>
        <Col sm='12'>
          <CategoryTable />
        </Col>
      </Row>
    </Fragment>
  )
}

export default Tables
