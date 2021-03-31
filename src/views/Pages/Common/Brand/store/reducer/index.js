import * as actionType from '../action'

const initialState={    
    data: [],
    total: 1,
    params: {},
    allData: [],
    selectedBrand: {},
    error:false,
    loading:false,
    success:false        
}


const brandReducer = (state = initialState, action) =>{

    switch (action.type) {

        case actionType.BRAND_FETACHING_START:

        return {
            ...state,            
            error:null,
            loading:true
        }
  

        case actionType.BRAND_FETACHING_SUCCESS:

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

        case actionType.BRAND_FETACHING_FAIL:

            return {
                ...state,            
                error:action.error,
                loading:false,
                success:false                             
         }    
         case actionType.SELECT_SINGLE_BRAND:

            return {
                ...state,            
                selectedBrand:action.brand                          
         }      
         case actionType.BRAND_UPDATE_SUCCESS:
        
            return {
             ...state,            
             loading:false                      
           }                    

        default:
        return state


    }


}

export default brandReducer