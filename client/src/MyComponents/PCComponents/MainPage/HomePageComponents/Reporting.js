import React, { useState } from 'react'
import '../../../../StyleSheets/PC/MessagePageStyle/Reporting.css'
import ReportDone from './ReportDone'

export default function Reporting(props) {

  const [delayReport, setDelayReport] = useState(true)
  const [delayReportNext, setDelayReportNext] = useState(false)
  const [doneReporting, setDoneReporting] = useState(false)
  const [doneNoDelay, setDoneNoDelay] = useState(true)

  const close = () => {
    props.showReporting(false)
    props.setShowModal(false)
  }

  const activateFinal = () => {
    setDelayReportNext(false)
    setDoneReporting(true)
  }

  setTimeout(() => {
    if (doneNoDelay) {
      setDelayReport(false)
      setDelayReportNext(true)
    }
    setDoneNoDelay(false)
  }, 800)



  return (
    <>{props.reporting ?
      <>
        <div className="background-reporting" onClick={close}></div>
        {
          delayReport ?
            <div className="main-inner-report-box">
              <div className="reporting-inner-header">Report</div>
              <div className="reporting-inner-spinner">
                <i class="fa-solid fa-spinner fa-2x fa-spin animated faa-fast" />
              </div>
            </div>
            : null
        }
        {
          delayReportNext === true ?
            <div className="main-inner-report-box-next">
              <div className="reporting-inner-header-next">

                <div className="text-report-heading">Report</div>
                <div className="x-mark-report-header" onClick={close}>
                  <i class="fa-solid fa-lg fa-xmark" />
                </div>

              </div>
              <div className="reporting-inner-compains">
                <ul className='report-option-full-set'>
                  <li className='default-report-option-style-first'>
                    <div className="report-text-first"> Why are you reporting this?</div>
                  </li>
                  <li className='default-report-option-style' onClick={activateFinal}>
                    <div className="report-text"> It's spam </div>
                    <div className="done-complain-report">
                      <i class="fa-solid fa-lg fa-chevron-right" />
                    </div>
                  </li>
                  <li className='default-report-option-style' onClick={activateFinal}>
                    <div className="report-text"> Nudity or sexual activity </div>
                    <div className="done-complain-report">
                      <i class="fa-solid fa-lg fa-chevron-right" />
                    </div>
                  </li>
                  <li className='default-report-option-style' onClick={activateFinal}>
                    <div className="report-text"> Hate speech or symbols</div>
                    <div className="done-complain-report">
                      <i class="fa-solid fa-lg fa-chevron-right" />
                    </div>
                  </li>
                  <li className='default-report-option-style' onClick={activateFinal}>
                    <div className="report-text"> Violence or dangerous organizations</div>
                    <div className="done-complain-report">
                      <i class="fa-solid fa-lg fa-chevron-right" />
                    </div>
                  </li>
                  <li className='default-report-option-style' onClick={activateFinal}>
                    <div className="report-text"> Sale or illegal or irregulated goods</div>
                    <div className="done-complain-report">
                      <i class="fa-solid fa-lg fa-chevron-right" />
                    </div>
                  </li>
                  <li className='default-report-option-style' onClick={activateFinal}>
                    <div className="report-text"> Bullying or harrasment</div>
                    <div className="done-complain-report">
                      <i class="fa-solid fa-lg fa-chevron-right" />
                    </div>
                  </li>
                  <li className='default-report-option-style' onClick={activateFinal}>
                    <div className="report-text"> Intellectual property violation</div>
                    <div className="done-complain-report">
                      <i class="fa-solid fa-lg fa-chevron-right" />
                    </div>
                  </li>
                  <li className='default-report-option-style' onClick={activateFinal}>
                    <div className="report-text"> Suicide or self-injury</div>
                    <div className="done-complain-report">
                      <i class="fa-solid fa-lg fa-chevron-right" />
                    </div>
                  </li>
                  <li className='default-report-option-style' onClick={activateFinal}>
                    <
                      div className="report-text"> Eating disorders</div>
                    <div className="done-complain-report">
                      <i class="fa-solid fa-lg fa-chevron-right" />
                    </div>
                  </li>
                  <li className='default-report-option-style' onClick={activateFinal}>
                    <div className="report-text"> Scam or fraud</div>
                    <div className="done-complain-report">
                      <i class="fa-solid fa-lg fa-chevron-right" />
                    </div>
                  </li>
                  <li className='default-report-option-style' onClick={activateFinal}>
                    <div className="report-text"> False information</div>
                    <div className="done-complain-report">
                      <i class="fa-solid fa-lg fa-chevron-right" />
                    </div>
                  </li>
                  <li className='default-report-option-style' onClick={activateFinal}>
                    <div className="report-text"> I just don't like it</div>
                    <div className="done-complain-report">
                      <i class="fa-solid fa-lg fa-chevron-right" />
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            : null
        }
        {
          doneReporting ?
            <ReportDone close={close} doneReport={props.doneReport} setDonereporting={props.setDonereporting} reporting={props.reporting} showReporting={props.showReporting} showModal={props.showModal} setShowModal={props.setShowModal} doneReporting={doneReporting} setDoneReporting={setDoneReporting} />
            : null
        }
      </> : null}</>
  )
}