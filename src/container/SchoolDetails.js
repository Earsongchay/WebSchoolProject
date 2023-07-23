import React from 'react'
import ButtonPrimary from '../components/ButtonPrimary'
import styles from '../Styles.module.css'

const SchoolDetails = ({title,desc}) => {
    return (
        <div className={`${styles.detailsContainer} ${styles.flexColumn}`}>
            <h2>{title}</h2>
            <div className={styles.desc}>{desc}</div>
            <ButtonPrimary to='/aboutus' classname={styles.btnDegree} text='More About School' color='#16a062'></ButtonPrimary>
        </div>
    )
        
}

export default SchoolDetails
