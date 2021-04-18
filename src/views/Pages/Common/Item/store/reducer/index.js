import * as actionType from '../action'

const initialState={    
    data: [],
    total: 1,
    params: {},
    allData: [],
    selectedItem: {},
    error:false,
    loading:false,
    success:false        
}


const itemReducer = (state = initialState, action) =>{

    switch (action.type) {

        case actionType.ITEM_FETACHING_START:

        return {
            ...state,            
            error:null,
            loading:true
        }
  

        case actionType.ITEM_FETACHING_SUCCESS:

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

        case actionType.ITEM_FETACHING_FAIL:

            return {
                ...state,            
                error:action.error,
                loading:false,
                success:false                             
         }    
         case actionType.SELECT_SINGLE_ITEM:

            return {
                ...state,            
                selectedItem:action.item                          
         }      
         case actionType.ITEM_UPDATE_SUCCESS:
        
            return {
             ...state,            
             loading:false                      
           }                    

        default:
        return state


    }


}

export default itemReducer