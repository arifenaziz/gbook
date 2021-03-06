import * as actionType from '../action'

const initialState={    
    data: null,
    error:false,
    loading:false,
    success:false    
}


const customerContactReducer = (state = initialState, action) =>{

    switch (action.type) {

        case actionType.CUSTOMER_CONTACT_FETACHING_START:

        return {
            ...state,            
            error:null,
            loading:true
        }
  

        case actionType.CUSTOMER_CONTACT_FETACHING_SUCCESS:

        return {
            ...state,            
            data: action.data,                                           
            error:null,
            loading:false,
            success:true
        }

        case actionType.CUSTOMER_CONTACT_UPDATE_SUCCESS:

            return {
                ...state,            
                loading:false,
                success:true
            }        

        case actionType.CUSTOMER_CONTACT_FETACHING_FAIL:

            return {
                ...state,            
                error:action.error,
                loading:false,
                success:false                             
         }                 

        default:
        return state


    }


}

export default customerContactReducer