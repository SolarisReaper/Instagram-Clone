import React from 'react'
import '../../StyleSheets/PC/MainPage/Profile.css'
import ProfilePageHeader from './MainPage/ProfileComponents/ProfilePageHeader'

export default function Profile(props) {
    return (

        <div className="main-page-design">
            <ProfilePageHeader currentUser={props.currentUser}/>
        </div>
    )
}
