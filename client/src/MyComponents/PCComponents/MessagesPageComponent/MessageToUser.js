import React, { useEffect, useState } from 'react'
import '../../../StyleSheets/PC/MessagePageStyle/MessagePerSetStyle.css'

export default function MessageToUser({messageFromUser}) {

    return (
        <>{messageFromUser!==''?<div className='message-per-set'>{messageFromUser}</div>:<></>}
        </>
    )
}
