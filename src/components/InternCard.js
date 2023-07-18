import React from 'react'
import styles from '../Styles.module.css'

function InternCard(props) {
    return (
        <div className={styles.internCard}>
            <div className={styles.internImage}>
                <div style={{ height:"100%",width:"100%", backgroundPosition:"center",backgroundImage: `url(${props.photo})`, backgroundRepeat:"no-repeat",backgroundSize:"cover",}}></div>
            </div>
            <div className={styles.internDetails}>
                <ul>
                    <li>Name : {props.name}</li>
                    <li>Position : {props.position}</li>
                    <li>Company : {props.company}</li>
                </ul>
            </div>
        </div>
    )
}

export default InternCard
