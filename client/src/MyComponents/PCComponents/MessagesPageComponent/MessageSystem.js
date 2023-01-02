import React, { useState } from 'react'
import '../../../StyleSheets/PC/MessagePageStyle/MessageSystemStyle.css'
import MessageToUser from './MessageToUser'


export default function MessageSystem() {

  const [userText, showUserText] = useState('')
  const [onStartTexting, setOnStartTexting] = useState(false)

  const handleKeyPress = e => {
    // console.log(e.key)
  if (e.key === 'Enter') {
    sent()
  }
}

  const isEmpty = (e) => {
    if (e.target.value === '') {
      setOnStartTexting(false)
    }
    else {
      setOnStartTexting(true)
    }
  }

  let response = [' ', 'hi', 'okay', 'I was just thinking maybe we should dance', 'hahaha', ':)', ':(', '-_-', ':3', 'o.O']

  const sent = (e) => {
    showUserText(document.getElementsByClassName('texting-user')[0].value)
    let messagerText = response[Math.floor(Math.random() * 10)]
  }

  return (
    <div className="main-message-box">
      <div className="header-message-box">
        <div className="messaging-user">
          <div className='base-style-for-user'><img className="contacting-user-photo" src={process.env.PUBLIC_URL + 'images/DefaultPhofilePhoto/Default-User-Picture.png'} alt='ERROR' /></div>
          <div className='base-style-for-user user-name'>name</div>
        </div>
        <div className="function-btn">
          <i className="fa-solid fa-lg fa-phone base-styling" />
          <i className="fa-solid fa-lg fa-video base-styling" />
          <i className="fa-solid fa-lg fa-circle-info base-styling" />
        </div>
      </div>
      <div className="messaging-inner-box-system">
        <div className="body-message-box">
          {/* <MessageToUser/> */}
          <div className="Texter-right default-text-set"></div>
          <div className="CurrentUser-Text default-text-set">
            <MessageToUser messageFromUser={userText} />

          </div>
        </div>
        <div className="message-input-box">
          <div className="meassage-main-input-box">
            <div className="emoticons">
              <i className="fa-regular fa-face-smile fa-lg" />
            </div>
            <div className="message-input">
              <input type="text" placeholder='Message...' className="texting-user" onChange={isEmpty} onKeyPress={(e) => handleKeyPress(e)}/>
            </div>
            {onStartTexting ?
              <div className="sending">
                <button className="send" onClick={sent}>Send</button>
              </div>
              :
              <div className="send-button base-style-test ">
                <i className="fa-regular fa-image fa-lg base-style-bbtn" />
                <i className="fa-regular fa-heart fa-lg base-style-bbtn" />
              </div>}
          </div>
        </div>
      </div>
    </div>
  )
}
