import React from 'react'
import styles from '../Styles.module.css'
import fd1 from '../assets/images/fd1.png'
function CardCareer({img = fd1,text}) {
    return (
        <div className={styles.card}>
            <div className={styles.cardImg}><div style={{ backgroundImage:`url(${img})` }}></div></div>
            <div className={styles.cardTitle}>
                <h4>{text}</h4>
            </div>
        </div>
    )
}

export default CardCareer
