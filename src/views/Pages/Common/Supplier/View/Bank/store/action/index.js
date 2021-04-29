import API from "../../../../../../../../auth/connection/api/API"

export const SUPPLIER_BANK_FETACHING_START='SUPPLIER_BANK_FETACHING_START'
export const SUPPLIER_BANK_FETACHING_SUCCESS='SUPPLIER_BANK_FETACHING_SUCCESS'
export const SUPPLIER_BANK_FETACHING_FAIL='SUPPLIER_BANK_FETACHING_FAIL'
export const SUPPLIER_BANK_UPDATE_SUCCESS='SUPPLIER_BANK_UPDATE_SUCCESS'

export const supplierBankFetchingStart=()=>{
	return {
		type:SUPPLIER_BANK_FETACHING_START    		  		
	}
}

export const supplierBankFetchingSuccess=(dataValue)=>{
	return {
		type:SUPPLIER_BANK_FETACHING_SUCCESS,
		data:dataValue      			   		   	
	}
}

export const supplierBankFetchingFail=(error)=>{
	return {
		type:SUPPLIER_BANK_FETACHING_FAIL,
		error:error    		   		
	}
}

export const supplierBankUpdateSuccess=()=>{
	return {
		type:SUPPLIER_BANK_UPDATE_SUCCESS             			   		   	
	}
}


export const getProcess=(main_id)=>{

	const formData = {
		main_id	
	}
	
	return async dispatch => {
		dispatch(supplierBankFetchingStart())

		await API.post('supplier/bank', formData)
		.then(response=>{		
			dispatch(supplierBankFetchingSuccess(response.data.data))			
			//dispatch({type: 'SUPPLIER_UPDATE_RESET'})
		})
		.catch(err=>{
			console.log(err)
			dispatch(supplierBankFetchingFail(err))
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
		dispatch(supplierBankFetchingStart())

		await API.patch('supplier/bank', formData)
		.then(response=>{					
			dispatch(supplierBankUpdateSuccess())
			dispatch(getProcess(main_id))
		})
		.catch(err=>{
			console.log(err)
			dispatch(supplierBankFetchingFail(err))
		})		

	}

}

export const getDelete=(id)=>{

	const formData = {
		id		
	}

	console.log('FORMDATA', formData)

	return async (dispatch) => {
		dispatch(supplierBankFetchingStart())

		await API.put('supplier/bank', formData)
		.then(response=>{					
			dispatch(supplierBankUpdateSuccess())
			//dispatch(getProcess(getState().category.params))
		})
		.catch(err=>{
			console.log(err)
			dispatch(supplierBankFetchingFail(err))
		})		

	}

}