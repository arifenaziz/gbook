import API from "../../../../../../../../auth/connection/api/API"

export const SUPPLIER_OVERVIEW_FETACHING_START='SUPPLIER_OVERVIEW_FETACHING_START'
export const SUPPLIER_OVERVIEW_FETACHING_SUCCESS='SUPPLIER_OVERVIEW_FETACHING_SUCCESS'
export const SUPPLIER_OVERVIEW_FETACHING_FAIL='SUPPLIER_OVERVIEW_FETACHING_FAIL'

export const overviewFetchingStart=()=>{
	return {
		type:SUPPLIER_OVERVIEW_FETACHING_START    		  		
	}
}

export const overviewFetchingSuccess=(dataValue)=>{
	return {
		type:SUPPLIER_OVERVIEW_FETACHING_SUCCESS,
		data:dataValue      			   		   	
	}
}

export const overviewFetchingFail=(error)=>{
	return {
		type:SUPPLIER_OVERVIEW_FETACHING_FAIL,
		error:error    		   		
	}
}


export const getProcess=(main_id)=>{

	const formData = {
		main_id	
	}
	
	return async dispatch => {
		dispatch(overviewFetchingStart())

		await API.post('supplier/overview', formData)
		.then(response=>{		
			dispatch(overviewFetchingSuccess(response.data.data))			
			dispatch({type: 'SUPPLIER_UPDATE_RESET'})
		})
		.catch(err=>{
			console.log(err)
			dispatch(overviewFetchingFail(err))
		})


	}

}
