import React, { useEffect, useState } from 'react'
import '../../StyleSheets/PC/SignUp.css'

export default function SignUp(props) {



  const [invalidLogin, setinvalidLogin] = useState(false)
  const [showShowButton, setShowShowButton] = useState(false)
  const [passType, setPassType] = useState('')
  const [submit, setSubmit] = useState(false)
  const [typeOfContact, setTypeOfContact] = useState(false)
  const [loginData, setLoginData] = useState(null)




  const typeOfInput = (e) => {

    const firstWord = e.target.value;
    let firstLetter = firstWord.charAt(0)
    const code = firstLetter.charCodeAt()

    if (code >= 48 && code <= 57) {
      setTypeOfContact(true)
    }
    else if (code >= 97 && code <= 122) {
      setTypeOfContact(false)
    }
  }


  const handleShow = (e) => {
    e.preventDefault();
    setPassType(e.target.value)
  }

  const handleClickShow = (e) => {
    e.preventDefault();
    setShowShowButton(prev => !prev)
  }


  const handleSubmit = (e) => {

    let isNotPresent = false;
    e.preventDefault();
    let lastid = 0;

    const data = new FormData(e.target);

    const contactDet = Object.fromEntries(data.entries()).contact;
    const name = Object.fromEntries(data.entries()).Name;
    const userName = Object.fromEntries(data.entries()).userName;
    const passwordValue = Object.fromEntries(data.entries()).password;

    let phoneNumber = ''
    let email = ''

    {
      loginData && loginData.map((userData => {

        lastid = userData.id;
        if ((contactDet === userData.MobileNumber || contactDet === userData.Email) || (userName === userData.UserName)) {
          console.log('it is present')
          isNotPresent = false;
        }
        else {
          if (contactDet.includes('@')) {
            email = contactDet
            phoneNumber = ''
          }
          else {
            phoneNumber = contactDet
            email = ''
          }
          isNotPresent = true;

        }
      }))
    }

    if (isNotPresent) {
      // Adding New User 

      let id = lastid + 1;
      let Name = name;
      let UserName = userName;
      let Email = email;
      let MobileRegion = "+91";
      let MobileNumber = phoneNumber;
      let Password = passwordValue;
      let userProfilePicture =  "images/DefaultPhofilePhoto/Default-User-Picture.png";
      const newUser = { id, Name, UserName, Email, MobileRegion, MobileNumber, Password };
      const userData = { id, userName, userProfilePicture }

      console.log(userData)


      fetch('http://localhost:8000/userLogin', {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newUser)
      }).then(() => { console.log("new user added") })

      fetch('http://localhost:5002/userData', {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData)
      }).then(() => { console.log("new user data added") })

      window.location.reload(false, 5000);

    }

    {
      loginData && loginData.map((userData) => {
        if ((userData.MobileNumber === contactDet || userData.Email === contactDet || userData.UserName === contactDet) && userData.Password === passwordValue) {

          props.setLoadMain(true);
          props.setLoadUser(userData.id)
        }
        else {
          setinvalidLogin(true);
        }
        setSubmit(false)
      })
    }


  }

  useEffect(() => {
    fetch('http://localhost:8000/userLogin')
      .then(res => {
        return res.json()
      })
      .then(data => {
        setLoginData(data)
      })
  }, []);





  return (
    <div className="Main-SignUp">

      <div className="fullContainer">
        <div className="mainContainer">

          <div className="title-signUp">
            <center>Instagram</center>
          </div>

          <div className="text-forattract">
            <center>
              Sign up to see photos and videos <br></br>from your friends.
            </center>
          </div>

          <center>
            <button type='submit' className="login facebook-login-sizing-input-button">
              <i className="fa-brands fa-square-facebook fa-lg"></i>
              <span>  &nbsp;Log in with Facebook </span>
            </button>
          </center>

          <div className="divider-main-signUp">
            <div className="divider-signUp"></div>
            <div className="text-OR">OR</div>
            <div className="divider-signUp"></div>
          </div>

          <form className="" onSubmit={submit ? handleSubmit : handleClickShow}>

            {<center><input name='contact' type={typeOfContact ? "tel" : 'email'} placeholder="Mobile Number or Email" className="contact-data sizing-input-signUp" max={typeOfContact ? '10' : '99999999'} onKeyUp={typeOfInput} pattern={typeOfContact ? '[0-9]{10}' : null} /></center>}

            <center><input name='Name' type="text" placeholder="Full Name" className="contact-data sizing-input-signUp" /></center>



            <center><input name='userName' type="text" placeholder="Username" className="contact-data sizing-input-signUp" /></center>

            <center>
              <div className="password-box-signUp">
                {
                  (passType === '') ?
                    <>
                      <input name='password' type={showShowButton ? 'text' : 'password'} placeholder="Password" className="password-sizing-input-signUp" onChange={handleShow} />

                    </>
                    :
                    <>
                      <input name='password' type={showShowButton ? 'text' : 'password'} placeholder="Password" className="password-sizing-input-signUp" onChange={handleShow} />

                      <button className={showShowButton ? 'hideSignUp' : 'showSignUp'}>{showShowButton ? 'Hide' : 'Show'}</button>
                    </>

                }

              </div>
            </center>

            <div className='companyText-Main'>
              <center>People who use our service may have uploaded</center>
              <center>your contact information to Instagram. <a className='companyText' href='https://www.facebook.com/help/instagram/261704639352628' target="_blank">Learn</a></center>
              <center>
                <a className='companyText' href='https://www.facebook.com/help/instagram/261704639352628' target="_blank">More</a>
              </center>
            </div>

            <div className='companyText-Main'>
              <center>By signing up, you agree to our&nbsp;
                <a className='companyText' href='https://help.instagram.com/581066165581870' target="_blank" >Terms</a> ,&nbsp;
                <a className='companyText' href='https://www.facebook.com/privacy/policy' target="_blank" >Privacy</a>
              </center>

              <center>
                <a className='companyText' href='https://www.facebook.com/privacy/policy' target="_blank" >Policy</a> and&nbsp;
                <a className='companyText' href='https://help.instagram.com/1896641480634370?ref=ig' target="_blank" >Cookies Policy </a>.
              </center>
            </div>

            <center>
              <button type='submit' onClick={() => setSubmit(true)} className="login facebook-login-sizing-input-button-signUp">
                <span>  Sign Up </span>
              </button>
            </center>
          </form>
        </div>

        <div className="login-in">
          <center>Have an account? <a className='link-signUp' onClick={() => props.setOpenSignUp(false)}>Log In</a></center>
        </div>

        <div className="get-app">
          <div className="get-app-text">
            <center>Get the app.</center>
          </div>
          <div className="app-link">
            <div className="app-store-signUp">
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

      <div className="signUp-footer">
        <div className="footerStyle-signUp">
          <center>
            <ul style={{ margin: '0', padding: '0' }}>
              <li className='footerListStyleSignUp'>Meta</li>
              <li className='footerListStyleSignUp'>About</li>
              <li className='footerListStyleSignUp'>Blog</li>
              <li className='footerListStyleSignUp'>Jobs</li>
              <li className='footerListStyleSignUp'>Help</li>
              <li className='footerListStyleSignUp'>API</li>
              <li className='footerListStyleSignUp'>Privacy</li>
              <li className='footerListStyleSignUp'>Terms</li>
              <li className='footerListStyleSignUp'>Top Accounts</li>
              <li className='footerListStyleSignUp'>Hashtags</li>
              <li className='footerListStyleSignUp'>Locations</li>
              <li className='footerListStyleSignUp'>Instagram Lite</li>
              <li className='footerListStyleSignUp'>Contact Uploading & Non-Users</li>
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
    </div>
  )
}
