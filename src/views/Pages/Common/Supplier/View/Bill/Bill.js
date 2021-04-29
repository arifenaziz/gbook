import Layout from "../../../../../Components/Layout/SupplierLayout/Layout"

import { Card, CardHeader, CardTitle, CardBody, FormGroup, Row, Col, Input, Form, Button, Label, CustomInput } from 'reactstrap'

const Bill = (props) => {

const path = props.match
return (
<>
<Layout mainID={path.params.id} type={props.route.name}>
<Row>
        <Col sm='12'>
        <Card>
      <CardHeader>
        <CardTitle tag='h4'>Bill</CardTitle>
      </CardHeader>
      <CardBody>
      <p>Bill Data</p>
      </CardBody>
      </Card>
      </Col>
</Row>
</Layout>

</>
)

}

export default Bill