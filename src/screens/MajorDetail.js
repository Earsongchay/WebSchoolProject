import React from 'react'
import styles from '../Styles.module.css'
import fdpath from '../../src/assets/images/fdpath.png'
import CardCareer from '../components/CardCareer'
import Ruler from '../components/Ruler'
import schedule from '../../src/assets/images/sche.jpg'
import ButtonPrimary from '../components/ButtonPrimary'
import alumni from '../assets/images/kolab.png'
import buttom from '../assets/images/Group 26.jpg'

function MajorDetail() {
  const major = {
    "degree": "Bachelor of Design",
    "title": "in Fashion Design",
    "major_cover": "",
    "major_profile_page": "",
    "major_question": "What area of study does the Fashion Design program cover?",
    "major_anwser_1": `The Bachelor of Design in Graphic Design (Visual Communication) is a four-year honors degree that aims to gradually improve the creative capacity of the students in conceptualizing and utilizing cutting-edge technical skills. A fashion design course teaches students the fine art of creating attractive garments and accessories for the latest trends. In order to teach students how great fashion designs are created, these courses examine the works of well-known designers and the culture of the time.`,
    "major_anwser_2": `A fashion design course is a course that covers the art of designing beautiful clothing and fashion accessories. These courses look at the work of famous designers and the culture of the time to show students how great fashion designs come to be.`,
    "path_question": "What career pathways are open to graduates of the Fashion Design program?",
    "path_answer_1": `Fashion designers work for design firms, apparel companies, stores, theater or dance companies, and wholesale or manufacturing businesses. In New York and California, fashion designers predominate. The employment of fashion designers is expected to expand by 3%, which is less than the average for all occupations. Over the next ten years, there are expected to be, on average, 2,300 openings for fashion designers, notwithstanding the modest expansion in employment. The majority of those positions are anticipated to be caused by the need to replace workers who change careers or leave the workforce due to retirement.`,
    "path_answer_2": `Generally, Fashion Design graduates can expect to be hired in the following fields:`,
    "path_descript": "",
    "career_name_1": "Fashion Designer",
    "career_img_1": "",
    "career_name_2": "Fashion Show Manager",
    "career_img_2": "",
    "career_name_3": "Retail Manager",
    "career_img_3": "",
    "career_name_4": "Pattern Maker",
    "career_img_4": "",
    "career_name_5": "Visual Merchandiser",
    "career_img_5": "",
    "career_name_6": "Marketing Specialist",
    "career_img_6": "",
    "career_name_7": "Quality Assurance",
    "career_img_7": "",
    "career_name_8": "Custume Designer",
    "career_img_8": "",
    "programme_img": "",
    "alumni_img": "",
    "alumni_name": "Tom Cruis",
    "alumni_words": `One of my biggest achievements so far is that I was able to obtain a degree from such a reputable University – the knowledge and the experience I obtained studying at SETEC enabled me to be a successful business owner. Based on what I have learned from my skilled lecturers and fellow students I have come a long way not just from my design skill set but life in general. Over the years I have learned to appreciate people of different cultures, how to become confident, and importantly “Innovation” taking something already existent and making it more suitable to the current times.`,
    "alumni_position": "Architect at Sorsor Studio",
  }
  return (
    <div className={styles.majorDetail}>
      <div className={styles.majorCover}>
        <div className={styles.majorTitle}>
          <h2>{major.degree}</h2>
          <h1>{major.title}</h1>
        </div>
      </div>

      <div className={styles.regHeaderContainer} style={{ width: "80%", marginTop: "50px" }}>
        <div className={styles.regRight} style={{ borderRadius: "10px 0 0px 10px", backgroundImage: `url(${fdpath})` }} ></div>
        <div style={{ borderRadius: "0px 10px 10px 0px", color: "white", }} className={styles.regLeft}>
          <h3 style={{ fontWeight: "600", marginTop: "50px" }}>{major.major_question}</h3>
          <p style={{ fontSize: "14px", letterSpacing: "1px", fontWeight: "300", color: "#FFFFFF" }}>{major.major_anwser_1}</p>
          <p style={{ fontSize: "14px", letterSpacing: "1px", fontWeight: "300", color: "#FFFFFF" }}>{major.major_anwser_2}</p>
        </div>
      </div>

      <div className={styles.MajorDetailContainer}>
        <h1>{major.path_question}</h1>
        <p>{major.path_answer_1}</p>
        <p>{major.path_answer_2}</p>
        <div className={styles.cardContainer}>
          <CardCareer text={major.career_name_1}></CardCareer>
          <CardCareer text={major.career_name_1}></CardCareer>
          <CardCareer text={major.career_name_1}></CardCareer>
          <CardCareer text={major.career_name_1}></CardCareer>
          <CardCareer text={major.career_name_1}></CardCareer>
          <CardCareer text={major.career_name_1}></CardCareer>
          <CardCareer text={major.career_name_1}></CardCareer>
          <CardCareer text={major.career_name_1}></CardCareer>
        </div>
        <Ruler title='Programme Curriculum' color='gold' width='60%'></Ruler>
        <div style={{ height: '1200px', width: "100%", marginTop: "50px" }}>
          <div style={{ backgroundImage: `url(${schedule})`, height: "100%", width: '100%', backgroundSize: "contain", backgroundRepeat: "no-repeat" }}></div>
        </div>
        <Ruler title='Required Documents' color='gold' width='60%'></Ruler>
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
        <div style={{ display: "flex", paddingTop: "30px" }}><ButtonPrimary text="Enroll Now" color='#EBBB08' to='/registerform' ></ButtonPrimary></div>
        <Ruler title='Alumni' color='gold'></Ruler>
        <div className={styles.alumniContainer}>
          <div className={styles.alumniImg} style={{ backgroundImage: `url(${alumni})` }} ></div>
          <div className={styles.alumniTxt}>
            <p style={{ color: "white" }}>{major.alumni_words}
              <h4>{major.alumni_name}</h4>
              <h4>{major.alumni_position}</h4>
            </p>
          </div>
        </div>
      </div>
      <div style={{ width: '100%', marginTop: '100px', marginBottom: '0px', position: "relative" }}><img width='100%' src={buttom} alt='asd'></img></div>
    </div>
  )
}

export default MajorDetail
