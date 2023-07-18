import React, { useState } from 'react'
import styles from '../Styles.module.css'
import CardCareer from '../components/CardCareer'
import Ruler from '../components/Ruler'
import schedule from '../../src/assets/images/sche.jpg'
import buttom from '../assets/images/Group 26.jpg'
import major from '../assets/data/MajorData'
import { useParams } from 'react-router-dom'

function MajorDetail() {
  const [currentMajor, setCurrentMajor] = useState(0)

  const index = useParams();

  const overIndexHandler = () => {
    if (currentMajor < major.length)
      setCurrentMajor(parseInt(index.arg))
    else {
      setCurrentMajor(0)
    }
  }


  return (
    <div onLoad={overIndexHandler} className={styles.majorDetail}>
      <div className={styles.majorCover}>
        <div className={styles.majorTitle}>
          <h2>{major[currentMajor].degree}</h2>
          <h1>{major[currentMajor].title}</h1>
        </div>
      </div>


      <div className={styles.regHeaderContainer} style={{ width: "80%", marginTop: "50px" }}>
        <div className={styles.regRight} style={{ borderRadius: "10px 0 0px 10px", backgroundImage: `url(${major[currentMajor].major_profile_page})` }} ></div>
        <div style={{ borderRadius: "0px 10px 10px 0px", color: "white", }} className={styles.regLeft}>
          <h3 style={{ fontWeight: "600", marginTop: "50px" }}>{major[currentMajor].major_question}</h3>
          <p style={{ fontSize: "14px", letterSpacing: "1px", fontWeight: "300", color: "#FFFFFF" }}>{major[currentMajor].major_anwser_1}</p>
          <p style={{ fontSize: "14px", letterSpacing: "1px", fontWeight: "300", color: "#FFFFFF" }}>{major[currentMajor].major_anwser_2}</p>
        </div>
      </div>

      <div className={styles.MajorDetailContainer}>
        <h1>{major[currentMajor].path_question}</h1>
        <p>{major[currentMajor].path_answer_1}</p>
        <p>{major[currentMajor].path_answer_2}</p>
        <div className={styles.cardContainer}>
          {major[currentMajor].careers.map(career => {
            return (
              <CardCareer text={career.career_name} img={career.career_img} ></CardCareer>
            )
          }
          )}
        </div>
        <Ruler title='Programme Curriculum' color='gold' width='60%'></Ruler>


        <div class={styles.imageSchedule}>
          <img src={schedule} alt="schedule" />
        </div>


        {/* <Ruler title='Required Documents' color='gold' width='60%'></Ruler>
        <p style={{ color: "#16a062", fontWeight: "600", fontSize: "18" }}>The full list of required paperwork for online registration at SETEC INSTITUTE is provided below, along with thorough instructions. A few documents must be submitted at the time of registration, and the remaining ones can be supplied once you have been determined to be eligible for the program of your choosing.</p>
        <h2><u>Passport Pictures</u></h2>
        <ul>
          <li>A 4x6" blue background is required.</li>
          <li>Must be taken with white shirt with black jacket or in clothes normally worn on a daily basis (i.e. no costumes or gowns).
          </li>
          <li>Avoid wearing anything with exposed shoulders, such as a tank top.
          </li>
          <li>Do not wear uniforms, hats or other head coverings except for religious purposes.
          </li>
          <li>Both ears, as well as the face, need to be clearly visible without any obstructions or shadows.</li>
          <li>blue clothes are not acceptable as the background is blue.
          </li>
          <li>The subject of the photograph needs to be facing ahead and staring directly at the camera.</li>
          <li>It's best to have a neutral attitude. Excessive facial expressions are unacceptable, such as smiling so widely that your teeth are visible.</li>
          <li>Spectacles must be removed.
          </li>
          <li>No part of the face may be hidden by hair. Adjust it so that you can see the complete face.</li>
        </ul>

        <h2><u>National ID Card | Passport | Birth Certificate</u></h2>
        <h3>For Cambodian applicants</h3>
        <ul >
          <li>A colour copy of the IC is required, front and back.</li>
        </ul>
        <h3>For international applicants</h3>
        <ul >
          <li>A full color copy of the passport is required (not including blank pages and cover pages).</li>
          <li>Passport must be scanned as one PDF file.</li>
          <li>Each pdf page must show two pages of the passport.</li>
          <li>Passport must be valid at least 12 months from the date of submission to the university.</li>
        </ul>
        <h2><u>Certificate or Academic Transcript</u></h2>
        <ul>
          <li>Transcripts and certificates of Bacll, or its equivalent are required achieved by the applicant.</li>
          <li>If the documents are not in English, applicants must provide copies of both the original and official English-translated versions.</li>
          <li>All certificates must be attested by the Ministry of Higher Education/Cambodian Embassy.</li>
          <li>Copy must be clear and in full color. The transcript's content and serial number must be easy to read.</li>
        </ul>
        <div style={{ display: "flex", paddingTop: "30px" }}>
          <ButtonPrimary text="Enroll Now" color='#EBBB08' to='/registerform' ></ButtonPrimary>
        </div> */}
        <Ruler title='Alumni' color='gold' width="85%"></Ruler>
        <div className={styles.alumniContainer}>
          <div className={styles.alumniImg} style={{ backgroundImage: `url(${major[currentMajor].alumni_img})` }} ></div>
          <div className={styles.alumniTxt}>
            <p style={{ color: "white" }}>{major[currentMajor].alumni_words}
              <h4>{major[currentMajor].alumni_name}</h4>
              <h4>{major[currentMajor].alumni_position}</h4>
            </p>
          </div>
        </div>
      </div>
      <div style={{ width: '100%', marginTop: '100px', marginBottom: '0px', position: "relative" }}><img width='100%' src={buttom} alt='asd'></img></div>
    </div>
  )
}

export default MajorDetail
