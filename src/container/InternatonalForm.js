import React from 'react'
import styles from '../Styles.module.css'
import InputField from '../components/InputField'


function Internatonal() {
  return (
    <div className={styles.internationalContainer}>
      <h2>Academic Information</h2>
      <div className={styles.LocalFormContainer}>
        <InputField inputName='highSchool' inputType='text' label='High School'></InputField>
        <div></div>
        <InputField inputName='country' inputType='text' label='Country'></InputField>

        <InputField inputName='expectedYear' inputType='number' label='Graduation or Expected Year'></InputField>
      </div>
      
      <InputField inputName='hsDiploma' inputType='file' label='High School Diploma'></InputField>
      <InputField inputName='hsTranscript' inputType='file' label='High School Transcript'></InputField>
      <InputField inputName='hsCertificate' inputType='file' label='National Examination Certificate'></InputField>
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

export default Internatonal
