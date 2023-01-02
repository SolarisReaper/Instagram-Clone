import React from 'react'
import { useState } from 'react';
import '../../../../StyleSheets/PC/HomePage/Post.css'
import PostModalForReport from './PostModalForReport';

export default function Post({ currentUser }) {

  const [showHeart, setShowHeart] = useState(false)
  const [showSave, setShowSave] = useState(false)
  const [showModalReport, setShowModalReport] = useState(false)


  const handleClickHeart = () => {
    setShowHeart(current => !current);

  };

  const handleClickSave = () => {
    setShowSave(current => !current);
  };

  const openModal = () => {
    setShowModalReport(current => !current);

  };


  let no_of_likes = 1600;

  return (
    // <div className="post">post</div>
    <>
      <div className='post'>
        <div className="profile-info">
          <div className="post-image">
            <img className="post-profile-image" src={process.env.PUBLIC_URL + currentUser.userProfilePicture} alt='ERROR' />
          </div>
          <div className="post-userName">{currentUser.userName}</div>
          <div className="dotted" onClick={openModal} ><i className="fa-solid fa-ellipsis fa-lg" /></div>
        </div>
        <div className="post-body">
          <img className="post-image-body" src={process.env.PUBLIC_URL + currentUser.userProfilePicture} alt='ERROR' onDoubleClick={handleClickHeart} />
        </div>
        <div className="Footer-set-post">
          <div className="actions">
            <i className={showHeart ? "fa-solid fa-heart fa-lg button-basic-style clicked-heart" : "fa-regular fa-heart fa-lg button-basic-style"} onClick={handleClickHeart}/>
            <i className="fa-regular fa-comment fa-lg button-basic-style" />
            <i className="fa-regular fa-share-from-square fa-lg button-basic-style" />
            <i className={showSave ? "fa-solid fa-bookmark fa-lg button-basic-style clicked-save saved-style" : "fa-regular fa-bookmark fa-lg button-basic-style saved-style"} onClick={handleClickSave}></i>
          </div>
          <div className="no-of-likes">{showHeart ? no_of_likes + 1 : no_of_likes} likes</div>
          <div className="user-caption">
           <span className='username-caption'> {currentUser.userName} </span>
           <span className='username-caption-words'>The caption for this picture</span>
          </div>
          <div className="comments">Comments from etc</div>
          <div className="comment-box">
            <div className="emoji test"><i className="fa-regular fa-lg fa-face-smile" /></div>
            <div className="comment-input-box test">
              <input type="text" className='input-box' placeholder='Add a comment' />

            </div>
            <div className="postting-btn test">Post</div>
          </div>
        </div>
      </div>
      <PostModalForReport showModal={showModalReport} setShowModal={setShowModalReport} />
    </>
  )
}
