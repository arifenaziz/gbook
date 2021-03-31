import API from "../../../../../../auth/connection/api/API"


export const CATEGORY_FETACHING_START='CATEGORY_FETACHING_START'
export const CATEGORY_FETACHING_SUCCESS='CATEGORY_FETACHING_SUCCESS'
export const CATEGORY_UPDATE_SUCCESS='CATEGORY_UPDATE_SUCCESS'
export const CATEGORY_FETACHING_FAIL='CATEGORY_FETACHING_FAIL'
export const SELECT_SINGLE_CATEGORY='SELECT_SINGLE_CATEGORY'


export const categoryFetchingStart=()=>{
	return {
		type:CATEGORY_FETACHING_START    		  		
	}
}

export const categoryFetchingSuccess=(dataValue, recordsTotal, params)=>{
	return {
		type:CATEGORY_FETACHING_SUCCESS,
		allData:dataValue,
        data: dataValue,
        totalPages: recordsTotal,
        params        
			   		   	
	}
}

export const categoryFetchingFail=(error)=>{
	return {
		type:CATEGORY_FETACHING_FAIL,
		error:error    		   		
	}
}


export const getProcess=(params)=>{

	console.log(params)
	
	return async dispatch => {
		dispatch(categoryFetchingStart())

		await API.post('category', params)
		.then(response=>{		
			console.log(response.data.data.data)
			dispatch(categoryFetchingSuccess(response.data.data.data, response.data.data.recordsTotal, params))
		})
		.catch(err=>{
			console.log(err)
			dispatch(categoryFetchingFail(err))
		})


	}

}

export const selectCategory=(category)=>{
	return {
		type:SELECT_SINGLE_CATEGORY,
		category   		   		
	}
}

export const categoryUpdateSuccess=()=>{
	return {
		type:CATEGORY_UPDATE_SUCCESS             			   		   	
	}
}


export const getUpdate=(category, id)=>{

	const formData = {
		...category,
		id
	}

	console.log('FORMDATA', formData)

	return async (dispatch, getState) => {
		dispatch(categoryFetchingStart())

		await API.patch('categoryProcess', formData)
		.then(response=>{					
			dispatch(categoryUpdateSuccess())
			dispatch(getProcess(getState().category.params))
		})
		.catch(err=>{
			console.log(err)
			dispatch(categoryFetchingFail(err))
		})		

	}

}


export const getInsert=(category)=>{

	const formData = {
		...category		
	}

	console.log('FORMDATA', formData)

	return async (dispatch, getState) => {
		dispatch(categoryFetchingStart())

		await API.post('categoryProcess', formData)
		.then(response=>{					
			dispatch(categoryUpdateSuccess())
			dispatch(getProcess(getState().category.params))
		})
		.catch(err=>{
			console.log(err)
			dispatch(categoryFetchingFail(err))
		})		

	}

}


export const getDelete=(id)=>{

	const formData = {
		id		
	}

	console.log('FORMDATA', formData)

	return async (dispatch, getState) => {
		dispatch(categoryFetchingStart())

		await API.put('categoryProcess', formData)
		.then(response=>{					
			dispatch(categoryUpdateSuccess())
			dispatch(getProcess(getState().category.params))
		})
		.catch(err=>{
			console.log(err)
			dispatch(categoryFetchingFail(err))
		})		

	}

}