import React from 'react'
import angkor from '../assets/images/Rectangle 29.png'
import styles from '../Styles.module.css'

function News({title,desc,Image = angkor}) {
  return (
    <div className={styles.newsCard}>
        <div className={styles.newsImg} style={{ width: '420px' ,backgroundImage:`url(${Image})`}}>
          <div className={styles.smallBox}>
           <p>May</p>
           <p>29</p>
          </div>
        </div>
        <div className={styles.newsDetails}>
            <h3 className={styles.newsTitle}> {title}</h3>
            <div className='tittle'>
              <p>{desc}</p>
            </div>
            <div className='time'>
              <p>10:00 PM</p>
            </div>
        </div>
        
    </div>
  )
}

export default News
