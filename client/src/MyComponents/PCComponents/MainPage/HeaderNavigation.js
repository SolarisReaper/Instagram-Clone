import React, { useState, useEffect } from 'react'
import '../../../StyleSheets/PC/HeaderNavigation/Header.css'
import ButtonDropDown from '../ButtonDropDown';

export default function HeaderNavigation(props) {


    const [showLogoDrop, setShowLogoDrop] = useState(false);
    const [loginData, setLoginData] = useState(null)
    const [currentUserData, setCurrentUserData] = useState(null)
    const [buttonToSpinner, setButtonToSpinner] = useState(false)
    const [showCross, setShowCross] = useState(false)


    let userProfilePic;

    const logoDropShow = () => {
        setShowLogoDrop(prev => !prev)
    }


    useEffect(() => {
        fetch('http://localhost:8000/userLogin')
            .then(res => {
                return res.json()
            })
            .then(data => {
                setLoginData(data[props.currentUser])
            })
    }, []);

    useEffect(() => {
        fetch('http://localhost:5002/userData')
            .then(res => {
                return res.json()
            })
            .then(data => {
                setCurrentUserData(data[props.currentUser])

            })
    }, []);

    if (currentUserData != null) {
        userProfilePic = currentUserData.userProfilePicture
    }

    const searchOnFocus = (e) => {
        e.target.placeholder = 'Search'
        setShowCross(true)
    }

    const searchOnBlub = (e) => {
        document.getElementById('input-search').placeholder = '\uf002  Search'
        document.getElementById('input-search').value = ''
        setShowCross(false)
        setButtonToSpinner(false)
    }

    const activeSpinner = () => {
        setShowCross(false)
        setButtonToSpinner(true)

        setTimeout(() => {
            setButtonToSpinner(false)
            setShowCross(true)
        }, 3000)
    }

    return (
        <nav className="header-nav">
            <div className="logo-style">
                <div className="insta-button">
                    <a>Instagram&nbsp;</a>
                    <button className="insta-button" onClick={logoDropShow}>
                        <i className="fa-solid fa-caret-down icon-dropStyle fa-xs"></i>
                    </button>
                </div>

                {showLogoDrop ? <ul className='logo-Dropdown'>
                    <li className="drop-item"><i className="fas fa-regular fa-user-check"></i>&nbsp;&nbsp;&nbsp;Following</li>
                    <li className="drop-item"><i className="fa-regular fa-star"></i>&nbsp;&nbsp;&nbsp;Favourites</li>
                </ul> : null}
            </div>
            <div className="Search">
                <input type="text" id='input-search' className={showCross ? "search-active search" : "search-inactive search"} placeholder='&#xf002;   Search'
                    onFocus={searchOnFocus}
                    onKeyDown={activeSpinner} autocomplete="off"/>
                {showCross ?
                    <button className='btn-cross' onClick={searchOnBlub}><i class="fa-solid fa-circle-xmark" /></button>
                    : null}
                {
                    buttonToSpinner ?  <div className='btn-spin' onClick={searchOnBlub}><i class="fa-solid fa-spinner fa-spin animated faa-fast"/></div> : null
                }
            </div>
            <div className="nav-button">
                <i className="fa-solid fa-house fa-lg icon-nav-style" onClick={() => props.setshowCurrentIconClick(0)}></i>
                <i className="fa-brands fa-facebook-messenger fa-lg icon-nav-style" onClick={() => props.setshowCurrentIconClick(1)}></i>
                <i className="fa-regular fa-square-plus fa-lg icon-nav-style"></i>
                <i className="fa-regular fa-compass fa-lg icon-nav-style" onClick={() => props.setshowCurrentIconClick(2)}></i>
                <i className="fa-regular fa-heart fa-lg icon-nav-style"></i>

                <ButtonDropDown userLogo={''} userPicture={userProfilePic} loadMain={props.loadMain} setLoadMain={props.setLoadMain} showCurrentIconClick={props.showCurrentIconClick} setshowCurrentIconClick={props.setshowCurrentIconClick} />

            </div>
        </nav>
    )
}
