import React from 'react'
import '../../StyleSheets/PC/ButtonDropdownStyle.css'

export default function DropDownEachOption(props) {

  const render = () => {
    if (props.dropItem.text === 'Profile') {
      return <a className='link' onClick={() => props.setshowCurrentIconClick(3)}><i className={props.dropItem.icon}></i>{props.dropItem.text}</a>
    }
    else if (props.dropItem.text === 'Settings') {
      return <a className='link' onClick={() => props.setshowCurrentIconClick(4)}><i className={props.dropItem.icon}></i>{props.dropItem.text}</a>
    }
    else {
      return <a className='link'><i className={props.dropItem.icon}></i>{props.dropItem.text}</a>
    }
  }
  return (
    <>{ render() }</>

  )
}
