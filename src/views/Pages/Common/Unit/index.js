// ** React Imports
import { Fragment } from 'react'

// ** Third Party Components
import { Row, Col } from 'reactstrap'

// ** Tables
import UnitTable from './UnitTable/UnitTable'

// ** Styles
import '@styles/react/libs/tables/react-dataTable-component.scss'


const Unit = () => {
  return (
    <Fragment>
      <h4 className="card-title">Product Unit <small className="text-muted"></small></h4>
      <Row>
        <Col sm='12'>
          <UnitTable />
        </Col>
      </Row>
    </Fragment>
  )
}

export default Unit
