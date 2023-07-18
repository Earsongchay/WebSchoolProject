import React from 'react'
import NewCover from '../components/NewCover';
import styles from '../Styles.module.css'
import fee from '../assets/images/fee.png'
import bottom from '../assets/images/Group 26.jpg'

function TuitionScreen() {
  return (
    <div>
      <NewCover title="Tuiton Fee" text="The setec Institute’s tuition varies depending on each major."></NewCover>
      <div className={styles.imageSchedule} style={{ width: '80%', margin: "0 auto", marginTop:"80px",marginBottom: "80px" }}>
        <img src={fee} alt='fee'></img>
      </div>
      <div >
        <img className={styles.imageSchedule} src={bottom} alt='bottom' />
      </div>
    </div>
  )
}

export default TuitionScreen;