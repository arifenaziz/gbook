// ** React Imports
import { useState } from 'react'
import { isObjEmpty, selectThemeColors } from '@utils'
// ** Third Party Components
import Flatpickr from 'react-flatpickr'
import { User, Briefcase, Mail, Calendar, DollarSign, X, Upload } from 'react-feather'
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  Label,
  Row,
  Col  
} from 'reactstrap'

import {
  AvForm,
  AvGroup,
  AvField,
  AvInput,
  AvFeedback
} from 'availity-reactstrap-validation-safe'

import { sitePath } from '../../../../../settings/paths'

// ** Styles
import '@styles/react/libs/flatpickr/flatpickr.scss'
import AvRadioGroup from 'availity-reactstrap-validation-safe/lib/AvRadioGroup'
import AvRadio from 'availity-reactstrap-validation-safe/lib/AvRadio'
import ModalFooter from 'reactstrap/lib/ModalFooter'

const ItemModal = ({ open, handleModal, operationMood, selectedItem, dispatch, selectItem, getUpdate, loading, getInsert, ToastContent, toast, Slide, Check, categoryList, brandList }) => {

console.log('selectedItem', selectedItem)

  // ** State
  const [Picker, setPicker] = useState(new Date())

  const [name, SetName] = useState('')
  const [code, SetCode] = useState('')
  const [size, SetSize] = useState('')
  const [category, SetCategory] = useState('')
  const [brand, SetBrand] = useState('')
  const [purchasePrice, SetPurchasePrice] = useState('')
  const [salePrice, SetSalePrice] = useState('')
  const [openningBalance, SetOpenningBalance] = useState('')
  const [openningDate, SetOpenningDate] = useState('')
  const [minStock, SetMinStock] = useState('')
  const [type, SetType] = useState('Product')
  const [status, SetStatus] = useState('')
  const [image, SetImage] = useState('')
  const [imagePreview, SetImagePreview] = useState('')

  
  const handleSidebarOpened = () => {
    if (!isObjEmpty(selectedItem)) {
      SetName(selectedItem.item_name)
      SetCode(selectedItem.item_code)
      SetSize(selectedItem.size)
      SetCategory(selectedItem.category_id)
      SetBrand(selectedItem.brand_id)
      SetPurchasePrice(selectedItem.purchase_price)
      SetSalePrice(selectedItem.sale_price)
      SetOpenningBalance(selectedItem.openning_quantity)
      SetOpenningDate(selectedItem.openning_date)
      SetMinStock(selectedItem.min_stock_qty)
      SetStatus(selectedItem.status)
      if ( selectedItem.photo ) {
      const path = `${sitePath}upload/item/${selectedItem.photo}`   
      console.log('path', path)
      SetImagePreview(path)
      }
      console.log('SLIDE_VALUE_OPEN')
    }
  }

  const handleSidebarClosed = () => {    
    SetName('')
      SetCode('')
      SetSize('')
      SetCategory('')
      SetBrand('')
      SetPurchasePrice('')
      SetSalePrice('')
      SetOpenningBalance('')
      SetOpenningDate('')
      SetMinStock('')
      SetImage('')
      SetImagePreview('')
    console.log('SLIDE_VALUE_CLOSED')
    dispatch(selectItem({}))
  }

  const handleSubmit = (e, errors) => {
    e.preventDefault()

    if (errors && !errors.length) {

    const formData = new FormData()

    formData.append(`name`, name)
    formData.append(`code`, code)
    formData.append(`size`, size)
    formData.append(`category`, category)
    formData.append(`brand`, brand)
    formData.append(`purchasePrice`, purchasePrice)
    formData.append(`salePrice`, salePrice)
    formData.append(`openningBalance`, openningBalance)
    formData.append(`openningDate`, openningDate)
    formData.append(`minStock`, minStock)
    formData.append(`type`, type)
    formData.append(`image`, image)
    formData.append(`status`, status)

  
    if (!isObjEmpty(selectedItem)) {
      formData.append(`main_id`, selectedItem.main_id)


      console.log('UPDATE')
      dispatch(getUpdate(formData))
      toast.success(
        <ToastContent title="Success" body="Update Successfully" color="success" icon={<Check size={12}/>} />,
        { transition: Slide, hideProgressBar: true, autoClose: 2000 }
      )      
      handleModal()
    } else {
      console.log('INSERT')
     dispatch(getInsert(formData))
      toast.success(
        <ToastContent title="Success" body="Inserted Successfully" color="success" icon={<Check size={12}/>} />,
        { transition: Slide, hideProgressBar: true, autoClose: 2000 }
      )      
      handleModal()
    }
    }
  }
  
  // ** Custom close btn
  const CloseBtn = <X className='cursor-pointer' size={15} onClick={handleModal} />

  let statusPlace=null

  if (operationMood) {
      statusPlace=(
        <FormGroup>
          <Label for='post'>Select Status</Label>
          <InputGroup>            
          <Input
                className='dataTable-select'
                type='select'
                id='sort-select'
                value={status}
                onChange={e => SetStatus(e.target.value)}
              >
                <option value="active">Active</option>
                <option value="deactive">Deactive</option>
              </Input>

          </InputGroup>
        </FormGroup>
        
      )
  }

  const imageHandaler = (e) => {

    const reader = new FileReader()
    reader.onload = () => {
      if (reader.readyState === 2) {        
        SetImage(e.target.files[0])
        SetImagePreview(reader.result)
      }
    }

    reader.readAsDataURL(e.target.files[0])

  }

  return (
    <Modal
      isOpen={open}
      toggle={handleModal}
      //className='sidebar-lg'
      className={`modal-dialog modal-xl`}
      onOpened={handleSidebarOpened}
      onClosed={handleSidebarClosed}
      //modalClassName='modal-dialog-centered modal-xl'
      contentClassName='pt-0'
    >
      <ModalHeader className='' toggle={handleModal} close={CloseBtn} tag='div'>
        <h5 className='modal-title'> { operationMood ? 'Update' : 'New' } Record</h5>
      </ModalHeader>
      <ModalBody className='flex-grow-1'>
        <AvForm onSubmit={handleSubmit}>

       <Row>
        <Col sm='5'>

        <AvGroup>
          <Label for='item-name'>Item Name</Label>               
            <AvInput 
            name='item-name'
            id='item-name' 
            placeholder='Item Name' 
            value={name}
            onChange={e => SetName(e.target.value)}
            required
             />
             <AvFeedback>Please enter a item name!</AvFeedback>          
        </AvGroup>

        <FormGroup>
          <Label for='category-name'>Item Code</Label>            
            <Input 
            name='item-code'
            id='item-code' 
            placeholder='Item Code' 
            value={code}
            onChange={e => SetCode(e.target.value)}
            required
             />                      
        </FormGroup>

        <FormGroup>
          <Label for='item-size'>Size</Label>
            <Input 
            name='item-size'
            id='item-size' 
            placeholder='Item Size' 
            value={size}
            onChange={e => SetSize(e.target.value)}
            required
             />          
        </FormGroup>   

      
      <AvGroup>
          <Label for='post'>Category Name</Label>                  
          <AvField
                className='category'
                name='category'
                type='select'
                id='category'
                value={category}
                onChange={e => SetCategory(e.target.value)}
                required
              >
                {
                categoryList.map((item, index)=>(
                <option key={index} value={item.value}>{item.name}</option>
                ))
                }
                                
              </AvField>
              <AvFeedback>Please select a category</AvFeedback>          
        </AvGroup>        
              
        <AvGroup>
          <Label for='post'>Brand Name</Label>                  
          <AvField
                className='brand'
                name='brand'
                type='select'
                id='brand'
                value={brand}
                onChange={e => SetBrand(e.target.value)}
                required
              >
                {
                brandList.map((item, index)=>(
                <option key={index} value={item.value}>{item.name}</option>
                ))
                }

              </AvField>
              <AvFeedback>Please select a brand</AvFeedback>          
        </AvGroup>               

        </Col>
        <Col sm='5'>

        <Row>
        <Col sm='6'>

        <FormGroup>
          <Label for='category-name'>Purchase Price</Label>                      
            <Input 
            name='purchase-name'
            id='purchase-name' 
            placeholder='Purchase Price' 
            value={purchasePrice}
            onChange={e => SetPurchasePrice(e.target.value)}
            required
             />                  
        </FormGroup>

        <FormGroup>
          <Label for='category-name'>Opening Quantity</Label>                      
            <Input 
            name='opening-quantity'
            id='opening-quantity' 
            placeholder='Opening Quantity' 
            value={openningBalance}
            onChange={e => SetOpenningBalance(e.target.value)}
            required
             />           
        </FormGroup> 

        <FormGroup>
          <Label for='category-name'>Min Stock Qty</Label>                      
            <Input 
            name='stock-qty'
            id='stock-qty' 
            placeholder='Min Stock Quantity' 
            value={minStock}
            onChange={e => SetMinStock(e.target.value)}
            required
             />
               
        </FormGroup>          

          <AvRadioGroup 
          name='type' 
          required value={type}
          onChange={e => SetType(e.target.value)}
          >
            <Label for='item-type'>Item Type</Label>
            <AvRadio className='mb-1' customInput label='Product' value='Product' checked />
            <AvRadio customInput label='Service' value='Service' />
          </AvRadioGroup>             

        </Col>

        <Col sm='6'>

        <FormGroup>
          <Label for='category-name'>Sale Price</Label>                      
            <Input 
            name='sale-name'
            id='sale-name' 
            placeholder='Sale Price' 
            value={salePrice}
            onChange={e => SetSalePrice(e.target.value)}
            required
             />            
        </FormGroup>     

        <AvGroup>
          <Label for='category-name'>Opening Date</Label>                      
            <AvField 
            name='opening-date'
            id='opening-date' 
            tag={Flatpickr}
            options={{              
              dateFormat: "d-m-Y",
              altFormat: "d-m-Y"
          }}
            placeholder='Opening Date' 
            value={openningDate}
            className='form-control'
            onChange={date => SetOpenningDate(date[0])}
            required
             />

        {statusPlace}

        <AvFeedback>Please enter a opening date</AvFeedback>          
        </AvGroup>             

        </Col>

        </Row>

        
        </Col>        
        <Col sm='2' className="center-div">
        <FormGroup>
        <div className="picture-hold">          
          <img style={{ width: "100%", maxHeight:"198px" }} src={imagePreview} />
        </div>
        </FormGroup>

        <FormGroup>              
              <Input type='file' id='inputfile' name='fileInpur' accept="image/*" className="inputfile" onChange={imageHandaler}/>
              <Label for='inputfile'> 
              <Upload/>
               Browse Image
               </Label>
        </FormGroup>
                          
        </Col>
        </Row>


          <ModalFooter>

        <Button className='mr-1' color='primary' type="submit" disabled={loading}>
          {operationMood ? 'Update' : 'Submit' }
        </Button>
        <Button color='secondary' onClick={handleModal} outline>
          Cancel
        </Button>


          </ModalFooter>        

        
        </AvForm>
      </ModalBody>
    </Modal>
  )
}

export default ItemModal
