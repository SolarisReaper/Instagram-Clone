import React, {useState, useEffect} from 'react'
import '../../../StyleSheets/PC/MessagePageStyle/MessagePageMain.css'
import MessageSystem from './MessageSystem';
export default function MessagesMain({currentUser}) {
    const [userData, setUserData] = useState(null)

    useEffect(() => {
      fetch('http://localhost:5002/userData')
        .then(res => {
          return res.json()
        })
        .then(data => {
          setUserData(data[currentUser])
        })
    }, []);


  return (
    <div className="messagePage-main-box">
        <div className="messages-all">
            <div className="username-box">
                <div className="userbox">
                    <div className="username-box-inner default-style-spacing">{userData && userData.userName}</div>
                    <div className="login-lin default-style-spacing"><i class="fa-solid fa-angle-down fa-lg"/></div>
                    <div className="pen-box default-style-spacing"><i class="fa-solid fa-pen-to-square fa-lg"/></div>
                </div>
            </div>
            <div className="text-list"></div>
        </div>
        <div className="message-individual">
    <MessageSystem/>
        </div>
    </div>
  )
}
