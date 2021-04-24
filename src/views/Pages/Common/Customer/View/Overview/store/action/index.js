import API from "../../../../../../../../auth/connection/api/API"

export const OVERVIEW_FETACHING_START='OVERVIEW_FETACHING_START'
export const OVERVIEW_FETACHING_SUCCESS='OVERVIEW_FETACHING_SUCCESS'
export const OVERVIEW_FETACHING_FAIL='OVERVIEW_FETACHING_FAIL'

export const overviewFetchingStart=()=>{
	return {
		type:OVERVIEW_FETACHING_START    		  		
	}
}

export const overviewFetchingSuccess=(dataValue)=>{
	return {
		type:OVERVIEW_FETACHING_SUCCESS,
		data:dataValue      			   		   	
	}
}

export const overviewFetchingFail=(error)=>{
	return {
		type:OVERVIEW_FETACHING_FAIL,
		error:error    		   		
	}
}


export const getProcess=(main_id)=>{

	const formData = {
		main_id	
	}
	
	return async dispatch => {
		dispatch(overviewFetchingStart())

		await API.post('customer/overview', formData)
		.then(response=>{		
			dispatch(overviewFetchingSuccess(response.data.data))			
			dispatch({type: 'CUSTOMER_UPDATE_RESET'})
		})
		.catch(err=>{
			console.log(err)
			dispatch(overviewFetchingFail(err))
		})


	}

}
