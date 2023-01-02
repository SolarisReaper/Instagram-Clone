import React, { useState } from 'react'
import '../../../../StyleSheets/PC/HomePage/Modal.css'
import Reporting from './Reporting'

export default function PostModalForReport(props) {

  const [reporting, showReporting] = useState(false)
  const [report, setReport] = useState(true)

  const handleCheck = (e) => {
    showReporting(true)
  }

  return (
    <>{props.showModal ?
      <>
        {props.showModal && reporting === false ?
          <>
            <div className="backblack" onClick={() => props.setShowModal(false)}></div>
            <div className='MainBodyModal'>
              <ul>
                <li className='default-style-list list-border-bottom report-style' onClick={handleCheck}>Report</li>
                <li className='default-style-list list-border-bottom'>Not Interested</li>
                <li className='default-style-list list-border-bottom'>Go to post</li>
                <li className='default-style-list list-border-bottom'>Share to...</li>
                <li className='default-style-list list-border-bottom'>Copy link</li>
                <li className='default-style-list list-border-bottom'>Embed</li>
                <li className='default-style-list' onClick={() => props.setShowModal(false)}>Cancel</li>
              </ul>
            </div>
          </> : null}

        {
          reporting ? <Reporting reporting={reporting} showReporting={showReporting} showModal={props.showModal} setShowModal={props.setShowModal} /> : null}
      </>
      : null}</>
  )
}
