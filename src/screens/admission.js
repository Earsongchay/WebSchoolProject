import React, { useState } from 'react'
import NewCover from '../components/NewCover'
import cover from '../assets/images/cccccc.png'
import styles from '../Styles.module.css'

import ap from '../assets/images/admission/ap_normal.png'
import service from '../assets/images/admission/international_service.png'

import rCambodian from '../assets/images/admission/r_normal.png'
import atCambodian from '../assets/images/admission/at_normal.png'
import asCambodian from '../assets/images/admission/as_normal.png'

import rInternational from '../assets/images/admission/r_international.png'
import atInternational from '../assets/images/admission/at_international.png'
import asInternational from '../assets/images/admission/as_international.png'

import rTransfer from '../assets/images/admission/r_transfer.png'
import atTransfer from '../assets/images/admission/at_transfer.png'
import asTransfer from '../assets/images/admission/as_transfer.png'

import mis from '../assets/images/admission/bridging/mis.png'
import bit from '../assets/images/admission/bridging/bit.png'
import a from '../assets/images/admission/bridging/a.png'



function AdmissionScreen() {
  const [selectedMenu, setSeletedMenu] = useState('cambodian')

  const [majorType, setMajorType] = useState('mis')


  return (
    <div>
      <NewCover title='Admission Information' img={cover}></NewCover>
      <div className={styles.admisssion}>
        <div className={styles.admisssionLeft}>
          <div className={styles.admisssionNavi}>
            <ul>
              <li><a href='#0' className={selectedMenu === 'cambodian' ? styles.admisssionNaviActive : ''} onClick={() => { setSeletedMenu('cambodian') }}>Cambodian Applicants</a></li>
              <li><a href='#0' className={selectedMenu === 'international' ? styles.admisssionNaviActive : ''} onClick={() => { setSeletedMenu('international') }}>International Applicants</a></li>
              <li><a href='#0' className={selectedMenu === 'transfer' ? styles.admisssionNaviActive : ''} onClick={() => { setSeletedMenu('transfer') }}>Transfer Applicants</a></li>
              <li><a href='#ap'>When To Apply</a></li>
              <li><a href='#at'>Where To Submit</a></li>
            </ul>
          </div>
        </div>
        <div className={styles.admisssionRight}>
          {selectedMenu === 'cambodian' &&
            <div>
              <div className={styles.imageSchedule}><img src={rCambodian} alt='tesdf'></img></div>
              <div className={styles.imageSchedule}><img src={ap} alt='tesdf'></img></div>
              <div id='ap' className={styles.imageSchedule}><img src={atCambodian} alt='tesdf'></img></div>
              <div id='at' className={styles.imageSchedule}><img src={asCambodian} alt='tesdf'></img></div>
            </div>
          }
          {selectedMenu === 'transfer' &&
            <div>
              <div className={styles.imageSchedule}><img src={rTransfer} alt='tesdf'></img></div>
              <div className={styles.imageSchedule}><img src={ap} alt='tesdf'></img></div>
              <div id='ap' className={styles.imageSchedule}><img src={atTransfer} alt='tesdf'></img></div>
              <div id='at' className={styles.imageSchedule}><img src={asTransfer} alt='tesdf'></img></div>

              <div className={styles.bridgingContainer}>
                <h1>BRIDGING COURSE</h1>
                <p>For students who wish to pursue a second year bachelor's degree with a basic year certificate. Subjects to be studied are divided into 3 skills as follows:</p>
                <div onClick={() => { setMajorType('mis') }} className={styles.bridgeHead}>
                  Management Information System &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8628;
                </div>
                {majorType === 'mis' &&
                  <div style={{ width: "100%" }}>
                    <div className={styles.imageSchedule}>
                      <img src={mis} alt='asd'></img>
                    </div>
                  </div>
                }
                <div onClick={() => { setMajorType('bit') }} className={styles.bridgeHead}>
                  BUSINESS INFORMATION TECHNOLOGY  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8628;
                </div>
                {majorType === 'bit' &&
                  <div style={{ width: "100%" }}>
                    <div className={styles.imageSchedule}>
                      <img src={bit} alt='asd'></img>
                    </div>
                  </div>
                }
                <div onClick={() => { setMajorType('a') }} className={styles.bridgeHead}>
                  ARCHITECTURE &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8628;
                </div>
                {majorType === 'a' &&
                  <div style={{ width: "100%" }}>
                    <div className={styles.imageSchedule}>
                      <img src={a} alt='asd'></img>
                    </div>
                  </div>
                }
                <div onClick={() => { setMajorType('gd') }} className={styles.bridgeHead}>
                  GRAPHIC DESIGN &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8628;
                </div>
                {majorType === 'gd' &&
                  <div style={{ width: "100%" }}>
                    <div className={styles.imageSchedule}>
                      <img src={mis} alt='asd'></img>
                    </div>
                  </div>
                }
              </div>

              <div className={styles.imageSchedule}><img src={service} alt='tesdf'></img></div>
            </div>
          }
          {selectedMenu === 'international' &&
            <div>
              <div className={styles.imageSchedule}><img src={rInternational} alt='tesdf'></img></div>
              <div className={styles.imageSchedule}><img src={ap} alt='tesdf'></img></div>
              <div id='ap' className={styles.imageSchedule}><img src={atInternational} alt='tesdf'></img></div>
              <div id='at' className={styles.imageSchedule}><img src={asInternational} alt='tesdf'></img></div>
              <div className={styles.imageSchedule}><img src={service} alt='tesdf'></img></div>
            </div>
          }
        </div>
      </div>
    </div>
  )
}

export default AdmissionScreen;