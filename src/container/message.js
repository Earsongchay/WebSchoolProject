import React from 'react'
import ButtonPrimary from '../components/ButtonPrimary';
import styles from '../Styles.module.css'

function Message() {
  return (
    <div className={`${styles.msgContainer} ${styles.flexColumn}`}>
        <h1>To Puk Ah Noob</h1>
        <div className={styles.blobAnimate}>
        </div>
        <div className={`${styles.msg}`}><p>"I am pleased to inform all that SETEC is a tertiary educational establishment that specialise on Information Technology and Design. We believe that a good learning environment is important for our students and therefore we have equipped all our classrooms with the necessary such as air-conditioners, LCD projectors and many others. To follow the latest trend, our library is focus more on e-books and video trainings. Our lecturers are qualified with years of teaching experience. Inside SETEC Institute, we have the relevant departments to service our students from fees, attendance, exams to any related student welfare. Our objective is to find jobs for students when they graduated and so therefore we have an Internship department."</p></div>
        <h2>“Mr. Mam Panhavuth”</h2>
        <h3>MIS Lecturer</h3>
        <ButtonPrimary to='/' classname={styles.btnDegree} text='READ MORE' color='#16a062'></ButtonPrimary>
    </div>
  )
}

export default Message
