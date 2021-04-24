import * as actionType from '../action'

const initialState={    
    data: [],
    total: 1,
    params: {},
    allData: [],
    selectedCustomer: {},
    error:false,
    loading:false,
    success:false,
    operation:false        
}


const customerReducer = (state = initialState, action) =>{

    switch (action.type) {

        case actionType.CUSTOMER_FETACHING_START:

        return {
            ...state,            
            error:null,
            loading:true
        }
  

        case actionType.CUSTOMER_FETACHING_SUCCESS:

        return {
            ...state,
            allData: action.allData,
            data: action.data,
            total: action.totalPages,
            params: action.params,                                            
            error:null,
            loading:false,
            success:true
        }

        case actionType.CUSTOMER_FETACHING_FAIL:

            return {
                ...state,            
                error:action.error,
                loading:false,
                success:false                             
         }    
         case actionType.SELECT_SINGLE_CUSTOMER:

            return {
                ...state,            
                selectedCustomer:action.customer                          
         }      
         case actionType.CUSTOMER_UPDATE_SUCCESS:
        
            return {
             ...state,            
             loading:false,                   
             operation:true
           }  
           case actionType.CUSTOMER_UPDATE_RESET:
        
            return {
             ...state,            
             loading:false,                   
             operation:false
           }                             

        default:
        return state


    }


}

export default customerReducer