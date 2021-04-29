import * as actionType from '../action'

const initialState={    
    data: [],
    total: 1,
    params: {},
    allData: [],
    selectedSupplier: {},
    error:false,
    loading:false,
    success:false,
    operation:false        
}


const supplierReducer = (state = initialState, action) =>{

    switch (action.type) {

        case actionType.SUPPLIER_FETACHING_START:

        return {
            ...state,            
            error:null,
            loading:true
        }
  

        case actionType.SUPPLIER_FETACHING_SUCCESS:

        return {
            ...state,
            allData: action.allData,
            data: action.data,
            total: action.totalPages,
            params: action.params,                                            
            error:null,
            loading:false,
            operation:false,
            success:true
        }

        case actionType.SUPPLIER_FETACHING_FAIL:

            return {
                ...state,            
                error:action.error,
                loading:false,
                success:false                             
         }    
         case actionType.SELECT_SINGLE_SUPPLIER:

            return {
                ...state,            
                selectedSupplier:action.supplier                          
         }      
         case actionType.SUPPLIER_UPDATE_SUCCESS:
        
            return {
             ...state,            
             loading:false,                   
             operation:true
           }  
           case actionType.SUPPLIER_UPDATE_RESET:
        
            return {
             ...state,            
             loading:false,                   
             operation:false
           }                             

        default:
        return state


    }


}

export default supplierReducer