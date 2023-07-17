import React from 'react'
import styles from '../Styles.module.css'
function Ruler({width,title,color="black"}) {
  return (
    <div className={styles.ruler}>
        <h1>{title}</h1>
        <hr style={{ width:`${width}`, backgroundColor:`${color}`}}></hr>
      </div>
  )
}

export default Ruler
