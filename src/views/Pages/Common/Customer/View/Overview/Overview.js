import Layout from "../../../../../Components/Layout/CustomerLayout/Layout"

import { Card, CardHeader, CardTitle, CardBody, FormGroup, Row, Col, Input, Form, Button, Label, CustomInput } from 'reactstrap'
import { useSelector, useDispatch } from 'react-redux'
import { getProcess } from './store/action'
import { useEffect } from "react"
import { Edit2 } from "react-feather"
import { useHistory } from "react-router"
import Alert from "reactstrap/lib/Alert"

const Overview = (props) => {
const history = useHistory()
const dispatch = useDispatch()    
const data = useSelector(state => state.customerOverview.data)

const path = props.match 

useEffect(() => {
    dispatch(
      getProcess(path.params.id)
    )
  }, [])

const handleOpenButtonClick = () => {
    history.push(`/admin/customers/edit/${path.params.id}`)
}


return data !== null && data !== undefined ?(
<>

<Layout mainID={path.params.id} type={props.route.name}>

<Row>
        <Col sm='12'>
        <Card>
      <CardHeader>
        <CardTitle tag='h4'>Overview</CardTitle>
        <div className='d-flex mt-md-0 mt-1'>
            <Button className='ml-2' color='primary' onClick={handleOpenButtonClick}>
               <Edit2 size={15} />
              <span className='align-middle ml-50'>Edit Customer</span>
            </Button>
          </div>        
      </CardHeader>
      <CardBody>
        
      <Row>
      <Col md='12' sm='12'>
              <FormGroup>
                <Label for='lastNameMulti'>Customer Name</Label>
                <p><strong>{data.customer_name}</strong></p>
              </FormGroup>

              <FormGroup>
                <Label for='lastNameMulti'>Customer Email</Label>
                <p><strong>{data.email}</strong></p>
              </FormGroup>

              <FormGroup>
                <Label for='lastNameMulti'>Customer Mobile</Label>
                <p><strong>{data.mobile}</strong></p>
              </FormGroup>              

            </Col>
            </Row>


      </CardBody>
      </Card>
      </Col>
</Row>
</Layout>

</>
): (
    <Alert color='danger'>
      <h4 className='alert-heading'>Users not found</h4>
      
    </Alert>
  )

}

export default Overview