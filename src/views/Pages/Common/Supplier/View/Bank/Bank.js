import Layout from "../../../../../Components/Layout/SupplierLayout/Layout"
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

const Bank = (props) => {
const path = props.match

const dispatch = useDispatch()

const data = useSelector(state => state.supplierBank.data)
const loading = useSelector(state => state.supplierBank.loading)
const success = useSelector(state => state.supplierBank.operation)

useEffect(() => {
  dispatch(
    getProcess(path.params.id)
  )

}, [dispatch])


const initialBankList={
  id:'',
  bank_name:'',
  type:'',
  acc_no:'',
  swift_code:'',
  remark:'' 
}

const [bankList, SetBankList] = useState(
  []
)

useEffect(() => {
  if (data !== null && data !== undefined) {
  SetBankList(data)        
  }
 }, [data, dispatch])


const increaseBankList = () => {
  SetBankList(
    [
      ...bankList,
      initialBankList
    ]
  )
}

const deleteForm =( i, item ) => {
  
  if (item.id) {

    dispatch(getDelete(item.id))

  }
  
  const updatedDataList=[...bankList]
  updatedDataList.splice(i, 1)
  SetBankList(updatedDataList)


}

const inputChangedHandaler = (event, position, identifier) => {

  const updatedContactList=[...bankList]
      
  const updatedElement={
    ...updatedContactList[position]
  }

  updatedElement[`${identifier}`]=event.target.value      

  updatedContactList[position]=updatedElement    

  SetBankList(updatedContactList)

}


const handleSubmit = (e, errors) => {
  e.preventDefault()

  if (errors && !errors.length) {

    const state = {      
      bankList      
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
        <CardTitle tag='h4'>Bank Accounts</CardTitle>
      </CardHeader>
      <CardBody>        
      <AvForm onSubmit={handleSubmit}>
        <Row>
        <Col>        

          {
            bankList?.length ?(
            bankList.map((item, i)=>(
                            
            <section key={i}>              
              <Row className='justify-content-between align-items-center' >
                <Col md={3}>
                  <AvGroup>
                    <Label for={`bank-name-${i}`}>Name</Label>
                    <AvInput 
                    type='text' 
                    name={`bank-name-${i}`} 
                    id={`bank-name-${i}`} 
                    placeholder='Name' 
                    bsSize='sm' 
                    value={item.bank_name || ''}                                       
                    onChange={(e) => inputChangedHandaler(e, i, 'bank_name' )} 
                    required                    
                    />
                    <AvFeedback>Please enter a contact name!</AvFeedback>
                  </AvGroup>
                </Col>
                <Col md={2}>
                  <FormGroup>
                    <Label for={`email-${i}`}>Account Type</Label>
                    <Input 
                    type='text' 
                    id={`type-${i}`} 
                    placeholder='Type' 
                    bsSize='sm'
                    value={item.type}                                       
                    onChange={(e) => inputChangedHandaler(e, i, 'type' )}                     
                    />
                  </FormGroup>
                </Col>
                <Col md={2}>
                  <FormGroup>
                    <Label for={`phone-${i}`}>Account No</Label>
                    <Input 
                    type='text' 
                    id={`acc_no-${i}`} 
                    placeholder='Account No' 
                    bsSize='sm'
                    value={item.acc_no}                                       
                    onChange={(e) => inputChangedHandaler(e, i, 'acc_no' )}                     
                    />
                  </FormGroup>
                </Col>
                <Col md={2}>
                  <FormGroup>
                    <Label for={`mobile-${i}`}>Swift Code</Label>
                    <Input 
                    type='text' 
                    id={`swift_code-${i}`} 
                    placeholder='Swift Code' 
                    bsSize='sm'
                    value={item.swift_code}                                       
                    onChange={(e) => inputChangedHandaler(e, i, 'swift_code' )}                    
                    />
                  </FormGroup>
                </Col>     

                <Col md={2}>
                  <FormGroup>
                    <Label for={`designation-${i}`}>Remark</Label>
                    <Input 
                    type='text' 
                    id={`remark-${i}`} 
                    placeholder='Remark' 
                    bsSize='sm'
                    value={item.remark}                                       
                    onChange={(e) => inputChangedHandaler(e, i, 'remark' )}                    
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

        <Button.Ripple className='btn-icon' color='primary' onClick={increaseBankList} size='sm'>
          <Plus size={14} />
          <span className='align-middle ml-25'>Add Bank Account</span>
        </Button.Ripple>

        </Col>

      </Row> 

      <Row className="mt-2"> 
          <Col sm='12'>
              <FormGroup className='d-flex mb-0'>
                <div className='mr-1'>
                  <Button.Ripple color='primary' type='submit' disabled={loading || !bankList.length}>
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

export default Bank