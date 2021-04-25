import API from "../../../../../../../../auth/connection/api/API"

export const CUSTOMER_CONTACT_FETACHING_START='CUSTOMER_CONTACT_FETACHING_START'
export const CUSTOMER_CONTACT_FETACHING_SUCCESS='CUSTOMER_CONTACT_FETACHING_SUCCESS'
export const CUSTOMER_CONTACT_FETACHING_FAIL='CUSTOMER_CONTACT_FETACHING_FAIL'
export const CUSTOMER_CONTACT_UPDATE_SUCCESS='CUSTOMER_CONTACT_UPDATE_SUCCESS'

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

export const customerContactUpdateSuccess=()=>{
	return {
		type:CUSTOMER_CONTACT_UPDATE_SUCCESS             			   		   	
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

export const getUpdate=(contact, main_id)=>{

	const formData = {
		...contact,
		main_id
	}

	console.log('FORMDATA', formData)

	return async (dispatch, getState) => {
		dispatch(customerContactFetchingStart())

		await API.patch('customer/contact', formData)
		.then(response=>{					
			dispatch(customerContactUpdateSuccess())
			dispatch(getProcess(main_id))
		})
		.catch(err=>{
			console.log(err)
			dispatch(customerContactFetchingFail(err))
		})		

	}

}

export const getDelete=(id)=>{

	const formData = {
		id		
	}

	console.log('FORMDATA', formData)

	return async (dispatch) => {
		dispatch(customerContactFetchingStart())

		await API.put('customer/contact', formData)
		.then(response=>{					
			dispatch(customerContactUpdateSuccess())
			//dispatch(getProcess(getState().category.params))
		})
		.catch(err=>{
			console.log(err)
			dispatch(customerContactFetchingFail(err))
		})		

	}

}