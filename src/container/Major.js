import React from 'react';
import ButtonPrimary from '../components/ButtonPrimary';
import coverImage from '../assets/images/cover1.png';
import styles from '../Styles.module.css';

function Major({ title, desc,Image =coverImage,to ,index}) {


    return (
        <div className={`${styles.major} ${styles.flexColumn}`}>
            <div className={styles.majorImg} style={{width: '100%' ,backgroundImage: `url(${Image})`}}>  
            </div>
            <div className={`${styles.majorDetails} ${styles.flexColumn}`}>
                <h3>{title}</h3>
                <p className={styles.p}>{desc}</p>
            </div>
            <div className={styles.majorBtns}>
                <ButtonPrimary classname={styles.btnRound} to={to + index} text='Enroll Now' />
                {/* <a href='/' className={styles.more}>More info</a> */}
            </div>
        </div>
    );
}

export default Major;
