import API from '../../../auth/connection/api/API'


// ** Handle User Login

export const AUTH_SIGNIN_START = 'AUTH_SIGNIN_START'
export const AUTH_SIGNIN_RELOAD = 'AUTH_SIGNIN_RELOAD'
export const AUTH_SIGNIN_SUCCESS = 'AUTH_SIGNIN_SUCCESS'
export const AUTH_SIGNIN_FAIL = 'AUTH_SIGNIN_FAIL'
export const AUTH_SIGNIN_LOGOUT = 'AUTH_SIGNIN_LOGOUT'


export const authSigninStart = () => {
	return {
		type:AUTH_SIGNIN_START   		  		
	}
}

export const authReload = () => {
	return {
		type:AUTH_SIGNIN_RELOAD    		  		
	}
}

export const authSigninSuccess = (token) => {
	return {
		type:AUTH_SIGNIN_SUCCESS,
		token		   		   		
	}
}

export const authSigninFail = (error) => {
	return {
		type:AUTH_SIGNIN_FAIL,
		error    		   		
	}
}

export const authSigninLogout = () => {
	localStorage.removeItem('token')
	return {
		type:AUTH_SIGNIN_LOGOUT		   		
	}
}

export const auth = (mData) => {
	
	return dispatch => {
		dispatch(authSigninStart())

	    localStorage.setItem('userData', JSON.stringify(mData))			
		dispatch(authSigninSuccess( mData))

		// const authData={
		// 	mData
		// }
		
		//console.log('POST_DATA', mData)

		// API.post(`signin`, mData)
		// .then(response => {
		// 	//console.log(response)
		// 	//console.log(response.data.data.token)
		// 	//console.log(response.data.data.name)
		// 	localStorage.setItem('userData', JSON.stringify(response.data.data))			
		// 	dispatch(authSigninSuccess( response.data.data))
		// })
		// .catch(err=>{
		// 	console.log(err)
		// 	dispatch(authSigninFail(err))
		// })

	}

}


export const authError = (mError) => {
	
	return dispatch => {
		dispatch(authSigninFail(mError))	    
	}

}

// export const handleLogin = data => {
//   return dispatch => {
//     dispatch({ type: 'LOGIN', data })

//     // ** Add to user to localStorage
//     localStorage.setItem('userData', JSON.stringify(data))
//   }
// }

// ** Handle User Logout
export const handleLogout = () => {
  return dispatch => {
    dispatch({ type: 'LOGOUT' })

    // ** Remove user from localStorage
    localStorage.removeItem('userData')
  }
}
