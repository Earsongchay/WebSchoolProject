import React from 'react'
import styles from '../Styles.module.css'
import InputField from '../components/InputField'

function LocalForm() {
  return (
    <div className={styles.LocalForm}>
      <h2>Academic Information</h2>
      
      <div className={styles.LocalFormContainer}>
        <InputField inputName='highSchool' inputType='text' label='High School'></InputField>
        <div></div>
        <InputField inputName='expectedYear' inputType='number' label='Graduation or Expected Year'></InputField>
      </div>
      <h2>National Examination</h2>
      <div className={styles.nationalExam}>
        <InputField inputName='grade' inputType='text' label='National Exam Grade'></InputField>
        <InputField inputName='score' inputType='number' label='National Exam Total Score'></InputField>
        <InputField inputName='yearExam' inputType='number' label='Year of National Exam'></InputField>
        <InputField inputName='Seat' inputType='text' label='Seat'></InputField>
        <InputField inputName='examCenter' inputType='text' label='Exam Center'></InputField>
        <div></div>
      </div>
      <InputField inputName='nationalExamCertificate' inputType='file' label='National Examination Certificate or Posted Result'></InputField>
      <InputField inputName='englishProficiency' inputType='file' label='English Proficiency'></InputField>
      <h2>Major Reference</h2>
      <div className={styles.majorRef}>
        <div>
          <input name='major' type='radio' value='mis' id='mis'  /><label for='mis'>Bachelor of Science in Management Information System</label>
        </div>
        <div>
          <input name='major' type='radio' value='bit' id='bit'/><label for='bit'>Bachelor of Science in Business Information Technology</label>
        </div><div>
          <input name='major' type='radio' value='gd' id='gd' /><label for='gd'>Bachelor of Arts in Visual Communication (Graphic Design)</label>
        </div><div>
          <input name='major' type='radio' value='fd' id='fd'/><label for='fd'>Bachelor of Arts in Fashion Design</label>
        </div><div>
          <input name='major' type='radio' value='sa' id='sa'/><label for='sa'>Bachelor of Science in Architecture</label>
        </div><div>
          <input name='major' type='radio' value='sid' id='sid' /><label for='sid'>Bachelor of Science in Interior Design</label>
        </div>
      </div>
    </div>
  )
}

export default LocalForm
