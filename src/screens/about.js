import React from 'react'
import MajorContainer from '../container/MajorContainer'
import styles from '../Styles.module.css'
import buttom from '../assets/images/Group 26.jpg'
import Ruler from '../components/Ruler'

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
      <div style={{width:'100%',marginTop:'70px', marginBottom:'0px'}}></div>
      <Ruler title='Our Institude Location' width="70%"></Ruler>
      <div style={{ margin: "0 auto", width: "50%", height: "450px", padding:"30px"}}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.773534226551!2d104.89215657476416!3d11.568086088632946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31095173761d4a53%3A0xcd09ff2f4d326e3f!2sSETEC%20Institute!5e0!3m2!1sen!2skh!4v1690108786088!5m2!1sen!2skh" style={{ border: "0", width: "100%", height: "100%" }} title='lmao'></iframe>
      </div>
    </div>
  )
}

export default AboutScreen;