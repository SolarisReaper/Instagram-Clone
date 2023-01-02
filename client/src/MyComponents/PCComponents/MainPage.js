import React, { useState } from 'react'
import HeaderNavigation from './MainPage/HeaderNavigation'
import Home from './MainPage/Home'
import Profile from './Profile'
import MessagesMain from './MessagesPageComponent/MessagesMain'


export default function MainPage(props) {

  const [showCurrentIconClick, setshowCurrentIconClick] =useState(0)

  const render = () => {
    if (showCurrentIconClick === 0) { return <Home currentUser={props.currentUser}/> }
    else if (showCurrentIconClick === 1) { return <MessagesMain currentUser={props.currentUser}/> }
    else if (showCurrentIconClick === 2) { return <div>showPublicPosts</div> }
    else if (showCurrentIconClick === 3) { return <Profile currentUser={props.currentUser}/> }
    else if (showCurrentIconClick === 4) { return <div>showSettings</div> }


  }
  

  return (
    <>
      <HeaderNavigation currentUser={props.currentUser} loadMain={props.loadMain} setLoadMain={props.setLoadMain}
      showCurrentIconClick={showCurrentIconClick} setshowCurrentIconClick={setshowCurrentIconClick}/>
      {render()}
    </>
  )
}
