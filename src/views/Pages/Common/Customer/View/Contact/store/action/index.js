import API from "../../../../../../../../auth/connection/api/API"

export const CUSTOMER_CONTACT_FETACHING_START='CUSTOMER_CONTACT_FETACHING_START'
export const CUSTOMER_CONTACT_FETACHING_SUCCESS='CUSTOMER_CONTACT_FETACHING_SUCCESS'
export const CUSTOMER_CONTACT_FETACHING_FAIL='CUSTOMER_CONTACT_FETACHING_FAIL'

export const customerContactFetchingStart=()=>{
	return {
		type:CUSTOMER_CONTACT_FETACHING_START    		  		
	}
}

export const customerContactFetchingSuccess=(dataValue)=>{
	return {
		type:CUSTOMER_CONTACT_FETACHING_SUCCESS,
		data:dataValue      			   		   	
	}
}

export const customerContactFetchingFail=(error)=>{
	return {
		type:CUSTOMER_CONTACT_FETACHING_FAIL,
		error:error    		   		
	}
}


export const getProcess=(main_id)=>{

	const formData = {
		main_id	
	}
	
	return async dispatch => {
		dispatch(customerContactFetchingStart())

		await API.post('customer/contact', formData)
		.then(response=>{		
			dispatch(customerContactFetchingSuccess(response.data.data))			
			//dispatch({type: 'CUSTOMER_UPDATE_RESET'})
		})
		.catch(err=>{
			console.log(err)
			dispatch(customerContactFetchingFail(err))
		})


	}

}
