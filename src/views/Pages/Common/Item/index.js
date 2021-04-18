// ** React Imports
import { Fragment } from 'react'

// ** Third Party Components
import { Row, Col } from 'reactstrap'

// ** Tables
import ItemTable from './ItemTable/ItemTable'

// ** Styles
import '@styles/react/libs/tables/react-dataTable-component.scss'


const Item = () => {
  return (
    <Fragment>
      <h4 className="card-title">Item <small className="text-muted"></small></h4>
      <Row>
        <Col sm='12'>
          <ItemTable />
        </Col>
      </Row>
    </Fragment>
  )
}

export default Item
