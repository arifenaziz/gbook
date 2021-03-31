import API from "../../../../../../auth/connection/api/API"


export const BRAND_FETACHING_START='BRAND_FETACHING_START'
export const BRAND_FETACHING_SUCCESS='BRAND_FETACHING_SUCCESS'
export const BRAND_UPDATE_SUCCESS='BRAND_UPDATE_SUCCESS'
export const BRAND_FETACHING_FAIL='BRAND_FETACHING_FAIL'
export const SELECT_SINGLE_BRAND='SELECT_SINGLE_BRAND'


export const brandFetchingStart=()=>{
	return {
		type:BRAND_FETACHING_START    		  		
	}
}

export const brandFetchingSuccess=(dataValue, recordsTotal, params)=>{
	return {
		type:BRAND_FETACHING_SUCCESS,
		allData:dataValue,
        data: dataValue,
        totalPages: recordsTotal,
        params        
			   		   	
	}
}

export const brandFetchingFail=(error)=>{
	return {
		type:BRAND_FETACHING_FAIL,
		error:error    		   		
	}
}


export const getProcess=(params)=>{

	console.log(params)
	
	return async dispatch => {
		dispatch(brandFetchingStart())

		await API.post('brand', params)
		.then(response=>{		
			console.log(response.data.data.data)
			dispatch(brandFetchingSuccess(response.data.data.data, response.data.data.recordsTotal, params))
		})
		.catch(err=>{
			console.log(err)
			dispatch(brandFetchingFail(err))
		})


	}

}

export const selectBrand=(brand)=>{
	return {
		type:SELECT_SINGLE_BRAND,
		brand   		   		
	}
}

export const brandUpdateSuccess=()=>{
	return {
		type:BRAND_UPDATE_SUCCESS             			   		   	
	}
}


export const getUpdate=(brand, id)=>{

	const formData = {
		...brand,
		id
	}

	console.log('FORMDATA', formData)

	return async (dispatch, getState) => {
		dispatch(brandFetchingStart())

		await API.patch('brandProcess', formData)
		.then(response=>{					
			dispatch(brandUpdateSuccess())
			dispatch(getProcess(getState().brand.params))
		})
		.catch(err=>{
			console.log(err)
			dispatch(brandFetchingFail(err))
		})		

	}

}


export const getInsert=(brand)=>{

	const formData = {
		...brand		
	}

	console.log('FORMDATA', formData)

	return async (dispatch, getState) => {
		dispatch(brandFetchingStart())

		await API.post('brandProcess', formData)
		.then(response=>{					
			dispatch(brandUpdateSuccess())
			dispatch(getProcess(getState().brand.params))
		})
		.catch(err=>{
			console.log(err)
			dispatch(brandFetchingFail(err))
		})		

	}

}


export const getDelete=(id)=>{

	const formData = {
		id		
	}

	console.log('FORMDATA', formData)

	return async (dispatch, getState) => {
		dispatch(brandFetchingStart())

		await API.put('brandProcess', formData)
		.then(response=>{					
			dispatch(brandUpdateSuccess())
			dispatch(getProcess(getState().brand.params))
		})
		.catch(err=>{
			console.log(err)
			dispatch(brandFetchingFail(err))
		})		

	}

}