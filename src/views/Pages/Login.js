import { useSkin } from '@hooks/useSkin'
import { Link, Redirect, useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { toast, Slide } from 'react-toastify'
import InputPasswordToggle from '@components/input-password-toggle'
import { Row, Col, CardTitle, CardText, Form, FormGroup, Label, Input, CustomInput, Button } from 'reactstrap'
import { AvForm, AvInput, AvGroup, AvFeedback } from 'availity-reactstrap-validation-safe'
import '@styles/base/pages/page-auth.scss'
import { useContext, useState } from 'react'
import { Check, X } from 'react-feather'
import Avatar from '@components/avatar'
import { getHomeRouteForLoggedInUser } from '@utils'
import { AbilityContext } from '@src/utility/context/Can'
import { auth, authError } from '@store/actions/auth'
import API from '../../auth/connection/api/API'

const Login = () => {
  const [skin, setSkin] = useSkin()
  const ability = useContext(AbilityContext)
  const dispatch = useDispatch()
  const history = useHistory()

  const [email, setEmail] = useState('admin@gmail.com')
  const [password, setPassword] = useState('admin123')


  const ToastContent = ({ title, body, color, icon }) => (
    <>
      <div className='toastify-header'>
        <div className='title-wrapper'>
          <Avatar size='sm' color={color} icon={icon} />
          <h6 className='toast-title font-weight-bold'>{title}</h6>
        </div>
      </div>
      <div className='toastify-body'>
        <span>{body}</span>
      </div>
    </>
  )


  const handleSubmit = (event, errors) => {
    if (errors && !errors.length) {

      const formData = {
        email:email,
        password:password
      }


    API.post(`signin`, formData)
		.then(response => {
			//console.log(response)
			//console.log(response.data.data.token)
			console.log(response.data.data.role)
      dispatch(auth(response.data.data))			  
      ability.update(response.data.data.ability)
      history.push(getHomeRouteForLoggedInUser(response.data.data.role))
      toast.success(
        <ToastContent title={`Welcome ${response.data.data.name}`} body={`You have successfully logged in as a ${response.data.data.role}`} color="success" icon={<Check size={12}/>} />,
        { transition: Slide, hideProgressBar: true, autoClose: 2000 }
      )
			
		})		
    .catch(err => {
      dispatch(authError(err))
      toast.success(
        <ToastContent title="Error" body="Email and Password are missmatch" color="danger" icon={<X size={12}/>} />,
        { transition: Slide, hideProgressBar: true, autoClose: 2000 }
      ) 
    })


      // useJwt
      //   .login({ email, password })
      //   .then(res => {
      //     const data = { ...res.data.userData, accessToken: res.data.accessToken, refreshToken: res.data.refreshToken }
      //     console.log('DATA_FOUND', data)
      //     dispatch(handleLogin(data))
      //     ability.update(res.data.userData.ability)
      //     history.push(getHomeRouteForLoggedInUser(data.role))
      //     toast.success(
      //       <ToastContent name={data.fullName || data.username || 'John Doe'} role={data.role || 'admin'} />,
      //       { transition: Slide, hideProgressBar: true, autoClose: 2000 }
      //     )
      //   })
        //.catch(err => console.log(err))
        

      console.log('Email', formData)

    }
  }

  const illustration = skin === 'dark' ? 'login-v2-dark.svg' : 'login-v2.svg',
    source = require(`@src/assets/images/pages/${illustration}`).default

  return (
    <div className='auth-wrapper auth-v2'>
      <Row className='auth-inner m-0'>
        <Link className='brand-logo' to='/'>
          <svg viewBox='0 0 139 95' version='1.1' height='28'>
            <defs>
              <linearGradient x1='100%' y1='10.5120544%' x2='50%' y2='89.4879456%' id='linearGradient-1'>
                <stop stopColor='#000000' offset='0%'></stop>
                <stop stopColor='#FFFFFF' offset='100%'></stop>
              </linearGradient>
              <linearGradient x1='64.0437835%' y1='46.3276743%' x2='37.373316%' y2='100%' id='linearGradient-2'>
                <stop stopColor='#EEEEEE' stopOpacity='0' offset='0%'></stop>
                <stop stopColor='#FFFFFF' offset='100%'></stop>
              </linearGradient>
            </defs>
            <g id='Page-1' stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
              <g id='Artboard' transform='translate(-400.000000, -178.000000)'>
                <g id='Group' transform='translate(400.000000, 178.000000)'>
                  <path
                    d='M-5.68434189e-14,2.84217094e-14 L39.1816085,2.84217094e-14 L69.3453773,32.2519224 L101.428699,2.84217094e-14 L138.784583,2.84217094e-14 L138.784199,29.8015838 C137.958931,37.3510206 135.784352,42.5567762 132.260463,45.4188507 C128.736573,48.2809251 112.33867,64.5239941 83.0667527,94.1480575 L56.2750821,94.1480575 L6.71554594,44.4188507 C2.46876683,39.9813776 0.345377275,35.1089553 0.345377275,29.8015838 C0.345377275,24.4942122 0.230251516,14.560351 -5.68434189e-14,2.84217094e-14 Z'
                    id='Path'
                    className='text-primary'
                    style={{ fill: 'currentColor' }}
                  ></path>
                  <path
                    d='M69.3453773,32.2519224 L101.428699,1.42108547e-14 L138.784583,1.42108547e-14 L138.784199,29.8015838 C137.958931,37.3510206 135.784352,42.5567762 132.260463,45.4188507 C128.736573,48.2809251 112.33867,64.5239941 83.0667527,94.1480575 L56.2750821,94.1480575 L32.8435758,70.5039241 L69.3453773,32.2519224 Z'
                    id='Path'
                    fill='url(#linearGradient-1)'
                    opacity='0.2'
                  ></path>
                  <polygon
                    id='Path-2'
                    fill='#000000'
                    opacity='0.049999997'
                    points='69.3922914 32.4202615 32.8435758 70.5039241 54.0490008 16.1851325'
                  ></polygon>
                  <polygon
                    id='Path-2'
                    fill='#000000'
                    opacity='0.099999994'
                    points='69.3922914 32.4202615 32.8435758 70.5039241 58.3683556 20.7402338'
                  ></polygon>
                  <polygon
                    id='Path-3'
                    fill='url(#linearGradient-2)'
                    opacity='0.099999994'
                    points='101.428699 0 83.0667527 94.1480575 130.378721 47.0740288'
                  ></polygon>
                </g>
              </g>
            </g>
          </svg>
          <h2 className='brand-text text-primary ml-1'>Gbook</h2>
        </Link>
        <Col className='d-none d-lg-flex align-items-center p-5' lg='8' sm='12'>
          <div className='w-100 d-lg-flex align-items-center justify-content-center px-5'>
            <img className='img-fluid' src={source} alt='Login V2' />
          </div>
        </Col>
        <Col className='d-flex align-items-center auth-bg px-2 p-lg-5' lg='4' sm='12'>
          <Col className='px-xl-2 mx-auto' sm='8' md='6' lg='12'>
            <CardTitle tag='h2' className='font-weight-bold mb-1'>
              Welcome to Gbook
            </CardTitle>
            <CardText className='mb-2'>Please sign-in to your account and start the adventure</CardText>
            <AvForm className='auth-login-form mt-2' onSubmit={handleSubmit}>
              <AvGroup>
                <Label className='form-label' for='login-email'>
                  Email
                </Label>
                  {/* <Input 
                 type='email' 
                 id='login-email' 
                 value={email}
                 placeholder='john@example.com' 
                 autoFocus
                 onChange={e => setEmail(e.target.value)} 
                  /> */}

                <AvInput
                  required
                  autoFocus
                  type='email'
                  value={email}
                  id='email'
                  name='email'
                  placeholder='demo@example.com'
                  onChange={e => setEmail(e.target.value)}
                  required
                />
              <AvFeedback>Please enter a valid email!</AvFeedback>

              </AvGroup>
              <FormGroup>
                <div className='d-flex justify-content-between'>
                  <Label className='form-label' for='login-password'>
                    Password
                  </Label>
                  <Link to='/'>
                    <small>Forgot Password?</small>
                  </Link>
                </div>
                <InputPasswordToggle 
                className='input-group-merge' 
                id='login-password'
                value={password}
                name='login-password'
                tag={AvInput}
                onChange={e => setPassword(e.target.value)}
                 />
              </FormGroup>
              <FormGroup>
                <CustomInput type='checkbox' className='custom-control-Primary' id='remember-me' label='Remember Me' />
              </FormGroup>
              <Button.Ripple color='primary' block disabled={!email.length || !password.length}>
                Sign in
              </Button.Ripple>
            </AvForm>
            <p className='text-center mt-2'>
              <span className='mr-25'>New on our platform?</span>
              <Link to='/'>
                <span>Create an account</span>
              </Link>
            </p>
            
            </Col>
        </Col>
      </Row>
    </div>
  )
}

export default Login
