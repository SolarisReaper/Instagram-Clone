import React, { useState, useEffect } from 'react';
import ImageUpoladModal from './ImageUpoladModal';
import '../../../../StyleSheets/PC/MainPage/Profile.css'


export default function ProfilePageHeader({ currentUser }) {

  const [loginData, setLoginData] = useState(null)
  const [showImageUploadModal, setShowImageUploadModal] = useState(false)
  // const [currentImage, setCurrentImage] = useState('images/DefaultPhofilePhoto/Default-User-Picture.png')

  useEffect(() => {
    fetch('http://localhost:5002/userData')
      .then(res => {
        return res.json()
      })
      .then(data => {
        setLoginData(data[currentUser])
      })
  }, []);

  console.log(loginData && loginData.userProfilePicture)

  return (
    <>
      {loginData && <div className="profile-main-container">
        <div className="profiledetails">
          <div className="profile-image">

            <div className="profile-image-style">
              <img className="profile-image-style-img" src={process.env.PUBLIC_URL + loginData.userProfilePicture} alt='ERROR' onClick={() => setShowImageUploadModal(true)} />
            </div>

            {
              showImageUploadModal ? <ImageUpoladModal showImageUploadModal={showImageUploadModal} setShowImageUploadModal={setShowImageUploadModal} currentUser={loginData} />
                : null
            }
          </div>

          <div className="profile-details-internal">
            <div className="title-set">
              <div className="userName base-style">{loginData && loginData.userName}</div>
              <div className="Edit-profile ">
                <button className="Edit-profile-btn">Edit Profile</button>
              </div>
              <div className="settings base-style"><i class="fa-solid fa-gear" /></div>
            </div>
            <div className="profile-details">
              <div className="all-posts base-style-profile"><b>0</b> post</div>
              <div className="followers base-style-profile"><b>0</b> followers</div>
              <div className="following base-style-profile"><b>0</b> following</div>
            </div>
            <div className="about"></div>
          </div>

        </div>
        <div className="highlights"></div>
      </div>}
    </>
  )
}
