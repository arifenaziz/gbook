import Layout from "../../../../../Components/Layout/CustomerLayout/Layout"
import { getProcess, getUpdate, getDelete } from './store/action'
import { Card, CardHeader, CardTitle, CardBody, FormGroup, Row, Col, Input, Form, Button, Label, CustomInput } from 'reactstrap'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from "react"
import {
  AvForm,
  AvGroup,
  AvField,
  AvInput,
  AvFeedback
} from 'availity-reactstrap-validation-safe'
import { Plus, X } from "react-feather"

const Contact = (props) => {
const path = props.match

const dispatch = useDispatch()

const data = useSelector(state => state.customerContact.data)
const loading = useSelector(state => state.customerContact.loading)
const success = useSelector(state => state.customerContact.operation)

useEffect(() => {
  dispatch(
    getProcess(path.params.id)
  )

}, [dispatch])


const initialContactList={
  id:'',
  contact_name:'',
  email:'',
  phone:'',
  mobile:'',
  designation:''  
}

const [contactList, SetContactList] = useState(
  []
)

useEffect(() => {
  if (data !== null && data !== undefined) {
  SetContactList(data)        
  }
 }, [data, dispatch])


const increaseContactList = () => {
  SetContactList(
    [
      ...contactList,
      initialContactList
    ]
  )
}

const deleteForm =( i, item ) => {
  
  if (item.id) {

    dispatch(getDelete(item.id))

  }
  
  const updatedDataList=[...contactList]
  updatedDataList.splice(i, 1)
  SetContactList(updatedDataList)


}

const inputChangedHandaler = (event, position, identifier) => {

  const updatedContactList=[...contactList]
      
  const updatedElement={
    ...updatedContactList[position]
  }

  updatedElement[`${identifier}`]=event.target.value      

  updatedContactList[position]=updatedElement    

  SetContactList(updatedContactList)

}


const handleSubmit = (e, errors) => {
  e.preventDefault()

  if (errors && !errors.length) {

    const state = {      
      contactList      
    }

    console.log('STATE', state)
    dispatch(getUpdate(state, path.params.id))
  
  }

}


return (
<>

<Layout mainID={path.params.id} type={props.route.name}>

<Row>
        <Col sm='12'>
        <Card>
      <CardHeader>
        <CardTitle tag='h4'>Contact Person</CardTitle>
      </CardHeader>
      <CardBody>        
      <AvForm onSubmit={handleSubmit}>
        <Row>
        <Col>        

          {
            contactList?.length ?(
            contactList.map((item, i)=>(
                            
            <section key={i}>              
              <Row className='justify-content-between align-items-center' >
                <Col md={3}>
                  <AvGroup>
                    <Label for={`contact-name-${i}`}>Name</Label>
                    <AvInput 
                    type='text' 
                    name={`contact-name-${i}`} 
                    id={`contact-name-${i}`} 
                    placeholder='Name' 
                    bsSize='sm' 
                    value={item.contact_name || ''}                                       
                    onChange={(e) => inputChangedHandaler(e, i, 'contact_name' )} 
                    required                    
                    />
                    <AvFeedback>Please enter a contact name!</AvFeedback>
                  </AvGroup>
                </Col>
                <Col md={2}>
                  <FormGroup>
                    <Label for={`email-${i}`}>Email</Label>
                    <Input 
                    type='email' 
                    id={`email-${i}`} 
                    placeholder='Email' 
                    bsSize='sm'
                    value={item.email}                                       
                    onChange={(e) => inputChangedHandaler(e, i, 'email' )}                     
                    />
                  </FormGroup>
                </Col>
                <Col md={2}>
                  <FormGroup>
                    <Label for={`phone-${i}`}>Work Phone</Label>
                    <Input 
                    type='number' 
                    id={`phone-${i}`} 
                    placeholder='Phone' 
                    bsSize='sm'
                    value={item.phone}                                       
                    onChange={(e) => inputChangedHandaler(e, i, 'phone' )}                     
                    />
                  </FormGroup>
                </Col>
                <Col md={2}>
                  <FormGroup>
                    <Label for={`mobile-${i}`}>Mobile</Label>
                    <Input 
                    type='number' 
                    id={`mobile-${i}`} 
                    placeholder='Mobile' 
                    bsSize='sm'
                    value={item.mobile}                                       
                    onChange={(e) => inputChangedHandaler(e, i, 'mobile' )}                    
                    />
                  </FormGroup>
                </Col>     

                <Col md={2}>
                  <FormGroup>
                    <Label for={`designation-${i}`}>Designation</Label>
                    <Input 
                    type='text' 
                    id={`designation-${i}`} 
                    placeholder='Designation' 
                    bsSize='sm'
                    value={item.designation}                                       
                    onChange={(e) => inputChangedHandaler(e, i, 'designation' )}                    
                    />
                  </FormGroup>
                </Col>                            
                
                <Col md={1}>
                  
                <Button.Ripple color='danger' className='btn-icon rounded-circle' onClick={() => deleteForm(i, item) } outline size='sm'>
                  <X size={14}  />                    
                  </Button.Ripple>
              

                </Col>
                
              </Row>
              </section>
          

            ))
            ): null
          }

        <Button.Ripple className='btn-icon' color='primary' onClick={increaseContactList} size='sm'>
          <Plus size={14} />
          <span className='align-middle ml-25'>Add Contact Person</span>
        </Button.Ripple>

        </Col>

      </Row> 

      <Row className="mt-2"> 
          <Col sm='12'>
              <FormGroup className='d-flex mb-0'>
                <div className='mr-1'>
                  <Button.Ripple color='primary' type='submit' disabled={loading || !contactList.length}>
                    Submit
                  </Button.Ripple>
                </div>
                
              </FormGroup>
            </Col>     
          </Row>       

        </AvForm>
      </CardBody>
      </Card>
      </Col>
</Row>
</Layout>

</>
)

}

export default Contact