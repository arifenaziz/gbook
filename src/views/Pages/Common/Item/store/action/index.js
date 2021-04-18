import API from "../../../../../../auth/connection/api/API"


export const ITEM_FETACHING_START='ITEM_FETACHING_START'
export const ITEM_FETACHING_SUCCESS='ITEM_FETACHING_SUCCESS'
export const ITEM_UPDATE_SUCCESS='ITEM_UPDATE_SUCCESS'
export const ITEM_FETACHING_FAIL='ITEM_FETACHING_FAIL'
export const SELECT_SINGLE_ITEM='SELECT_SINGLE_ITEM'


export const itemFetchingStart=()=>{
	return {
		type:ITEM_FETACHING_START    		  		
	}
}

export const itemFetchingSuccess=(dataValue, recordsTotal, params)=>{
	return {
		type:ITEM_FETACHING_SUCCESS,
		allData:dataValue,
        data: dataValue,
        totalPages: recordsTotal,
        params        
			   		   	
	}
}

export const itemFetchingFail=(error)=>{
	return {
		type:ITEM_FETACHING_FAIL,
		error:error    		   		
	}
}


export const getProcess=(params)=>{

	console.log(params)
	
	return async dispatch => {
		dispatch(itemFetchingStart())

		await API.post('item', params)
		.then(response=>{		
			console.log(response.data.data.data)
			dispatch(itemFetchingSuccess(response.data.data.data, response.data.data.recordsTotal, params))
		})
		.catch(err=>{
			console.log(err)
			dispatch(itemFetchingFail(err))
		})


	}

}

export const selectItem=(item)=>{
	return {
		type:SELECT_SINGLE_ITEM,
		item   		   		
	}
}

export const itemUpdateSuccess=()=>{
	return {
		type:ITEM_UPDATE_SUCCESS             			   		   	
	}
}


export const getUpdate=(item)=>{

	const formData = {
		...item	
	}

	console.log('FORMDATA', item)

	return async (dispatch, getState) => {
		dispatch(itemFetchingStart())

		await API.post('ItemUpdateProcessCtrl', item, {
			headers: {
                'content-type': 'multipart/form-data'
            }
		})
		.then(response=>{					
			dispatch(itemUpdateSuccess())
			dispatch(getProcess(getState().item.params))
		})
		.catch(err=>{
			console.log(err)
			dispatch(itemFetchingFail(err))
		})		

	}

}


export const getInsert=(item)=>{

	// const formData = {
	// 	...item		
	// }

	console.log('FORMDATA', item)

	return async (dispatch, getState) => {
		dispatch(itemFetchingStart())

		await API.post('itemProcess', item, {
			headers: {
                'content-type': 'multipart/form-data'
            }
		})
		.then(response=>{					
			dispatch(itemUpdateSuccess())
			dispatch(getProcess(getState().item.params))
		})
		.catch(err=>{
			console.log(err)
			dispatch(itemFetchingFail(err))
		})		

	}

}


export const getDelete=(id)=>{

	const formData = {
		id		
	}

	console.log('FORMDATA', formData)

	return async (dispatch, getState) => {
		dispatch(itemFetchingStart())

		await API.put('itemProcess', formData)
		.then(response=>{					
			dispatch(itemUpdateSuccess())
			dispatch(getProcess(getState().item.params))
		})
		.catch(err=>{
			console.log(err)
			dispatch(itemFetchingFail(err))
		})		

	}

}