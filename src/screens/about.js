import React from 'react'
import MajorContainer from '../container/MajorContainer'
import styles from '../Styles.module.css'
import buttom from '../assets/images/Group 26.jpg'

function AboutScreen() {
  return (
    <div>
      <div className={styles.headCover}>
        <div className={styles.headCoverImg}></div>
      </div>
      <div className={styles.mainAboutus}>
        <h2>Vision</h2>
        <p>SETEC continues to become a leading private establishment in providing tertiary education in Information Technology and Design in Cambodia and promote quality in education, management, researches and services to an international standard.</p>
        <h2>Mission</h2>
        <p>In order to achieve its vision, SETEC educates and trains students to attain quality of knowledge and ethical values. This will assist them in grasping the job opportunities. To this end SETEC focuses on staff and teacher development, student services, curriculum modernization and facility improvement.</p>
        <h2>Goal</h2>
        <p>SETEC is committed to achieve 5 main goals.</p>
        <ul>
          <li>To continue to enhance quality of tertiary education.</li>
          <li>To promote infrastructure and facility.</li>
          <li>To promote staff and teacher development.</li>
          <li>To strengthen student services to ensure that students achieve success in their study and innovation.</li>
          <li>To promote quality of curriculum development so as to respond to Cambodian educational policy as well as national and international job market.</li>
        </ul>
      </div>
      <MajorContainer></MajorContainer>
      <div style={{width:'100%',marginTop:'100px', marginBottom:'0px'}}><img width='100%' src={buttom} alt='asd'></img></div>
    </div>
  )
}

export default AboutScreen;