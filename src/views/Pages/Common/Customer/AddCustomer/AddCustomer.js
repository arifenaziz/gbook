import { useState } from 'react'
import { Card, CardHeader, CardTitle, CardBody, FormGroup, Row, Col, Input, Form, Button, Label, CustomInput } from 'reactstrap'
import { getInsert } from '../store/action'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from "react-router-dom"
import {
  AvForm,
  AvGroup,
  AvField,
  AvInput,
  AvFeedback
} from 'availity-reactstrap-validation-safe'
import { X, Plus, Check } from 'react-feather'
import Avatar from '@components/avatar'
import { toast, Slide } from 'react-toastify'

const AddCustomer = () => {
  
  const history = useHistory()
  const dispatch = useDispatch()
  //const store = useSelector(state => state.customer)
  const loading = useSelector(state => state.customer.loading)
  const success = useSelector(state => state.customer.operation)

  const [name, SetName] = useState('')
  const [email, SetEmail] = useState('')
  const [phone, SetPhone] = useState('')
  const [mobile, SetMobile] = useState('')
  const [website, SetWebsite] = useState('')
  const [balance, SetBalance] = useState('')
  const [date, SetDate] = useState('')

  const [billTo, SetBillTo] = useState('')
  const [billCountry, SetBillCountry] = useState('')
  const [billAddress, SetBillAddress] = useState('')
  const [billCity, SetBillCity] = useState('')
  const [billState, SetBillState] = useState('')
  const [billZip, SetBillZip] = useState('')
  const [billPhone, SetBillPhone] = useState('')

  const [sameAddress, SetSameAddress] = useState(false)

  const [shipTo, SetShipTo] = useState('')
  const [shipCountry, SetShipCountry] = useState('')
  const [shipAddress, SetShipAddress] = useState('')
  const [shipCity, SetShipCity] = useState('')
  const [shipState, SetShipState] = useState('')
  const [shipZip, SetShipZip] = useState('')
  const [shipPhone, SetShipPhone] = useState('')

  const initialContactList={
    name:'',
    email:'',
    phone:'',
    mobile:'',
    designation:''  
  }

  const [contactList, SetContactList] = useState(
    [initialContactList]
  )

  const [remark, SetRemark] = useState('')


  const increaseContactList = () => {
    SetContactList(
      [
        ...contactList,
        initialContactList
      ]
    )
  }

  const deleteForm = i => {
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
  

  const sameAddressHandle = (e) => {
    SetSameAddress(e.target.checked)

    SetShipTo('')
    SetShipCountry('')
    SetShipAddress('')
    SetShipCity('')
    SetShipState('')
    SetShipZip('')
    SetShipPhone('')
  }

  const handleSubmit = (e, errors) => {
    e.preventDefault()

    if (errors && !errors.length) {

      const state = {
        name,
        email,
        phone,
        mobile,
        website,
        balance,
        date,
        billTo,
        billCountry,
        billAddress,
        billCity,
        billState,
        billZip,
        billPhone,
        shipTo,
        shipCountry,
        shipAddress,
        shipCity,
        shipState,
        shipZip,
        shipPhone,
        sameAddress,
        contactList,
        remark
      }

      console.log('STATE', state)
      dispatch(getInsert(state))
    
    }

  }


  const ToastContent = ({ title, body, icon, color }) => (
    <>
      <div className='toastify-header'>
      <div className='title-wrapper'>
        <Avatar size='sm' color={color} icon={icon} />
        <h6 className='toast-title'>{title}</h6>
      </div>      
    </div>
    <div className='toastify-body'>
      <span role='img' aria-label='toast-text'>
        👋 Data {body}
      </span>
    </div>
    </>
  )


  if (success) {
    
    toast.success(
      <ToastContent title="Success" body="Inserted Successfully" color="success" icon={<Check size={12}/>} />,
      { transition: Slide, hideProgressBar: true, autoClose: 2000 }
    )

    history.push("/admin/customers")

  }


  const cancleProcess = () => {
    history.push("/admin/customers")
  }

    return (
    <>        
      {/* <h4 className="card-title">Add Customer <small className="text-muted"></small></h4> */}
      <Row>
        <Col sm='12'>


        <Card>
      <CardHeader>
        <CardTitle tag='h4'>New Customer</CardTitle>
      </CardHeader>

      <CardBody>
        <AvForm onSubmit={handleSubmit}>
          <Row>
            <Col md='6' sm='12'>
              
            <AvGroup>
            <Label for='item-name'>Customer Name</Label>               
            <AvInput 
            name='name'
            id='name' 
            placeholder='Customer Name' 
            value={name}
            bsSize='sm'
            onChange={e => SetName(e.target.value)}
            required
             />
            <AvFeedback>Please enter a customer name!</AvFeedback>          
            </AvGroup>


            </Col>
            <Col md='6' sm='12'>
              <FormGroup>
                <Label for='lastNameMulti'>Customer Email</Label>
                <Input 
                type='email' 
                name='email' 
                id='email' 
                placeholder='Customer Email' 
                bsSize='sm'
                value={email}
                onChange={e => SetEmail(e.target.value)}
                />
              </FormGroup>
            </Col>
            <Col md='6' sm='12'>
              <FormGroup>
                <Label for='cityMulti'>Customer Phone</Label>
                <Input 
                type='number' 
                name='phone' 
                id='phone' 
                placeholder='Customer Phone' 
                bsSize='sm'
                value={phone}
                onChange={e => SetPhone(e.target.value)}
                />
              </FormGroup>
            </Col>
            <Col md='6' sm='12'>
              <FormGroup>
                <Label for='CountryMulti'>Customer Mobile</Label>
                <Input 
                type='number' 
                name='mobile' 
                id='mobile' 
                placeholder='Customer Mobile' 
                bsSize='sm'
                value={mobile}
                onChange={e => SetMobile(e.target.value)}
                />
              </FormGroup>
            </Col>
            <Col md='4' sm='12'>
              <FormGroup>
                <Label for='CompanyMulti'>Customer Website</Label>
                <Input 
                type='text' 
                name='website' 
                id='website' 
                placeholder='Customer website' 
                bsSize='sm'
                value={website}
                onChange={e => SetWebsite(e.target.value)}
                />
              </FormGroup>
            </Col>
            <Col md='4' sm='12'>
              <FormGroup>
                <Label for='EmailMulti'>Openning Balance</Label>
                <Input 
                type='number' 
                name='balance' 
                id='balance' 
                placeholder='Openning Balance' 
                bsSize='sm'
                value={balance}
                onChange={e => SetBalance(e.target.value)}
                />
              </FormGroup>
            </Col>
            <Col md='4' sm='12'>
              <FormGroup>
                <Label for='EmailMulti'>Openning Date</Label>
                <Input 
                type='text' 
                name='date' 
                id='date' 
                placeholder='dd/mm/yyyy' 
                bsSize='sm'
                value={date}
                onChange={e => SetDate(e.target.value)}
                />
              </FormGroup>
            </Col>       
            <hr/>     
            </Row>


            <Row className="mt-2">

                
            <Col md='6' sm='12'>

            <h4>Billing Address</h4>

            <FormGroup>
                <Label for='bill_attn_to'>To</Label>
                <Input 
                type='text' 
                name='bill_attn_to' 
                id='bill_attn_to' 
                placeholder='Attn To' 
                bsSize='sm'
                value={billTo}
                onChange={e => SetBillTo(e.target.value)}
                />
            </FormGroup>

            <FormGroup>
                <Label for='bill_country'>Country</Label>
                <Input 
                type='text' 
                name='bill_country' 
                id='bill_country' 
                placeholder='Country' 
                bsSize='sm'
                value={billCountry}
                onChange={e => SetBillCountry(e.target.value)}
                />
            </FormGroup>            

            <FormGroup>
                <Label for='bill_address'>Address</Label>
                <Input 
                type='textarea' 
                name='bill_address' 
                id='bill_address' 
                placeholder='Address' 
                bsSize='sm'
                value={billAddress}
                onChange={e => SetBillAddress(e.target.value)}
                />
            </FormGroup>  

            <FormGroup>
                <Label for='bill_city'>City</Label>
                <Input 
                type='text' 
                name='bill_city' 
                id='bill_city' 
                placeholder='City' 
                bsSize='sm'
                value={billCity}
                onChange={e => SetBillCity(e.target.value)}                
                />
            </FormGroup> 

            <FormGroup>
                <Label for='bill_state'>State</Label>
                <Input 
                type='text' 
                name='bill_state' 
                id='bill_state' 
                placeholder='State' 
                bsSize='sm'
                value={billState}
                onChange={e => SetBillState(e.target.value)}                
                />
            </FormGroup> 

            <FormGroup>
                <Label for='bill_zip'>Zip Code</Label>
                <Input 
                type='text' 
                name='bill_zip' 
                id='bill_zip' 
                placeholder='Zip Code' 
                bsSize='sm'
                value={billZip}
                onChange={e => SetBillZip(e.target.value)}                
                 />
            </FormGroup> 

            <FormGroup>
                <Label for='bill_phone'>Phone</Label>
                <Input 
                type='number' 
                name='bill_phone' 
                id='bill_phone' 
                placeholder='phone' 
                bsSize='sm' 
                value={billPhone}
                onChange={e => SetBillPhone(e.target.value)}                
                />
            </FormGroup>                                                          

            </Col>

            <Col md='6' sm='12'>
            <div className="address-confirm">
            <h4>Shipping Address 
            
            <CustomInput
            type='checkbox'
            className='custom-control-Primary'
            id='Primary'
            label='Same Address'            
            inline
            className="same-address" 
            value={sameAddress}
            onChange={(e) => sameAddressHandle(e) }
          />
                                 
            </h4>
            </div>

            <FormGroup>
                <Label for='ship_attn_to'>To</Label>
                <Input 
                type='text' 
                name='ship_attn_to' 
                id='ship_attn_to' 
                placeholder='Attn To' 
                bsSize='sm'
                value={shipTo}
                onChange={e => SetShipTo(e.target.value)}
                disabled={sameAddress}                
                />
            </FormGroup>

            <FormGroup>
                <Label for='ship_country'>Country</Label>
                <Input 
                type='text' 
                name='ship_country' 
                id='ship_country' 
                placeholder='Country' 
                bsSize='sm'
                value={shipCountry}
                onChange={e => SetShipCountry(e.target.value)}       
                disabled={sameAddress}         
                />
            </FormGroup>            

            <FormGroup>
                <Label for='ship_address'>Address</Label>
                <Input 
                type='textarea' 
                name='ship_address' 
                id='ship_address' 
                placeholder='Address' 
                bsSize='sm'
                value={shipAddress}
                onChange={e => SetShipAddress(e.target.value)}  
                disabled={sameAddress}              
                />
            </FormGroup>  

            <FormGroup>
                <Label for='ship_city'>City</Label>
                <Input 
                type='text' 
                name='ship_city' 
                id='ship_city' 
                placeholder='City' 
                bsSize='sm'
                value={shipCity}
                onChange={e => SetShipCity(e.target.value)}
                disabled={sameAddress}                
                />
            </FormGroup> 

            <FormGroup>
                <Label for='ship_state'>State</Label>
                <Input 
                type='text' 
                name='ship_state' 
                id='ship_state' 
                placeholder='State'  
                bsSize='sm'
                value={shipState}
                onChange={e => SetShipState(e.target.value)}  
                disabled={sameAddress}              
                />
            </FormGroup> 

            <FormGroup>
                <Label for='ship_zip'>Zip Code</Label>
                <Input 
                type='text' 
                name='ship_zip' 
                id='ship_zip' 
                placeholder='Zip Code' 
                bsSize='sm' 
                value={shipZip}
                onChange={e => SetShipZip(e.target.value)} 
                disabled={sameAddress}               
                />
            </FormGroup> 

            <FormGroup>
                <Label for='ship_phone'>Phone</Label>
                <Input 
                type='number' 
                name='ship_phone' 
                id='ship_phone' 
                placeholder='phone' 
                bsSize='sm' 
                value={shipPhone}
                onChange={e => SetShipPhone(e.target.value)}  
                disabled={sameAddress}              
                />
            </FormGroup>


            </Col>

            </Row>


            <Row className="mt-2">            
                
            <Col md='12' sm='12'>

            <h4>Contact Person</h4>
            
          {
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
                    value={item.name}                                       
                    onChange={(e) => inputChangedHandaler(e, i, 'name' )} 
                    required={i}                    
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
                  
                {
                  i!==0 ? <Button.Ripple color='danger' className='btn-icon rounded-circle' onClick={() => deleteForm(i) } outline size='sm'>
                  <X size={14}  />                    
                  </Button.Ripple> : null
                }

                </Col>
                
              </Row>
              </section>
          

            ))
          }
        {/* </Repeater> */}

        
        <Button.Ripple className='btn-icon' color='primary' onClick={increaseContactList} size='sm'>
          <Plus size={14} />
          <span className='align-middle ml-25'>Add Contact Person</span>
        </Button.Ripple>


            </Col>

          </Row>            


          <Row className="mt-2">            
                
          <Col md='6' sm='12'>

          <FormGroup>
                <Label for='remark'>Remark</Label>
                <Input 
                type='textarea' 
                name='remark' 
                id='remark' 
                placeholder='Remark' 
                bsSize='sm'
                value={remark}
                onChange={e => SetRemark(e.target.value)}                
                />
            </FormGroup>

          </Col>          

          </Row>

          <Row className="mt-2"> 
          <Col sm='12'>
              <FormGroup className='d-flex mb-0'>
                <div className='mr-1'>
                  <Button.Ripple color='primary' type='submit' disabled={loading}>
                    Submit
                  </Button.Ripple>
                </div>
                <Button.Ripple outline color='secondary' type='button' onClick={() => cancleProcess()}>
                  Cancle
                </Button.Ripple>
              </FormGroup>
            </Col>     
          </Row>     


        </AvForm>
      </CardBody>
    </Card>
  
        </Col>
      </Row>    
        </>
    )
}

export default AddCustomer