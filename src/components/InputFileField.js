import React from 'react'
import styles from '../Styles.module.css'

function InputFileField({ validate, value, inputName, label = 'please enter', inputClass = styles.inputField, onChangValue = () => { } }) {


    const onChangeHandler = (e) => {
        onChangValue(e)
    }
    return (
        <div className={styles.inputContainer}>
             <div className={styles.validationMessage}>{validate}</div>
            <label htmlFor={inputName} className={styles.inputLabel}>{label}</label>
            <input onChange={onChangeHandler} type='file' className={inputClass} name={inputName} value={value}></input>
        </div>
    )
}

export default InputFileField
