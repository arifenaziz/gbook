import API from "../../../../../../auth/connection/api/API"


export const CUSTOMER_FETACHING_START='CUSTOMER_FETACHING_START'
export const CUSTOMER_FETACHING_SUCCESS='CUSTOMER_FETACHING_SUCCESS'
export const CUSTOMER_UPDATE_SUCCESS='CUSTOMER_UPDATE_SUCCESS'
export const CUSTOMER_UPDATE_RESET='CUSTOMER_UPDATE_RESET'
export const CUSTOMER_FETACHING_FAIL='CUSTOMER_FETACHING_FAIL'
export const SELECT_SINGLE_CUSTOMER='SELECT_SINGLE_CUSTOMER'


export const customerFetchingStart=()=>{
	return {
		type:CUSTOMER_FETACHING_START    		  		
	}
}

export const customerFetchingSuccess=(dataValue, recordsTotal, params)=>{
	return {
		type:CUSTOMER_FETACHING_SUCCESS,
		allData:dataValue,
        data: dataValue,
        totalPages: recordsTotal,
        params        
			   		   	
	}
}

export const customerFetchingFail=(error)=>{
	return {
		type:CUSTOMER_FETACHING_FAIL,
		error:error    		   		
	}
}


export const getProcess=(params)=>{

	console.log(params)
	
	return async dispatch => {
		dispatch(customerFetchingStart())

		await API.post('customer', params)
		.then(response=>{		
			console.log(response.data.data.data)
			dispatch(customerFetchingSuccess(response.data.data.data, response.data.data.recordsTotal, params))
		})
		.catch(err=>{
			console.log(err)
			dispatch(customerFetchingFail(err))
		})


	}

}

export const selectCustomer=(customer)=>{
	return {
		type:SELECT_SINGLE_CUSTOMER,
		customer   		   		
	}
}

export const customerUpdateSuccess=()=>{
	return {
		type:CUSTOMER_UPDATE_SUCCESS             			   		   	
	}
}


export const getUpdate=(customer, main_id)=>{

	const formData = {
		...customer,
		main_id	
	}

	console.log('FORMDATA', customer)

	return async (dispatch, getState) => {
		dispatch(customerFetchingStart())

		await API.patch('customerProcess', formData)
		.then(response=>{					
			dispatch(customerUpdateSuccess())			
		})
		.catch(err=>{
			console.log(err)
			dispatch(customerFetchingFail(err))
		})		

	}

}


export const getInsert=(customer)=>{

	const formData = {
		...customer		
	}

	return async (dispatch, getState) => {
		dispatch(customerFetchingStart())

		await API.post('customerProcess', formData)
		.then(response=>{					
			dispatch(customerUpdateSuccess())			
		})
		.catch(err=>{
			console.log(err)
			dispatch(customerFetchingFail(err))
		})		

	}

}


export const getDelete=(id)=>{

	const formData = {
		id		
	}

	console.log('FORMDATA', formData)

	return async (dispatch, getState) => {
		dispatch(customerFetchingStart())

		await API.put('customerProcess', formData)
		.then(response=>{					
			dispatch(customerUpdateSuccess())
			dispatch(getProcess(getState().customer.params))
		})
		.catch(err=>{
			console.log(err)
			dispatch(customerFetchingFail(err))
		})		

	}

}