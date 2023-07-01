import React from 'react';
import styles from '../Styles.module.css';



const ButtonPrimary = ({to='/',text,color="#f8bd01",classname=styles.btnPrimary})=>{
  return(
    <a href={to} className={classname} style={{backgroundColor:color}}>
      <div className={styles.btn} >{text}</div>
    </a>
  )
}
export default ButtonPrimary
