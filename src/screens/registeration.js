import { useState } from 'react'
import LocalForm from '../container/LocalForm'
import International from '../container/InternatonalForm'
import Transfer from '../container/Transfer'
import React from 'react'
import styles from '../Styles.module.css'
import ButtonPrimary from '../components/ButtonPrimary'
import InputField from '../components/InputField'

function Registeration() {
    const [selectedType, setSelectedType] = useState('Cambodian');
    const handleClick = (studentType) => {
        setSelectedType(studentType);

    }
    return (
        <div className={styles.register}>
            <div className={styles.regHeaderContainer}>
                <div className={styles.regLeft}>
                    <div><h1>Setec Registration Precedure</h1></div>
                    <div>Three simple actions are all that are needed to register at Setec Institute and begin your education. When you approach the registration desk, our staff will expedite the process for you.</div>
                    <ButtonPrimary text="BACK" classname={styles.goBack} color='#168A56' to='/academic'></ButtonPrimary>
                </div>
                <div className={styles.regRight}></div>
            </div>
            <div className={styles.formContainer}>
                <div className={styles.typeStudentContainer}>
                    <h1>Complete Your Application Form</h1>
                    <div className={styles.btnTypeStudent}>
                        <button className={`${styles.typeStudent} ${selectedType === 'Cambodian' ? `${styles.active}` : ''}`} onClick={() => { handleClick('Cambodian') }}>Cambodian</button>
                        <button className={`${styles.typeStudent} ${selectedType === 'Transfer' ? `${styles.active}` : ''}`} onClick={() => { handleClick('Transfer') }}>Transfer</button>
                        <button className={`${styles.typeStudent} ${selectedType === 'International' ? `${styles.active}` : ''}`} onClick={() => { handleClick('International') }} >International</button>
                    </div>
                </div>
                <form method='post' encType='multipart/form-data' className={styles.formInput}>
                    <div className={styles.formFirstPart}>
                        <div className={styles.inputContainer}>
                            <label className={styles.inputLabel}>Semester</label>
                            <select className={styles.inputField}>
                                <option>Septepber-15-2023 Intake</option>
                                <option></option>
                                <option></option>
                            </select>
                        </div>
                        <h2>Personal Information</h2>
                        <div className={styles.inputContainer}>
                            <label className={styles.inputLabel}>How did you hear about SETEC?</label>
                            <select className={styles.inputField}>
                                <option>-- Please select an option --</option>
                                <option></option>
                                <option></option>
                            </select>
                        </div>

                    </div>
                    <p>
                        If you are submitting a passport, national identity card, or birth certificate for evaluation, please enter the information exactly as it appears on that document. A space or any other symbol should not be added or removed unless it is also indicated on the identity document.
                    </p>
                    <div className={styles.formSecondPart}>
                        <InputField inputName='englishFamilyName' label='English Family Name' inputType='text' ></InputField>
                        <div></div>
                        <InputField inputName='englishName' label='English Personal Name' inputType='text' ></InputField>
                        <InputField inputName='phoneNumber' label='Phone Number' inputType='number' ></InputField>
                        <div></div>
                        <div className={styles.gender}>
                            <h5>Gender</h5>
                            <label for='male'>Male</label>
                            <input name='gender' type='radio' value='male' />
                            <label for='female'>Female</label>
                            <input name='gender' type='radio' value='female' />
                        </div>
                        <InputField inputName='dob' label='Date of birth' inputType='date' className={`${styles.inputField}`}></InputField>
                        <div></div>
                        <InputField inputName='email' label='Email' inputType='email' ></InputField>
                        <div className={styles.gender}>
                            <h5>Is your present address different from your permanent address? </h5>
                            <label for='yes'>Yes</label>
                            <input name='yesno' type='radio' value='yes' />
                            <label for='no'>No</label>
                            <input name='yesno' type='radio' value='no' />
                        </div>
                        <div></div>
                        <div></div>
                        <InputField inputName='currentAddress' label='Current Address' inputType='text' ></InputField>
                        <div></div>
                        <InputField inputName='permanentAddress' label='Permanent Address' inputType='text' ></InputField>
                        <InputField inputName='emergencyPh' label='Emergency contact phone number' inputType='number' ></InputField>
                        <div></div>
                        <InputField inputName='englishNameAdd' label='Emergency contact address' inputType='text' ></InputField>
                        <InputField inputName='emergencyName' label='Emergency contact name' inputType='text' ></InputField>
                        <div></div>
                        <InputField inputName='emergencyEmail' label='Emergency contact email' inputType='email' ></InputField>
                        <div className={styles.inputContainer}>
                            <label className={styles.inputLabel}>Emergency contact relationship</label>
                            <select className={styles.inputField} placeholder='-- Please select an option --'>
                                <option>-- Please select an option --</option>
                                <option></option>
                                <option></option>
                            </select>
                        </div>
                        <div></div>
                        <div className={styles.gender} style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
                            <h5>Please upload ONE of the following:</h5>
                            <div>
                                <label for='nationalIDCard' className={styles.vertifyLabel}>National ID Card</label>
                                <input name='nationalIDCard' id='nationalIDCard' type='file' className={styles.vertify} />
                                <label for='birthCertificate' className={styles.vertifyLabel}>Birth Certificate</label>
                                <input name='birthCertificateno' id='birthCertificate' type='file' className={styles.vertify} />
                                <label for='passport' className={styles.vertifyLabel}>Passport</label>
                                <input name='passport' id='passport' type='file' className={styles.vertify} />
                            </div>
                        </div>
                    </div>





                    {selectedType === 'International' && (
                        <International></International>
                    )}

                    {selectedType === 'Cambodian' && (
                        <LocalForm></LocalForm>
                    )}

                    {selectedType === 'Transfer' && (
                        <Transfer></Transfer>
                    )}
                </form>
            </div>
        </div >
    )
}

export default Registeration
