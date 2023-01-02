import React from 'react'
import '../../../StyleSheets/PC/HomePage/Home.css'
import { useEffect, useState } from 'react'
import Post from './HomePageComponents/Post'

export default function Home({ currentUser }) {

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
    <>
      <div className='home-box' >
        <div className="post-bar">
          {userData && <Post currentUser={userData}/>}

          {userData && <Post currentUser={userData}/>}

          {userData && <Post currentUser={userData}/>}
        </div>





        <div className="side-bar">

          <div className="switch">
            <div className="image default-style">
              {userData && <img className="profile-image-home-style" src={process.env.PUBLIC_URL + userData.userProfilePicture} alt='ERROR' />}
            </div>
            <div className="username default-style">{userData && userData.userName}</div>
            <div className="switch-btn default-style">Switch</div>
          </div>
          <div className="suggestion">
            <div className="sugg-flat-style">
              <div className="suggest-text">Suggestions For You</div>
              <div className="suggest-all">See All</div>
            </div>
            <div className="suggest-profile">
              Full set of all suggestions
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
