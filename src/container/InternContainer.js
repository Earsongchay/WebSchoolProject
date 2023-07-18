import React from 'react'
import styles from '../Styles.module.css'

function InternContainer(props) {
  return (
    <div className={styles.internContainer}>
      {props.children}
    </div>
  )
}

export default InternContainer
