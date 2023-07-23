import React from 'react'
import styles from '../Styles.module.css'
function SubmitButton() {
  return (
    <div>
      <button type='submit' name='submit' className={styles.submitButton}>SUBMIT</button>
    </div>
  )
}

export default SubmitButton