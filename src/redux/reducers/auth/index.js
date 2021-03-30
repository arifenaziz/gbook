import * as actionType from '../../actions/auth'

// **  Initial State
const initialState = {
  userData: {},
  error:false,
  loading:false
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    
    case actionType.AUTH_SIGNIN_START:
      return {
        ...state,            
        error:null,
        loading:true
    }

    case actionType.AUTH_SIGNIN_SUCCESS:

        return {
            ...state,  
            userData:action.token,                      
            error:null,
            loading:false            
        }

    case actionType.AUTH_SIGNIN_FAIL:

          return {
              ...state,            
              error:action.error,
              loading:false
       }
       
    case actionType.AUTH_SIGNIN_LOGOUT:

        return {
            ...state,
            userData:null      
        }       

    case 'LOGOUT':
      return { ...state, userData: {} }
    default:
      return state
  }
}

export default authReducer
