import API from "../../../../../../auth/connection/api/API"


export const UNIT_FETACHING_START='UNIT_FETACHING_START'
export const UNIT_FETACHING_SUCCESS='UNIT_FETACHING_SUCCESS'
export const UNIT_UPDATE_SUCCESS='UNIT_UPDATE_SUCCESS'
export const UNIT_FETACHING_FAIL='UNIT_FETACHING_FAIL'
export const SELECT_SINGLE_UNIT='SELECT_SINGLE_UNIT'


export const unitFetchingStart=()=>{
	return {
		type:UNIT_FETACHING_START    		  		
	}
}

export const unitFetchingSuccess=(dataValue, recordsTotal, params)=>{
	return {
		type:UNIT_FETACHING_SUCCESS,
		allData:dataValue,
        data: dataValue,
        totalPages: recordsTotal,
        params        
			   		   	
	}
}

export const unitFetchingFail=(error)=>{
	return {
		type:UNIT_FETACHING_FAIL,
		error:error    		   		
	}
}


export const getProcess=(params)=>{

	console.log(params)
	
	return async dispatch => {
		dispatch(unitFetchingStart())

		await API.post('unit', params)
		.then(response=>{		
			console.log(response.data.data.data)
			dispatch(unitFetchingSuccess(response.data.data.data, response.data.data.recordsTotal, params))
		})
		.catch(err=>{
			console.log(err)
			dispatch(unitFetchingFail(err))
		})


	}

}

export const selectUnit=(unit)=>{
	return {
		type:SELECT_SINGLE_UNIT,
		unit   		   		
	}
}

export const unitUpdateSuccess=()=>{
	return {
		type:UNIT_UPDATE_SUCCESS             			   		   	
	}
}


export const getUpdate=(unit, id)=>{

	const formData = {
		...unit,
		id
	}

	console.log('FORMDATA', formData)

	return async (dispatch, getState) => {
		dispatch(unitFetchingStart())

		await API.patch('unitProcess', formData)
		.then(response=>{					
			dispatch(unitUpdateSuccess())
			dispatch(getProcess(getState().unit.params))
		})
		.catch(err=>{
			console.log(err)
			dispatch(unitFetchingFail(err))
		})		

	}

}


export const getInsert=(unit)=>{

	const formData = {
		...unit		
	}

	console.log('FORMDATA', formData)

	return async (dispatch, getState) => {
		dispatch(unitFetchingStart())

		await API.post('unitProcess', formData)
		.then(response=>{					
			dispatch(unitUpdateSuccess())
			dispatch(getProcess(getState().unit.params))
		})
		.catch(err=>{
			console.log(err)
			dispatch(unitFetchingFail(err))
		})		

	}

}


export const getDelete=(id)=>{

	const formData = {
		id		
	}

	console.log('FORMDATA', formData)

	return async (dispatch, getState) => {
		dispatch(unitFetchingStart())

		await API.put('unitProcess', formData)
		.then(response=>{					
			dispatch(unitUpdateSuccess())
			dispatch(getProcess(getState().unit.params))
		})
		.catch(err=>{
			console.log(err)
			dispatch(unitFetchingFail(err))
		})		

	}

}