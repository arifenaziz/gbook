// ** React Imports
import { useState } from 'react'
import { isObjEmpty, selectThemeColors } from '@utils'
// ** Third Party Components
import Flatpickr from 'react-flatpickr'
import { User, Briefcase, Mail, Calendar, DollarSign, X } from 'react-feather'
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
  Label
} from 'reactstrap'

// ** Styles
import '@styles/react/libs/flatpickr/flatpickr.scss'

const CategoryModal = ({ open, handleModal, operationMood, selectedCategory, dispatch, selectCategory, getUpdate, loading, getInsert, ToastContent, toast, Slide, Check }) => {
  // ** State
  const [Picker, setPicker] = useState(new Date())

  const [name, SetName] = useState('')
  const [description, SetDescription] = useState('')
  const [status, SetStatus] = useState('')
  
  const handleSidebarOpened = () => {
    if (!isObjEmpty(selectedCategory)) {
      SetName(selectedCategory.category_name)
      SetDescription(selectedCategory.description)
      SetStatus(selectedCategory.status)
      console.log('SLIDE_VALUE_OPEN')
    }
  }

  const handleSidebarClosed = () => {    
    SetName('')
    SetDescription('')
    SetStatus('')    
    console.log('SLIDE_VALUE_CLOSED')
    dispatch(selectCategory({}))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const state = {
      name,
      description,
      status
    }


    if (!isObjEmpty(selectedCategory)) {
      console.log('UPDATE')
      dispatch(getUpdate(state, selectedCategory.main_id))
      toast.success(
        <ToastContent title="Success" body="Update Successfully" color="success" icon={<Check size={12}/>} />,
        { transition: Slide, hideProgressBar: true, autoClose: 2000 }
      )      
      handleModal()
    } else {
      console.log('INSERT')
      dispatch(getInsert(state))
      toast.success(
        <ToastContent title="Success" body="Inserted Successfully" color="success" icon={<Check size={12}/>} />,
        { transition: Slide, hideProgressBar: true, autoClose: 2000 }
      )      
      handleModal()
    }
  }
  
  // ** Custom close btn
  const CloseBtn = <X className='cursor-pointer' size={15} onClick={handleModal} />

  let statusPlace=null

  if (operationMood) {
      statusPlace=(
        <FormGroup>
          <Label for='post'>Select</Label>
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

  return (
    <Modal
      isOpen={open}
      toggle={handleModal}
      className='sidebar-lg'
      onOpened={handleSidebarOpened}
      onClosed={handleSidebarClosed}
      modalClassName='modal-slide-in'
      contentClassName='pt-0'
    >
      <ModalHeader className='mb-3' toggle={handleModal} close={CloseBtn} tag='div'>
        <h5 className='modal-title'> { operationMood ? 'Update' : 'New' } Record</h5>
      </ModalHeader>
      <ModalBody className='flex-grow-1'>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label for='category-name'>Category Name</Label>
          <InputGroup>            
            <Input 
            id='category-name' 
            placeholder='Category Name' 
            value={name}
            onChange={e => SetName(e.target.value)}
             />
          </InputGroup>
        </FormGroup>
        
        <FormGroup>
          <Label for='post'>Category Description</Label>
          <InputGroup>            
            <Input 
            type='textarea' 
            name='text' 
            id='description' 
            rows='3' 
            placeholder='Description'
            value={description}
            onChange={e => SetDescription(e.target.value)}
             />
          </InputGroup>
        </FormGroup>
        
        {statusPlace}

        <Button className='mr-1' color='primary' type="submit" disabled={loading}>
          {operationMood ? 'Update' : 'Submit' }
        </Button>
        <Button color='secondary' onClick={handleModal} outline>
          Cancel
        </Button>
        </Form>
      </ModalBody>
    </Modal>
  )
}

export default CategoryModal
