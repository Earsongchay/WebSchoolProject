import React from 'react'
import styles from '../Styles.module.css'

function InputField({value, inputType ='text',inputId,inputName ,label = 'please enter', inputClass = styles.inputField }) {
    return (
        <div className={styles.inputContainer}>
            <label for={inputId} className={styles.inputLabel}>{label}</label>
            <input type={inputType} className={inputClass} name={inputName} value={value}  id={inputId}></input>
        </div>
    )
}

export default InputField
