import React from 'react'
import '../../../../StyleSheets/PC/MessagePageStyle/ReportDone.css'

export default function ReportDone(props) {

  const Close = () => {
    props.setDoneReporting(false)
    props.close()
  }

  return (
    <div className="done-reporting-part">
      <div className="green-tick">
        <i class="fa-regular fa-3x fa-circle-check" />
      </div>
      <div className="thank-you">
        <div className="thank-you-message">Thanks for letting us know</div>
        <div className="other-message-report">
          Your feedback is important in helping us keep the <br />Instagram community safe.
        </div>
      </div>
      <div className="options-for-done">
        <ul className='report-done-list'>
          <li className='default-style-report-done'>
            <div className="report-text report-block">Block Instagram</div>
            <div className="done-complain-report">
              <i class="fa-solid fa-lg fa-chevron-right" />
            </div>
          </li>

          <li className='default-style-report-done'>
            <div className="report-text">Unfollow Instagram</div>
            <div className="done-complain-report">
              <i class="fa-solid fa-lg fa-chevron-right" />
            </div>
          </li>

          <li className='default-style-report-done addition' >
            <div className="report-text">
              <a className='link-for-community-help' href='https://help.instagram.com/477434105621119' target="_blank" rel='noreferrer'>Learn More</a>
            </div>
            <div className="done-complain-report">
              <i class="fa-solid fa-lg fa-chevron-right" />
            </div>
          </li>
        </ul>
      </div>
      <div className="button-done">
        <button className="report-done-close" onClick={Close}>Close</button>
      </div>
    </div>
  )
}
