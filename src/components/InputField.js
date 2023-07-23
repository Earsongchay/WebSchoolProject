import React from 'react'
import styles from '../Styles.module.css'

function InputField({validate='', value, inputType = 'text', inputId, inputName, label = 'please enter', inputClass = styles.inputField, onChangValue = () => { } }) {

    const onChangeHandler = (e) => {
        onChangValue(e.target.value)
    }
    return (
        <div className={styles.inputContainer}>
            <div className={styles.validationMessage}>{validate}</div>
            <label htmlFor={inputId} className={styles.inputLabel}>{label}</label>
            <input onChange={onChangeHandler} type={inputType} className={inputClass} value={value}></input>
        </div>
    )
}

export default InputField
