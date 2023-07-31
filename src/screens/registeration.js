import { useState } from 'react'
import React from 'react'
import styles from '../Styles.module.css'
import ButtonPrimary from '../components/ButtonPrimary'
import InputField from '../components/InputField'
import InputFileField from '../components/InputFileField'
import axios from 'axios'

function Registeration() {

    const [isLoading, setIsLoading] = useState(false)

    const [emailParams, setEmailParams] = useState({
        service_id: 'service_gy3exoe',
        template_id: 'template_e6tey7m',
        user_id: 'eHcGOcBn7zwkHroMf',
        template_params: {
            to_email: '',
            from_name: '',
            message: ''
        }
    })

    const [validationMessage, setValidationMessage] = useState({
        semester: '',
        about: '',
        first_name: '*',
        last_name: '*',
        phone_number: "*",
        gender: '*',
        date_of_birth: '*',
        email: '*',
        isPermernant: '',
        current_address: '*',
        permanent_address: '*',
        emergency_phone_number: "*",
        emergency_address: '',
        emergency_name: '*',
        emergency_relationship: '*',
        emergency_email: '',
        exam_certificate: '*',
        old_uni_credit: '',
        english_proficiency: '*',
        high_school_diploma: '',
        high_school_transcript: '',
        nat_highschool: '',
        nat_graduated_year: '',
        nat_grade: '',
        nat_total_score: '',
        nat_exam_year: '',
        nat_exam_seat: '',
        nat_exam_center: '',
        major_preference: '*',
        isLocal: '',
        high_school_name: '',
        country: '',
        old_uni_name: '',
        old_uni_country: '',
        old_uni_major: '',
        start_date: '',
        end_date: '',
        id_img: '',
        img: '*',
    });

    const [selectedType, setSelectedType] = useState(1);

    const  [studentType,setStudentType] = useState('Bachelor');

    const [student, setStudent] = useState({
        register_type: selectedType,
        identify_type: 2,
        semester: '',
        about: '',
        first_name: 'Ear',
        last_name: 'Songchay',
        phone_number: "087546553",
        gender: 'm',
        date_of_birth: '',
        email: 'earsongchay@gmail.com',
        isPermernant: '',
        current_address: 'pp',
        permanent_address: 'pp',
        emergency_phone_number: "087546553",
        emergency_address: '',
        emergency_name: 'Chanda',
        emergency_relationship: '',
        emergency_email: '',
        exam_certificate: '',
        old_uni_credit: '',
        english_proficiency: '',
        high_school_diploma: '',
        high_school_transcript: '',
        nat_highschool: '',
        nat_graduated_year: null,
        nat_grade: '',
        nat_total_score: '',
        nat_exam_year: '',
        nat_exam_seat: '',
        nat_exam_center: '',
        major_preference: '',
        isLocal: '',
        high_school_name: '',
        country: '',
        old_uni_name: '',
        old_uni_country: '',
        old_uni_major: '',
        start_date: '',
        end_date: '',
        id_img: '',
        img: '',
        student_type: studentType,
        status: '1',
        created_at: new Date().toISOString().slice(0,19).replace("T"," "),
    });

    const [isSuccess, setIsSuccess] = useState(false)

    const token = `NEbfVDUYUKdkRBAlN0ZcwaM907eiUBC87wzsRiAsUEI3swUoTZ9uB0UsjSlo`

    const handleClick = (registerType) => {
        setSelectedType(registerType);
        handleChange('register_type', parseInt(registerType));
    }

    const handleValidation = async (value) => {
        setValidationMessage(value)
        console.log(value)
    }

    const sendEmail = async () => {
        try {
          const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(emailParams),
          });
    
          const data = await response.json();
          console.log('Email sent successfully!', data);
        } catch (error) {
          console.error('Error sending email:', error);
        }
      };

    const submitHandler = async (e) => {
        e.preventDefault();
        setIsLoading(true)
        const formStudent = new FormData();
        setEmailParams({
            service_id: 'service_gy3exoe',
            template_id: 'template_e6tey7m',
            user_id: 'eHcGOcBn7zwkHroMf',
            template_params: {
                to_email: student.email,
                from_name: 'LIM Bunheng',
                to_name: student.first_name + ' ' + student.last_name,
            }
        })
        for (const key in student) {
            formStudent.append(key, student[key]);
        }
        axios.post('http://127.0.0.1:8000/api/v1/schools/international-register', formStudent, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'multipart/form-data;boundary=<calculated when request is sent>',
            },
        }).then(() => {
            sendEmail()
            setIsSuccess(true)
            setIsLoading(false)
        })
            .catch(
                (error) => {
                    if (error.response) {
                        console.log(error.response.data.error.message);
                        handleValidation(error.response.data.error.message)
                        // console.log(error.response.status);
                        // console.log(error.response.headers);
                        setIsLoading(false)
                    } else if (error.request) {
                        console.log(error.request);
                        setIsLoading(false)
                    } else {
                        console.log('Error', error.message);
                        setIsLoading(false)
                    }
                    console.log(error.config);
                });
        console.log(emailParams)
    };


    const handleFileChange = (e, inputName) => {
        const file = e.target.files[0];
        setStudent((prevSelectedFiles) => ({
            ...prevSelectedFiles,
            [inputName]: file,
        }));
    };
    const handleChange = (field, value) => {
        setStudent((prevState) => ({
            ...prevState,
            [field]: value,
        }));
    }

    return (
        <div>
            {!isSuccess && <div className={styles.register}>
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
                            <button className={`${styles.typeStudent} ${selectedType === 1 ? `${styles.active}` : ''}`} onClick={() => { handleClick(1) }}>Cambodian</button>
                            <button className={`${styles.typeStudent} ${selectedType === 3 ? `${styles.active}` : ''}`} onClick={() => { handleClick(3) }}>Transfer</button>
                            <button className={`${styles.typeStudent} ${selectedType === 2 ? `${styles.active}` : ''}`} onClick={() => { handleClick(2) }} >International</button>
                            {/* <button className={`${styles.typeStudent} ${selectedType === 'Associate' ? `${styles.active}` : ''}`} onClick={() => { handleClick('Associate') }} >Associate</button> */}
                        </div>
                    </div>



                    <form onSubmit={submitHandler} encType='multipart/form-data' className={styles.formInput}>
                        <div className={styles.formFirstPart}>
                            <div className={styles.inputContainer}>
                                <div className={styles.validationMessage}>{validationMessage.semester}</div>
                                <label className={styles.inputLabel}>DEGREE</label>
                                <select
                                    onChange={(e) => {
                                        let value = e.target.value;
                                        handleChange('student_type',value)
                                        value === 'Associate' ? setStudentType('Associate') : value === 'Master' ?
                                        setStudentType('Master') : setStudentType('Bachelor')
                                        
                                    }}
                                    className={styles.inputField}
                                >
                                    <option selected>Bachelor</option>
                                    <option>Associate</option>
                                    <option>Master</option>
                                </select>
                            </div>
                            <h2>Personal Information</h2>
                            <div className={styles.inputContainer}>
                                <div className={styles.validationMessage}>{validationMessage.about}</div>
                                <label className={styles.inputLabel}>How did you hear about SETEC?</label>
                                <select value={student.about} onChange={(e) => { handleChange('about', e.target.value) }} className={styles.inputField}>
                                    <option>Family</option>
                                    <option>Friends</option>
                                    <option>Social Media</option>
                                    <option>Senior</option>
                                    <option>Others</option>
                                </select>
                            </div>

                        </div>
                        <p>
                            If you are submitting a passport, national identity card, or birth certificate for evaluation, please enter the information exactly as it appears on that document. A space or any other symbol should not be added or removed unless it is also indicated on the identity document.
                        </p>
                        <div className={styles.formSecondPart}>
                            <InputField
                                value={student.first_name}
                                validate={validationMessage.first_name}
                                onChangValue={(value) => { handleChange('first_name', value) }}
                                label='English Family Name' inputType='text'
                            />
                            <div></div>
                            <div className={styles.inputContainer}>
                                <div className={styles.validationMessage}>{validationMessage.last_name}</div>
                                <label htmlFor='last_name' className={styles.inputLabel}>Last Name</label>
                                <input onChange={(e) => handleChange('last_name', e.target.value)} type='text' className={styles.inputField} value={student.last_name}></input>
                            </div>

                            <InputField
                                validate={validationMessage.phone_number}
                                inputName='phoneNumber' label='Phone Number' inputType='number'
                                onChangValue={(value) => handleChange('phone_number', value)}
                                value={student.phone_number}
                            ></InputField>
                            <div></div>
                            <div className={student.gender}>
                                <div className={styles.validationMessage}>{validationMessage.gender}</div>
                                <h5>Gender</h5>
                                <label htmlFor='gender'>Male</label>
                                <input checked onChange={(e) => { handleChange('gender', e.target.value) }} name='gender' type='radio' value='m' />
                                <label htmlFor='gender'>Female</label>
                                <input onChange={(e) => { handleChange('gender', e.target.value) }} name='gender' type='radio' value='f' />
                            </div>
                            <InputField
                                validate={validationMessage.date_of_birth}
                                onChangValue={(value) => handleChange('date_of_birth', value)}
                                value={student.date_of_birth} inputName='dob' label='Date of birth' inputType='date' className={`${styles.inputField}`}></InputField>
                            <div></div>
                            <InputField validate={validationMessage.email} onChangValue={(value) => handleChange('email', value)}
                                value={student.email} inputName='email' label='Email' inputType='email' ></InputField>


                            <div className={styles.gender}>
                                <h5>Is your present address different from your permanent address? </h5>
                                <label htmlFor='yes'>Yes</label>
                                <input name='yesno' onChange={() => { handleChange('isPermernant', 'Yes') }} type='radio' value='yes' />
                                <label htmlFor='no'>No</label>
                                <input onChange={() => { handleChange('isPermernant', 'No') }} name='yesno' type='radio' value='no' />
                            </div>


                            <div></div>
                            <div></div>
                            <InputField validate={validationMessage.current_address} onChangValue={(value) => handleChange('current_address', value)}
                                value={student.current_address} inputName='currentAddress' label='Current Address' inputType='text' ></InputField>
                            <div></div>


                            <InputField onChangValue={(value) => handleChange('permanent_address', value)}
                                validate={validationMessage.permanent_address}
                                value={student.permanent_address} inputName='permanentAddress' label='Permanent Address' inputType='text' ></InputField>


                            <InputField
                                validate={validationMessage.emergency_phone_number}
                                inputName='emergencyPh'
                                onChangValue={(value) => handleChange('emergency_phone_number', value)}
                                value={student.emergency_phone_number} label='Emergency contact phone number' inputType='number' ></InputField>
                            <div></div>


                            <InputField inputName='englishNameAdd'
                                onChangValue={(value) => handleChange('emergency_address', value)}
                                value={student.emergency_address}
                                label='Emergency contact address' inputType='text'
                                validate={validationMessage.emergency_address}
                            />


                            <InputField
                                onChangValue={(value) => handleChange('emergency_name', value)}
                                value={student.emergency_name}
                                inputName='emergencyName'
                                label='Emergency contact name'
                                inputType='text'
                                validate={validationMessage.emergency_name}
                            />
                            <div></div>


                            <InputField inputName='emergencyEmail'
                                onChangValue={(value) => handleChange('emergency_email', value)}
                                value={student.emergency_email}
                                label='Emergency contact email'
                                inputType='email'
                                validate={validationMessage.emergency_email}
                            />


                            <div className={styles.inputContainer}>
                                <div className={styles.validationMessage}>{validationMessage.emergency_relationship}</div>
                                <label className={styles.inputLabel}>Emergency contact relationship</label>
                                <select value={student.emergency_relationship} onChange={(e) => { handleChange('emergency_relationship', e.target.value) }} className={styles.inputField} placeholder='-- Please select an option --'>
                                    <option>Parent</option>
                                    <option>Cousin</option>
                                    <option>Aunt</option>
                                    <option>Uncle</option>
                                    <option>Brother</option>
                                    <option>Sister</option>
                                    <option>Others</option>
                                </select>
                            </div>
                            <div></div>



                            <div className={styles.gender} style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
                                <div className={styles.validationMessage}>{validationMessage.img}</div>
                                <div className={styles.validationMessage}>{validationMessage.id_img}</div>
                                <h5>Please upload ONE of the following:</h5>
                                <div>
                                    <label htmlFor='nationalIDCard' className={styles.vertifyLabel}>National ID Card</label>
                                    <input onChange={(e) => { handleFileChange(e, 'img') }} name='nationalIDCard' id='nationalIDCard' type='file' className={styles.vertify} />
                                    <label htmlFor='birthCertificate' className={styles.vertifyLabel}>Birth Certificate</label>
                                    <input name='birthCertificate' id='birthCertificate' onChange={(e) => { handleFileChange(e, 'id_img') }} type='file' className={styles.vertify} />
                                    <label htmlFor='passport' className={styles.vertifyLabel}>Passport</label>
                                    <input name='passport' id='passport' type='file' onChange={(e) => { handleFileChange(e, 'id_img') }} className={styles.vertify} />
                                </div>
                            </div>
                        </div>


                        {selectedType === 2 && (
                            <div className={styles.internationalContainer}>
                                <h2>Academic Information</h2>
                                <div className={styles.LocalFormContainer}>
                                    <InputField
                                        value={student.high_school_name}
                                        onChangValue={(value) => { handleChange('high_school_name', value) }}
                                        inputType='text'
                                        label='High School'
                                        validate={validationMessage.high_school_name}
                                    />
                                    <div></div>
                                    <InputField
                                        value={student.country}
                                        onChangValue={(value) => { handleChange('country', value) }}
                                        validate={validationMessage.country}
                                        inputType='text'
                                        label='Country'
                                    />
                                    <InputField
                                        value={student.nat_graduated_year}
                                        onChangValue={(value) => { handleChange('nat_graduated_year', value) }}
                                        inputType='number'
                                        label='Graduation or Expected Year'
                                        validate={validationMessage.nat_graduated_year}
                                    />
                                </div>

                                <InputFileField onChangValue={(e) => { handleFileChange(e, 'high_school_diploma') }} validate={validationMessage.high_school_diploma} label='High School Diploma' />
                                <InputFileField onChangValue={(e) => { handleFileChange(e, 'high_school_transcript') }} validate={validationMessage.high_school_transcript} label='High School Transcript'></InputFileField>
                                <InputFileField onChangValue={(e) => { handleFileChange(e, 'exam_certificate') }} validate={validationMessage.exam_certificate} label='National Examination Certificate'></InputFileField>
                                <InputFileField onChangValue={(e) => { handleFileChange(e, 'english_proficiency') }} validate={validationMessage.english_proficiency} label='English Proficiency'></InputFileField>
                                <div className={styles.validationMessage}>{validationMessage.major_preference}</div>
                                <h2>Major Reference</h2>
                                <div className={styles.majorRef}>
                                    <div>
                                        <input onChange={(e) => { handleChange('major_preference', 'MIS') }} name='major' type='radio' value='mis' id='mis' /><label htmlFor='mis'>Bachelor of Science in Management Information System</label>
                                    </div>
                                    <div>
                                        <input onChange={(e) => { handleChange('major_preference', 'BIT') }} name='major' type='radio' value='bit' id='bit' /><label htmlFor='bit'>Bachelor of Science in Business Information Technology</label>
                                    </div><div>
                                        <input onChange={(e) => { handleChange('major_preference', 'GD') }} name='major' type='radio' value='gd' id='gd' /><label htmlFor='gd'>Bachelor of Arts in Visual Communication (Graphic Design)</label>
                                    </div><div>
                                        <input onChange={(e) => { handleChange('major_preference', 'FD') }} name='major' type='radio' value='fd' id='fd' /><label htmlFor='fd'>Bachelor of Arts in Fashion Design</label>
                                    </div><div>
                                        <input onChange={(e) => { handleChange('major_preference', 'SA') }} name='major' type='radio' value='sa' id='sa' /><label htmlFor='sa'>Bachelor of Science in Architecture</label>
                                    </div><div>
                                        <input onChange={(e) => { handleChange('major_preference', 'SID') }} name='major' type='radio' value='sid' id='sid' /><label htmlFor='sid'>Bachelor of Science in Interior Design</label>
                                    </div>
                                </div>

                            </div>
                        )}

                        {studentType === 'Bachelor' && (
                            <div className={styles.LocalForm}>
                                <h2>Academic Information</h2>
                                <div className={styles.LocalFormContainer}>
                                    <InputField validate={validationMessage.high_school_name} inputType='text' label='High School'></InputField>
                                    <div></div>
                                    <InputField validate={validationMessage.nat_exam_year} inputType='number' label='Graduation or Expected Year'></InputField>
                                </div>
                                <h2>National Examination</h2>
                                <div className={styles.nationalExam}>
                                    <InputField validate={validationMessage.nat_grade} inputType='text' label='National Exam Grade'></InputField>
                                    <InputField validate={validationMessage.nat_total_score} inputType='number' label='National Exam Total Score'></InputField>
                                    <InputField validate={validationMessage.nat_exam_year} inputType='number' label='Year of National Exam'></InputField>
                                    <InputField validate={validationMessage.nat_exam_seat} inputType='text' label='Seat'></InputField>
                                    <InputField validate={validationMessage.nat_exam_center} inputType='text' label='Exam Center'></InputField>
                                    <div></div>
                                </div>
                                <InputFileField validate={validationMessage.exam_certificate} onChangValue={(e) => { handleFileChange(e, 'exam_certificate') }} label='National Examination Certificate or Posted Result'></InputFileField>
                                <InputFileField validate={validationMessage.english_proficiency} onChangValue={(e) => { handleFileChange(e, 'english_proficiency') }} label='English Proficiency'></InputFileField>
                                <div className={styles.validationMessage}>{validationMessage.major_preference}</div>
                                <h2>Major Reference</h2>
                                <div className={styles.majorRef}>
                                    <div>
                                        <input onChange={(e) => { handleChange('major_preference', e.target.value.toUpperCase()) }} name='major' type='radio' value='mis' id='mis' /><label htmlFor='mis'>Bachelor of Science in Management Information System</label>
                                    </div>
                                    <div>
                                        <input onChange={(e) => { handleChange('major_preference', e.target.value.toUpperCase()) }} name='major' type='radio' value='bit' id='bit' /><label htmlFor='bit'>Bachelor of Science in Business Information Technology</label>
                                    </div><div>
                                        <input onChange={(e) => { handleChange('major_preference', e.target.value.toUpperCase()) }} name='major' type='radio' value='gd' id='gd' /><label htmlFor='gd'>Bachelor of Arts in Visual Communication (Graphic Design)</label>
                                    </div><div>
                                        <input onChange={(e) => { handleChange('major_preference', e.target.value.toUpperCase()) }} name='major' type='radio' value='fd' id='fd' /><label htmlFor='fd'>Bachelor of Arts in Fashion Design</label>
                                    </div><div>
                                        <input onChange={(e) => { handleChange('major_preference', e.target.value.toUpperCase()) }} name='major' type='radio' value='sa' id='sa' /><label htmlFor='sa'>Bachelor of Science in Architecture</label>
                                    </div><div>
                                        <input onChange={(e) => { handleChange('major_preference', e.target.value) }} name='major' type='radio' value='sid' id='sid' /><label htmlFor='sid'>Bachelor of Science in Interior Design</label>
                                    </div>
                                </div>
                            </div>
                        )}

                        {studentType === 'Associate' && (
                            <div className={styles.LocalForm}>
                                <h2>Academic Information</h2>
                                <div className={styles.LocalFormContainer}>
                                    <InputField validate={validationMessage.high_school_name} inputType='text' label='High School'></InputField>
                                    <div></div>
                                    <InputField validate={validationMessage.nat_exam_year} inputType='number' label='Graduation or Expected Year'></InputField>
                                </div>
                                <h2>National Examination</h2>
                                <div className={styles.nationalExam}>
                                    <InputField validate={validationMessage.nat_exam_year} inputType='number' label='Year of National Exam'></InputField>
                                    <InputField validate={validationMessage.nat_exam_seat} inputType='text' label='Seat'></InputField>
                                    <InputField validate={validationMessage.nat_exam_center} inputType='text' label='Exam Center'></InputField>
                                    <div></div>
                                </div>
                                <InputFileField validate={validationMessage.exam_certificate} onChangValue={(e) => { handleFileChange(e, 'exam_certificate') }} label='National Examination Identity Card'></InputFileField>
                                <InputFileField validate={validationMessage.english_proficiency} onChangValue={(e) => { handleFileChange(e, 'english_proficiency') }} label='English Proficiency'></InputFileField>
                                <div className={styles.validationMessage}>{validationMessage.major_preference}</div>
                                <h2>Major Reference</h2>
                                <div className={styles.majorRef}>
                                    <div>
                                        <input onChange={(e) => { handleChange('major_preference', e.target.value.toUpperCase()) }} name='major' type='radio' value='amis' id='mis' /><label htmlFor='mis'>Associate of Science in Management Information System</label>
                                    </div>
                                    <div>
                                        <input onChange={(e) => { handleChange('major_preference', e.target.value.toUpperCase()) }} name='major' type='radio' value='abit' id='bit' /><label htmlFor='bit'>Associate of Science in Business Information Technology</label>
                                    </div><div>
                                        <input onChange={(e) => { handleChange('major_preference', e.target.value.toUpperCase()) }} name='major' type='radio' value='agd' id='gd' /><label htmlFor='gd'>Associate of Arts in Visual Communication (Graphic Design)</label>
                                    </div><div>
                                        <input onChange={(e) => { handleChange('major_preference', e.target.value.toUpperCase()) }} name='major' type='radio' value='afd' id='fd' /><label htmlFor='fd'>Associate of Arts in Fashion Design</label>
                                    </div>
                                </div>
                            </div>
                        )}

                        {selectedType === 3 && (
                            <div className={styles.LocalForm}>
                                <h2>Academic Information</h2>
                                <div className={styles.gender}>
                                    <div className={styles.validationMessage}>{validationMessage.isLocal}</div>
                                    <h5>Did you graduate from high school in Cambodia?</h5>
                                    <label htmlFor='graduateYes'>Yes</label>
                                    <input onChange={(e) => { handleChange('isLocal', 'Yes') }} name='graduateLocal' type='radio' value='yes' />
                                    <label htmlFor='graduateNo'>No</label>
                                    <input onChange={(e) => { handleChange('isLocal', 'No') }} name='graduateLocal' type='radio' value='no' />
                                </div>
                                <div className={styles.LocalFormContainer}>
                                    <InputField validate={validationMessage.high_school_name} inputType='text' label='High School'></InputField>
                                    <div></div>
                                    <InputField validate={validationMessage.nat_exam_year} inputType='number' label='Graduation or Expected Year'></InputField>
                                </div>
                                <h2>University Information</h2>
                                <div className={styles.nationalExam}>
                                    <InputField validate={validationMessage.old_uni_name} inputType='text' label='College/Universisty Name'></InputField>
                                    <InputField validate={validationMessage.old_uni_major} inputName='exMajor' inputType='text' label='Major'></InputField>
                                    <div></div>
                                    <InputField validate={validationMessage.start_date} inputType='date' label='Start Date'></InputField>
                                    <InputField validate={validationMessage.end_date} inputType='date' label='End Date'></InputField>
                                    <InputField validate={validationMessage.old_uni_country} inputType='text' label='University Country'></InputField>
                                    <div></div>
                                </div>
                                <p style={{ color: 'red' }}>**Note that only coursework taken within the last five years will be taken into account for transfer</p>
                                <InputField validate={validationMessage.exam_certificate} inputName='nationalExamCertificate' inputType='file' label='Please upload your University Credits'></InputField>

                                <InputField inputName='englishProficiency' inputType='file' validate={validationMessage.english_proficiency} label='English Proficiency'></InputField>
                                <div className={styles.validationMessage}>{validationMessage.major_preference}</div>
                                <h2>Major Reference</h2>
                                <div className={styles.majorRef}>
                                    {/* <div>
                                    <input name='major' type='radio' value='amis' id='amis' /><label htmlFor='amis'>Associate of Science in Management Information System</label>
                                </div>
                                <div>
                                    <input name='major' type='radio' value='agd' id='agd' /><label htmlFor='agd'>Associate of Arts in Visual Communication (Graphic Design)</label>
                                </div><div>
                                    <input name='major' type='radio' value='afd' id='afd' /><label htmlFor='afd'>Associate of Arts in Fashion Design</label>
                                </div><div>
                                    <input name='major' type='radio' value='asa' id='asa' /><label htmlFor='asa'>Associate of Science in Architecture</label>
                                </div><div>
                                    <input name='major' type='radio' value='asid' id='asid' /><label htmlFor='asid'>Associate of Science in Interior Design</label>
                                </div> */}
                                    <div>
                                        <input onChange={(e) => { handleChange('major_preference', e.target.value.toUpperCase()) }} name='major' type='radio' value='mis' id='mis' /><label htmlFor='mis'>Bachelor of Science in Management Information System</label>
                                    </div>
                                    <div>
                                        <input onChange={(e) => { handleChange('major_preference', e.target.value.toUpperCase()) }} name='major' type='radio' value='bit' id='bit' /><label htmlFor='bit'>Bachelor of Science in Business Information Technology</label>
                                    </div><div>
                                        <input onChange={(e) => { handleChange('major_preference', e.target.value.toUpperCase()) }} name='major' type='radio' value='gd' id='gd' /><label htmlFor='gd'>Bachelor of Arts in Visual Communication (Graphic Design)</label>
                                    </div><div>
                                        <input onChange={(e) => { handleChange('major_preference', e.target.value.toUpperCase()) }} name='major' type='radio' value='fd' id='fd' /><label htmlFor='fd'>Bachelor of Arts in Fashion Design</label>
                                    </div><div>
                                        <input onChange={(e) => { handleChange('major_preference', e.target.value.toUpperCase()) }} name='major' type='radio' value='sa' id='sa' /><label htmlFor='sa'>Bachelor of Science in Architecture</label>
                                    </div><div> </div>
                                </div>
                            </div>
                        )}
                        {studentType === 'Master' && (
                            <div className={styles.LocalForm}>
                                <h2>Academic Information</h2>
                                <div className={styles.gender}>
                                    <div className={styles.validationMessage}>{validationMessage.isLocal}</div>
                                    <h5>Did you graduate from high school in Cambodia?</h5>
                                    <label htmlFor='graduateYes'>Yes</label>
                                    <input onChange={(e) => { handleChange('isLocal', 'Yes') }} name='graduateLocal' type='radio' value='yes' />
                                    <label htmlFor='graduateNo'>No</label>
                                    <input onChange={(e) => { handleChange('isLocal', 'No') }} name='graduateLocal' type='radio' value='no' />
                                </div>
                                <div className={styles.LocalFormContainer}>
                                    <InputField validate={validationMessage.high_school_name} inputType='text' label='High School'></InputField>
                                    <div></div>
                                    <InputField validate={validationMessage.nat_exam_year} inputType='number' label='Graduation or Expected Year'></InputField>
                                </div>
                                <h2>University Information</h2>
                                <div className={styles.nationalExam}>
                                    <InputField validate={validationMessage.old_uni_name} inputType='text' label='College/Universisty Name'></InputField>
                                    <InputField validate={validationMessage.old_uni_major} inputName='exMajor' inputType='text' label='Major'></InputField>
                                    <div></div>
                                    <InputField validate={validationMessage.start_date} inputType='date' label='Start Date'></InputField>
                                    <InputField validate={validationMessage.end_date} inputType='date' label='End Date'></InputField>
                                    <InputField validate={validationMessage.old_uni_country} inputType='text' label='University Country'></InputField>
                                    <div></div>
                                </div>
                                <p style={{ color: 'red' }}>**Note that only coursework taken within the last five years will be taken into account for transfer</p>
                                <InputField validate={validationMessage.exam_certificate} inputName='nationalExamCertificate' inputType='file' label='Please upload your University Credits'></InputField>

                                <InputField inputName='englishProficiency' inputType='file' validate={validationMessage.english_proficiency} label='English Proficiency'></InputField>
                                <div className={styles.validationMessage}>{validationMessage.major_preference}</div>
                                <h2>Major Reference</h2>
                                <div className={styles.majorRef}>
                                    <div>
                                        <input onChange={(e) => { handleChange('major_preference', e.target.value.toUpperCase()) }} name='major' type='radio' value='mis' id='mis' /><label htmlFor='mis'>Master of Science in Management Information System</label>
                                    </div>
                                    <div>
                                        <input onChange={(e) => { handleChange('major_preference', e.target.value.toUpperCase()) }} name='major' type='radio' value='bit' id='bit' /><label htmlFor='bit'>Master of Science in Business Information Technology</label>
                                    </div><div>
                                        <input onChange={(e) => { handleChange('major_preference', e.target.value.toUpperCase()) }} name='major' type='radio' value='gd' id='gd' /><label htmlFor='gd'>Master of Arts in Visual Communication (Graphic Design)</label>
                                    </div><div>
                                        <input onChange={(e) => { handleChange('major_preference', e.target.value.toUpperCase()) }} name='major' type='radio' value='fd' id='fd' /><label htmlFor='fd'>Master of Arts in Fashion Design</label>
                                    </div><div>
                                        <input onChange={(e) => { handleChange('major_preference', e.target.value.toUpperCase()) }} name='major' type='radio' value='sa' id='sa' /><label htmlFor='sa'>Master of Science in Architecture</label>
                                    </div><div> </div>
                                </div>
                            </div>
                        )}
                        <button className={styles.submitButton} type='submit'>{isLoading ? "Submitting" : "SUBMIT"}</button>
                    </form>
                </div >
            </div >}
            {isSuccess &&
                <div className={styles.register}>
                    <div className={styles.isSuccess}>
                        <div className={styles.above}>
                            Successfully registered
                        </div>
                        <div className={styles.under}>
                            By completing this electronic application, I hereby attest that the data I have supplied in response to the form's inquiries, as well as data in any supplemental materials I have included, is accurate and complete.
                            <br></br>
                            <br></br>
                            <i>***You will soon receive an email to confirm this registeration.</i>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default Registeration
