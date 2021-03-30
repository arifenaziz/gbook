// ** React Imports
import { Fragment, useState, useEffect, memo } from 'react'

// ** Table Columns
import { statusList } from '../settings'

// ** Store & Actions
import { getProcess, selectCategory, getUpdate, getInsert } from '../store/action'
import { useSelector, useDispatch } from 'react-redux'
import { toast, Slide } from 'react-toastify'

import CategoryModal from '../CategoryModal/CategoryModal'

// ** Third Party Components
import ReactPaginate from 'react-paginate'
import { AlignCenter, ChevronDown, Edit, Plus, Check } from 'react-feather'
import Avatar from '@components/avatar'
import DataTable from 'react-data-table-component'
import { Card, CardHeader, CardTitle, Input, Label, Row, Col, Badge, Button } from 'reactstrap'

const CategoryTable = () => {
  // ** Store Vars
  const dispatch = useDispatch()
  const store = useSelector(state => state.category)
  const loading = useSelector(state => state.category.loading)

  // ** States
  const [modal, setModal] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [rowsPerPage, setRowsPerPage] = useState(6)
  const [searchValue, setSearchValue] = useState('')
  const [operationMood, setOperationMood] = useState(false)

  // ** Get data on mount
  useEffect(() => {
    dispatch(
      getProcess({
        page: currentPage,
        perPage: rowsPerPage,
        q: searchValue
      })
    )
  }, [dispatch])

  const handleModal = () => setModal(!modal)

  // ** Function to handle filter
  const handleFilter = e => {
    setSearchValue(e.target.value)

    dispatch(
      getProcess({
        page: currentPage,
        perPage: rowsPerPage,
        q: e.target.value
      })
    )
  }

  // ** Function to handle Pagination and get data
  const handlePagination = page => {
    dispatch(
      getProcess({
        page: page.selected + 1,
        perPage: rowsPerPage,
        q: searchValue
      })
    )
    setCurrentPage(page.selected + 1)
  }

  // ** Function to handle per page
  const handlePerPage = e => {
    dispatch(
      getProcess({
        page: currentPage,
        perPage: parseInt(e.target.value),
        q: searchValue
      })
    )
    setRowsPerPage(parseInt(e.target.value))
  }

  // ** Custom Pagination
  const CustomPagination = () => {
    //const count = Number((store.total / rowsPerPage).toFixed(0))
    const count= Math.ceil((store.total  / rowsPerPage))

    return (
      <ReactPaginate
        previousLabel={''}
        nextLabel={''}
        breakLabel='...'
        pageCount={count || 1}
        marginPagesDisplayed={2}
        pageRangeDisplayed={2}
        activeClassName='active'
        forcePage={currentPage !== 0 ? currentPage - 1 : 0}
        onPageChange={page => handlePagination(page)}
        pageClassName={'page-item'}
        nextLinkClassName={'page-link'}
        nextClassName={'page-item next'}
        previousClassName={'page-item prev'}
        previousLinkClassName={'page-link'}
        pageLinkClassName={'page-link'}
        breakClassName='page-item'
        breakLinkClassName='page-link'
        containerClassName={
          'pagination react-paginate separated-pagination pagination-sm justify-content-end pr-1 mt-1'
        }
      />
    )
  }

  //** Table data to render
  const dataToRender = () => {
    const filters = {
      q: searchValue
    }

    const isFiltered = Object.keys(filters).some(function (k) {
      return filters[k].length > 0
    })

    if (store.data.length > 0) {
      return store.data
    } else if (store.data.length === 0 && isFiltered) {
      return []
    } else {
      return store.allData.slice(0, rowsPerPage)
    }
  }

  const handleOpenButtonClick = () => {
    setOperationMood(false)
    setModal(true) 
  }

  const handleButtonClick = (state) => {
    setOperationMood(true)
    dispatch(selectCategory(state))
    setModal(true)     
  }

  const categoryColumns = [
    {
      name: '#',
      selector: 'id',
      sortable: true,
      width: '60px'
    },
    {
      name: 'Category Name',
      selector: 'category_name',
      sortable: true,
      minWidth: '250px'
    },
    {
      name: 'Description',
      selector: 'description',
      sortable: true,
      minWidth: '400px'
    },
    {
      name: 'Status',
      selector: 'status',
      sortable: true,
      minWidth: '150px',      
      cell: row => {
        return (
          <Badge color={statusList[row.status].color} pill>
            {statusList[row.status].title}            
          </Badge>
        )
      }
    },    
    {
      name: 'Actions',
      selector: 'main_id',
      sortable: false,
      minWidth: '150px',
      style:{
        justifyContent: 'center'        
      },      
      cell: row => {
        return (          
            <Button.Ripple outline color='primary' size='sm' onClick={()=>handleButtonClick(row)}>
              <Edit size={14}/>Edit
            </Button.Ripple>          
        )
      }
    }
  ]

  const ToastContent = ({ title, body, icon, color }) => (
    <Fragment>
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
    </Fragment>
  )


  return (
    <Fragment>
      <Card>
        <CardHeader className='border-bottom'>
          <CardTitle tag='h4'>Category</CardTitle>

          <div className='d-flex mt-md-0 mt-1'>
            <Button className='ml-2' color='primary' onClick={handleOpenButtonClick}>
              <Plus size={15} />
              <span className='align-middle ml-50'>Add Category</span>
            </Button>
          </div>
        

        </CardHeader>
        <Row className='mx-0 mt-1 mb-50'>
          <Col sm='6'>
            <div className='d-flex align-items-center'>
              <Label for='sort-select'>show</Label>
              <Input
                className='dataTable-select'
                type='select'
                id='sort-select'
                value={rowsPerPage}
                onChange={e => handlePerPage(e)}
              >
                <option value={6}>6</option>
                <option value={10}>10</option>
                <option value={25}>25</option>
                <option value={50}>50</option>
                <option value={75}>75</option>
                <option value={100}>100</option>
              </Input>
              <Label for='sort-select'>entries</Label>
            </div>
          </Col>
          <Col className='d-flex align-items-center justify-content-sm-end mt-sm-0 mt-1' sm='6'>
            <Label className='mr-1' for='search-input'>
              Search
            </Label>
            <Input
              className='dataTable-filter'
              type='text'
              bsSize='sm'
              id='search-input'
              value={searchValue}
              onChange={handleFilter}
            />
          </Col>
        </Row>
        <DataTable
          noHeader
          pagination
          paginationServer
          className='react-dataTable'
          columns={categoryColumns}
          sortIcon={<ChevronDown size={10} />}
          paginationComponent={CustomPagination}
          data={dataToRender()}
        />
      </Card>
      <CategoryModal 
      open={modal} 
      handleModal={handleModal} 
      operationMood={operationMood} 
      selectedCategory={store.selectedCategory}
      dispatch={dispatch}
      selectCategory={selectCategory}
      getUpdate={getUpdate}
      loading={loading}
      getInsert={getInsert}
      ToastContent={ToastContent}
      toast={toast}
      Slide={Slide}
      Check={Check}
      />
    </Fragment>
  )
}

export default memo(CategoryTable)
