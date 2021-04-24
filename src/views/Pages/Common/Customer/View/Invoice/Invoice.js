import Layout from "../../../../../Components/Layout/CustomerLayout/Layout"

import { Card, CardHeader, CardTitle, CardBody, FormGroup, Row, Col, Input, Form, Button, Label, CustomInput } from 'reactstrap'

const Invoice = (props) => {

const path = props.match
return (
<>
<Layout mainID={path.params.id} type={props.route.name}>
<Row>
        <Col sm='12'>
        <Card>
      <CardHeader>
        <CardTitle tag='h4'>Invoice</CardTitle>
      </CardHeader>
      <CardBody>
      <p>Invoice Data</p>
      </CardBody>
      </Card>
      </Col>
</Row>
</Layout>

</>
)

}

export default Invoice