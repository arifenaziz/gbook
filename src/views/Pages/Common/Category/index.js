// ** React Imports
import { Fragment } from 'react'

// ** Third Party Components
import { Row, Col } from 'reactstrap'

// ** Tables
import CategoryTable from './CategoryTable/CategoryTable'

// ** Styles
import '@styles/react/libs/tables/react-dataTable-component.scss'


const Category = () => {
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

export default Category
