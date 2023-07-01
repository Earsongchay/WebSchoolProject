import React from 'react'
import ButtonPrimary from '../components/ButtonPrimary';
import styles from '../Styles.module.css'

function ApplyDetails() {
  return(
    <div className={styles.applyDetails}>
        <div className={styles.left}></div>
        <div className={`${styles.right} ${styles.flexColumn}`}>
            <h2>Apply For Admission</h2>
            <p style={{color:'#f8bd01'}}>Applications for Academic Year 2020-2021 are now open</p>
            <p>Register with us today to get an international quality education with affordable fees at your doorstep. We are accepting national and international applicants with a full range of backgrounds.</p>
            <div className= {`${styles.buttonBox} ${styles.flexColumn}`}>
                  <ButtonPrimary to='/' text='Undergraduate' classname={`${styles.btnPrimary} ${styles.bounceTop}`}></ButtonPrimary>
                  <ButtonPrimary to='/' text='Postgraduate'></ButtonPrimary>
                  <ButtonPrimary to='/' text='International'></ButtonPrimary>   
            </div>
        </div>
    </div>
  )
}

export default ApplyDetails
