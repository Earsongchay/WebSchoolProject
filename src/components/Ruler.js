import React from 'react'
import styles from '../Styles.module.css'
function Ruler({title}) {
  return (
    <div className={styles.ruler}>
        <h1>{title}</h1>
        <hr className='hrLine'></hr>
      </div>
  )
}

export default Ruler
