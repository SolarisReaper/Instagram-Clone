import React, { useEffect, useState } from 'react'
import '../../StyleSheets/PC/SignUpORLoginStyle.css'


export default function SignUpORLoginPage(props) {

  const [invalidLogin, setinvalidLogin] = useState(false)
  const [showShowButton, setShowShowButton] = useState(false)
  const [passType, setPassType] = useState('')
  const [submit, setSubmit] = useState(false)
  const [loginData, setLoginData] = useState(null)

  useEffect(() => {
    fetch('http://localhost:8000/userLogin')
      .then(res => {
        return res.json()
      })
      .then(data => {
        setLoginData(data)
      })
  }, []);
  

  const handleShow = (e) => {
    e.preventDefault();
    setPassType(e.target.value)
  }

  const handleClickShow = (e) => {
    e.preventDefault();
    setShowShowButton(prev => !prev)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);

    const contactDet = Object.fromEntries(data.entries()).contact;
    const passwordValue = Object.fromEntries(data.entries()).password;

    {loginData && loginData.map((userData) => {
      if ((userData.MobileNumber === contactDet || userData.Email === contactDet || userData.UserName === contactDet) && userData.Password === passwordValue) {

        props.setLoadMain(true);
        props.setLoadUser(userData.id)
      }
      else {
        setinvalidLogin(true);
      }
      setSubmit(false)
    })}
  }

  


  return (
    <div className="Main-Login">
      <div className="body">

        <div className="picture">
          <img className='image-back' src={process.env.PUBLIC_URL + 'images/SignUpORLoginPage/langinPage2.png'} alt='ERROR' />

          <img className='image-front' src={process.env.PUBLIC_URL + 'images/SignUpORLoginPage/LandingPage-unscreen.gif'} alt='ERROR' />
        </div>

        <div className="LoginForm">

          <div className="border-login-form">

            <div className="title"><center>Instagram</center></div>

            <form className="Login" onSubmit={submit ? handleSubmit : handleClickShow}>
              <center><input name='contact' type="text" placeholder="Phone number, username or email" className="contact-data sizing-input" /></center>
              <center>
                <div className="password-box">
                  {
                    (passType === '') ?
                      <>
                        <input name='password' type={showShowButton ? 'text' : 'password'} placeholder="Password" className="password-sizing-input" onChange={handleShow} />

                      </>
                      :
                      <>
                        <input name='password' type={showShowButton ? 'text' : 'password'} placeholder="Password" className="password-sizing-input" onChange={handleShow} />

                        <button className={showShowButton ? 'hide' : 'show'}>{showShowButton ? 'Hide' : 'Show'}</button>
                      </>

                  }

                </div>
              </center>
              <center>
                <button type='submit' onClick={() => setSubmit(true)} className="login sizing-input-button">Log In</button>
              </center>
            </form>

            <div className="divider-main">
              <div className="divider"></div>
              <div className="text-OR">OR</div>
              <div className="divider"></div>
            </div>

            <div className="login-facebook">
              <center>
                <a href='#' className='link-me'><b>
                  <i className="fa-brands fa-square-facebook fa-lg"></i>
                  <span>  &nbsp;Log in with Facebook </span>
                </b></a>
              </center>
            </div>
            <center>
              {invalidLogin ?
                <div className="invalid">
                  Sorry, your password was incorrect. Please<br></br> double-check your password.
                </div>
                : null
              }
            </center>

            <div className="forgot-password">
              <a href='#' className='link'><center>Forgot password?</center></a>
            </div>
          </div>

          <div className="sign-up">
            <center>Don't have an account? <a className='link-signUp' onClick={() => props.setOpenSignUp(true)}>Sign up</a></center>
          </div>

          <div className="get-app">
            <div className="get-app-text">
              <center>Get the app.</center>
            </div>
            <div className="app-link">
              <div className="app-store">
                <a href='https://apps.apple.com/app/instagram/id389801252?vt=lo' target="_blank">
                  <img className='image-link-app' src={process.env.PUBLIC_URL + 'images/SignUpORLoginPage/app-store.png'} alt='ERROR' />
                </a>
              </div>
              <div className="google-play">
                <a href='https://play.google.com/store/apps/details?id=com.instagram.android' target="_blank">
                  <img className='image-link-app' src={process.env.PUBLIC_URL + 'images/SignUpORLoginPage/google-play-logo.png'} alt='ERROR' />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footerStyle">
        <ul style={{ margin: '0', padding: '0' }}>
          <li className='footerListStyle'>Meta</li>
          <li className='footerListStyle'>About</li>
          <li className='footerListStyle'>Blog</li>
          <li className='footerListStyle'>Jobs</li>
          <li className='footerListStyle'>Help</li>
          <li className='footerListStyle'>API</li>
          <li className='footerListStyle'>Privacy</li>
          <li className='footerListStyle'>Terms</li>
          <li className='footerListStyle'>Top Accounts</li>
          <li className='footerListStyle'>Hashtags</li>
          <li className='footerListStyle'>Locations</li>
          <li className='footerListStyle'>Instagram Lite</li>
          <li className='footerListStyle'>Contact Uploading & Non-Users</li>
        </ul>
        <center>
          <ul style={{ margin: '0', padding: '0' }} >
            <li className='footerListStyle1'>Dance</li>
            <li className='footerListStyle1'>Food & Drink</li>
            <li className='footerListStyle1'>Home & Garden</li>
            <li className='footerListStyle1'>Music</li>
            <li className='footerListStyle1'>Visual Arts</li>
          </ul>
        </center>

        <center>
          <ul style={{ margin: '0', padding: '10px 0px 0px 0px' }}>
            <li className='footerListStyle1'>
              <b>**dropdownLAng**</b>{/* Dropdown here */}
            </li>
            <li className='footerListStyle1'>© 2022 Instagram from Meta</li>
          </ul>
        </center>
      </div>


    </div>
  )
}
