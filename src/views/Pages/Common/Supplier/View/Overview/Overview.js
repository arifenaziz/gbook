import Layout from "../../../../../Components/Layout/SupplierLayout/Layout"
import Skeleton from 'react-loading-skeleton'
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
const data = useSelector(state => state.supplierOverview.data)
const loading = useSelector(state => state.supplierOverview.loading)

const path = props.match 

useEffect(() => {
    dispatch(
      getProcess(path.params.id)
    )
  }, [])

const handleOpenButtonClick = () => {
    history.push(`/admin/suppliers/edit/${path.params.id}`)
}

if (loading) {
  return (
    <>
    <Skeleton count={1} height={50}/>
    <Skeleton count={1} height={150}/>
    </>
  )
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
              <span className='align-middle ml-50'>Edit Supplier</span>
            </Button>
          </div>        
      </CardHeader>
      <CardBody>
        
      <Row>
      <Col md='12' sm='12'>
              <FormGroup>
                <Label for='lastNameMulti'>Supplier Name</Label>
                <p><strong>{data.supplier_name}</strong></p>
              </FormGroup>

              <FormGroup>
                <Label for='lastNameMulti'>Supplier Email</Label>
                <p><strong>{data.email}</strong></p>
              </FormGroup>

              <FormGroup>
                <Label for='lastNameMulti'>Supplier Mobile</Label>
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