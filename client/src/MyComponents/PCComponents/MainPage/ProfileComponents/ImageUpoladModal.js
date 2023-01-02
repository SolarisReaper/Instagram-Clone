import React, { useState } from 'react'
import '../../../../StyleSheets/PC/ImageUpload/ImageUploadStyle.css'
import axios from 'axios'

export default function ImageUpoladModal(props) {

    const [file, setFile] = useState(null)

    const onFormSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();

        formData.append('photo', file);


        const config = {
            headers: {
                'content-type': 'multipart/form-data',
            },
        };

        const url = 'http://localhost:3001/user/upload';

        axios.post(url, formData, config).then((response) => {
            alert('upload successful!!')

        }).catch((err) => { console.log('err', err) })


    };

    const onInputChange = (e) => {
        e.preventDefault();
        setFile(e.target.files[0])

        var ext

        // alert(e.target.files[0].name)
        if (e.target.files[0].name.split('.')[1].toLowerCase() === 'jpg') {
            ext = 'jpeg'
        }
        else {
            ext = e.target.files[0].name.split('.')[1]
        }

        const name = e.target.files[0].name.split('.')[0] + '.' + ext
        const dp = props.currentUser.userProfilePicture.split('/')[0] + '/' + props.currentUser.userProfilePicture.split('/')[1] + '/' + name

        console.log(dp)

        fetch(`http://localhost:5002/userData/${props.currentUser.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                userProfilePicture: dp
            }),
        })
            .catch((err) => console.log('error: ', err))
    }

    const removePhoto = () => {

        fetch(`http://localhost:5002/userData/${props.currentUser.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                userProfilePicture: "images/DefaultPhofilePhoto/Default-User-Picture.png"
            }),
        })
            .catch((err) => console.log('error: ', err))

        window.location.reload(300)
    }




    return (
        <>
            <div className="full-page-shadow" onClick={() => props.setShowImageUploadModal(false)}></div>

            <div className="modal-main">
                <div className="image-header">
                    <center> <img src={process.env.PUBLIC_URL + props.currentUser.userProfilePicture} alt="ERROR" className="header-profile-image" /></center>
                    <center className='sync-text'><b>Synced profile photo</b></center>
                    <center className='sync-site-text'>Instagram, Facebook</center>
                </div>
                <div className='rest-body'>
                    <ul className='list-of-functions'>

                        <li className='list-of-modal-image-upload' style={{ color: 'rgb(77, 148, 255)', fontWeight: '700' }}>
                            {/* Upload Photo */}
                            {/* <input type="file" name="uploadfile" accept="image/*" id="img-for-profile-pic" style={{ display: 'none' }} onChange={handleChange} />
                            <label for="img-for-profile-pic">Upload Image</label>
                            {console.log()} */}

                            <form id='frm1' onSubmit={onFormSubmit}>
                                <input type="file" name='photo' id="img-for-profile-pic" onChange={onInputChange} />
                                {/* <label for="img-for-profile-pic">Upload Image</label> */}
                                <button id='submitting' type='submit'>Upload</button>
                            </form>
                        </li>
                        <li className='list-of-modal-image-upload'>Manage Sync Settings</li>
                        <li className='list-of-modal-image-upload' style={{ color: 'rgb(255, 77, 77)', fontWeight: '700' }} onClick={removePhoto}>Remove Current Photo</li>
                        <li className='list-of-modal-image-upload' onClick={() => props.setShowImageUploadModal(false)} >Cancel</li>
                    </ul>
                </div>
            </div>
        </>
    )
}
