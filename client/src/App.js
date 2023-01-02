import './App.css';
import { useState, useEffect } from 'react';
import SignUpORLoginPage from './MyComponents/PCComponents/SignUpORLoginPage';
import MainPage from './MyComponents/PCComponents/MainPage';
import SignUp from '../src/MyComponents/PCComponents/SignUp'

function App() {



  const [loadMain, setLoadMain] = useState(false)
  const [loadUser, setLoadUser] = useState(0)
  const [openSignUp, setOpenSignUp] = useState(false)



  let windowHeight = window.innerHeight
  let windowWidth = window.innerWidth

  function SignUpORLogin(){
    return openSignUp?<SignUp openSignUp={openSignUp} setOpenSignUp={setOpenSignUp}/>:<SignUpORLoginPage openSignUp={openSignUp} setOpenSignUp={setOpenSignUp} loadMain={loadMain} setLoadMain={setLoadMain} loadUser={loadUser} setLoadUser={setLoadUser}/>
  }

  function Login(){
    return loadMain?
    <MainPage currentUser={loadUser} loadMain={loadMain} setLoadMain={setLoadMain} />
    :SignUpORLogin()
  }

  function render() {
    if (windowHeight <= '700' && windowWidth <= '700') {

    }
    else {
      return Login()
    }
  }

  return (
    <>
      {render()}
    </>
  );
}

export default App;
