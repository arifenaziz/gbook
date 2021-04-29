import * as actionType from '../action'

const initialState={    
    data: null,
    error:false,
    loading:false,
    success:false    
}


const supplierOverviewReducer = (state = initialState, action) =>{

    switch (action.type) {

        case actionType.SUPPLIER_OVERVIEW_FETACHING_START:

        return {
            ...state,            
            error:null,
            loading:true
        }
  

        case actionType.SUPPLIER_OVERVIEW_FETACHING_SUCCESS:

        return {
            ...state,            
            data: action.data,                                           
            error:null,
            loading:false,
            success:true
        }

        case actionType.SUPPLIER_OVERVIEW_FETACHING_FAIL:

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

export default supplierOverviewReducer