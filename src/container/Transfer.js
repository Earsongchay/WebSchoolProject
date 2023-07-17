import React from 'react'
import InputField from '../components/InputField'
import styles from '../Styles.module.css'

function Transfer() {
  return (
    <div className={styles.LocalForm}>
      <h2>Academic Information</h2>
      <div className={styles.gender}>
        <h5>Did you graduate from high school in Cambodia? </h5>
        <label for='graduateYes'>Yes</label>
        <input name='graduateLocal' type='radio' value='yes' />
        <label for='graduateNo'>No</label>
        <input name='graduateLocal' type='radio' value='no' />
      </div>
      <div className={styles.LocalFormContainer}>
        <InputField inputName='highSchool' inputType='text' label='High School'></InputField>
        <div></div>
        <InputField inputName='expectedYear' inputType='number' label='Graduation or Expected Year'></InputField>
      </div>
      <h2>University Information</h2>
      <div className={styles.nationalExam}>
        <InputField inputName='exSchool' inputType='text' label='College/Universisty Name'></InputField>
        <InputField inputName='exMajor' inputType='text' label='Major'></InputField>
        <div></div>
        <InputField inputName='startUni' inputType='date' label='Start Date'></InputField>
        <InputField inputName='endUni' inputType='date' label='End Date'></InputField>
        <InputField inputName='uniCountry' inputType='text' label='University Country'></InputField>
        <div></div>
      </div>      
      <p style={{ color:'red' }}>**Note that only coursework taken within the last five years will be taken into account for transfer</p>
      <InputField inputName='nationalExamCertificate' inputType='file' label='Please upload your University Credits'></InputField>

      <InputField inputName='englishProficiency' inputType='file' label='English Proficiency'></InputField>
      <h2>Major Reference</h2>
      <div className={styles.majorRef}>
        <div>
          <input name='major' type='radio' value='amis' id='amis'/><label for='amis'>Associate of Science in Management Information System</label>
        </div>
        <div>
          <input name='major' type='radio' value='agd' id='agd'/><label for='agd'>Associate of Arts in Visual Communication (Graphic Design)</label>
        </div><div>
          <input name='major' type='radio' value='afd' id='afd'/><label for='afd'>Associate of Arts in Fashion Design</label>
        </div><div>
          <input name='major' type='radio' value='asa' id='asa' /><label for='asa'>Associate of Science in Architecture</label>
        </div><div>
          <input name='major' type='radio' value='asid' id='asid'/><label for='asid'>Associate of Science in Interior Design</label>
        </div>
      </div>
    </div>
  )
}

export default Transfer
