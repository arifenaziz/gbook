// ** Redux Imports
import { combineReducers } from 'redux'

// ** Reducers Imports
import auth from './auth'
import navbar from './navbar'
import layout from './layout'
import category from '@src/views/Pages/Common/Category/store/reducer'
import brand from '@src/views/Pages/Common/Brand/store/reducer'
import unit from '@src/views/Pages/Common/Unit/store/reducer'
import item from '@src/views/Pages/Common/Item/store/reducer'
import customer from '@src/views/Pages/Common/Customer/store/reducer'
import customerOverview from '@src/views/Pages/Common/Customer/View/Overview/store/reducer'
import customerContact from '@src/views/Pages/Common/Customer/View/Contact/store/reducer'

const rootReducer = combineReducers({
  auth,
  navbar,
  layout,
  category,
  brand,
  unit,
  item,
  customer,
  customerOverview,
  customerContact
})

export default rootReducer
