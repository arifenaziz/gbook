// ** Redux Imports
import { combineReducers } from 'redux'

// ** Reducers Imports
import auth from './auth'
import navbar from './navbar'
import layout from './layout'
import category from '@src/views/Pages/Common/Category/store/reducer'
import brand from '@src/views/Pages/Common/Brand/store/reducer'
import unit from '@src/views/Pages/Common/Unit/store/reducer'

const rootReducer = combineReducers({
  auth,
  navbar,
  layout,
  category,
  brand,
  unit
})

export default rootReducer
