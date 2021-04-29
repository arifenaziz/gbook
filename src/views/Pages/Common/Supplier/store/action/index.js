import API from "../../../../../../auth/connection/api/API"


export const SUPPLIER_FETACHING_START='SUPPLIER_FETACHING_START'
export const SUPPLIER_FETACHING_SUCCESS='SUPPLIER_FETACHING_SUCCESS'
export const SUPPLIER_UPDATE_SUCCESS='SUPPLIER_UPDATE_SUCCESS'
export const SUPPLIER_UPDATE_RESET='SUPPLIER_UPDATE_RESET'
export const SUPPLIER_FETACHING_FAIL='SUPPLIER_FETACHING_FAIL'
export const SELECT_SINGLE_SUPPLIER='SELECT_SINGLE_SUPPLIER'


export const supplierFetchingStart=()=>{
	return {
		type:SUPPLIER_FETACHING_START    		  		
	}
}

export const supplierFetchingSuccess=(dataValue, recordsTotal, params)=>{
	return {
		type:SUPPLIER_FETACHING_SUCCESS,
		allData:dataValue,
        data: dataValue,
        totalPages: recordsTotal,
        params        
			   		   	
	}
}

export const supplierFetchingFail=(error)=>{
	return {
		type:SUPPLIER_FETACHING_FAIL,
		error:error    		   		
	}
}


export const getProcess=(params)=>{

	console.log(params)
	
	return async dispatch => {
		dispatch(supplierFetchingStart())

		await API.post('supplier', params)
		.then(response=>{		
			console.log(response.data.data.data)
			dispatch(supplierFetchingSuccess(response.data.data.data, response.data.data.recordsTotal, params))
		})
		.catch(err=>{
			console.log(err)
			dispatch(supplierFetchingFail(err))
		})


	}

}

export const selectSupplier=(supplier)=>{
	return {
		type:SELECT_SINGLE_SUPPLIER,
		supplier   		   		
	}
}

export const supplierUpdateSuccess=()=>{
	return {
		type:SUPPLIER_UPDATE_SUCCESS             			   		   	
	}
}


export const getUpdate=(supplier, main_id)=>{

	const formData = {
		...supplier,
		main_id	
	}

	console.log('FORMDATA', supplier)

	return async (dispatch, getState) => {
		dispatch(supplierFetchingStart())

		await API.patch('supplierProcess', formData)
		.then(response=>{					
			dispatch(supplierUpdateSuccess())			
		})
		.catch(err=>{
			console.log(err)
			dispatch(supplierFetchingFail(err))
		})		

	}

}


export const getInsert=(supplier)=>{

	const formData = {
		...supplier		
	}

	return async (dispatch, getState) => {
		dispatch(supplierFetchingStart())

		await API.post('supplierProcess', formData)
		.then(response=>{					
			dispatch(supplierUpdateSuccess())			
						
		})
		.catch(err=>{
			console.log(err)
			dispatch(supplierFetchingFail(err))
		})		

	}

}


export const getDelete=(id)=>{

	const formData = {
		id		
	}

	console.log('FORMDATA', formData)

	return async (dispatch, getState) => {
		dispatch(supplierFetchingStart())

		await API.put('supplierProcess', formData)
		.then(response=>{					
			dispatch(supplierUpdateSuccess())
			dispatch(getProcess(getState().supplier.params))
		})
		.catch(err=>{
			console.log(err)
			dispatch(supplierFetchingFail(err))
		})		

	}

}