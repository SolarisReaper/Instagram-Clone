import React, { useState } from 'react'
import '../../StyleSheets/PC/ButtonDropdownStyle.css'
import DropDownEachOption from './DropDownEachOption'

export default function ButtonDropDown(props) {

    const dropdownValueProfile = [
        {icon:'fa-regular fa-circle-user icon-style', text:'Profile'},
        {icon:'fa-regular fa-bookmark icon-style', text:'Saved'},
        {icon:'fa-solid fa-gear icon-style', text:'Settings'},
        {icon:'fa-solid fa-arrows-rotate icon-style', text:'Switch Account'}
    ]
    const [showDrop, setShowDrop] = useState(false)
    return (

        <div className="dropdown">
            <button className="dropbtn" onClick={()=>setShowDrop(prev=>!prev)}> 
            <img className="default-Image" src={process.env.PUBLIC_URL + props.userPicture} alt='ERROR' />
            </button>

            {showDrop?<div className={showDrop?"dropdown-show-content":"dropdown-content"}>
                
                {dropdownValueProfile.map((dropItem)=>{
                    return <DropDownEachOption dropItem={dropItem} showCurrentIconClick={props.showCurrentIconClick} setshowCurrentIconClick={props.setshowCurrentIconClick}/>
                })}
                
                <a  className='link-log-out' onClick={()=>props.setLoadMain(false)}>&nbsp;&nbsp;Log Out</a>
            </div>:null}
        </div>

    )
}
