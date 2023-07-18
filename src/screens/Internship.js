import React from 'react'
import styles from '../Styles.module.css'
import InternCard from '../components/InternCard';
import NewCover from '../components/NewCover';
import Ruler from '../components/Ruler';
import InternContainer from '../container/InternContainer';
import mis3 from '../assets/images/intern/mis3.png'
import interns from '../assets/data/Intern'

function PartnershipScreen() {

  return (
    <div>
      <NewCover title="INTERSHIP PROGRAM"></NewCover>
      
      <div className={styles.intershipContainer}>
        <p>During the last semester of the 4th Year, Students will be exposed to the working environment where they are expected to undertake various activities in the organizations that they are attached to. The Student Internship program (SIP) is an integral part of our curriculum. The 16-week immersion in a working environment will not only enhance the students' understanding of the application of the relevant IT discipline in an organization, but will also provide an opportunity for them to grow into responsible working adults.</p>
        <p>The SIP provides students with an opportunity to apply and integrate the knowledge and skills acquired during their study. Students will be assigned work which requires them to demonstrate independence, initiative, creativity and strong conceptual thinking and proficiency.</p>

        <Ruler title="Architecture" color='gold'></Ruler>
        <InternContainer>
          {interns[0].map(student =>{
            return  <InternCard name={student.name} position={student.position} company={student.company} photo = {student.image}></InternCard>
          })}
        </InternContainer>
        <Ruler title="Management Information System" width="55%" color='gold'></Ruler>
        <InternContainer>
          {interns[1].map(student =>{
            return  <InternCard name={student.name} position={student.position} company={student.company} photo = {student.image}></InternCard>
          })}
        </InternContainer>
        <Ruler title="Business Information Technology" width="55%" color='gold'></Ruler>
        <InternContainer>
          {interns[2].map(student =>{
            return  <InternCard name={student.name} position={student.position} company={student.company} photo = {student.image}></InternCard>
          })}
        </InternContainer>
      </div>
    </div>
  )
}

export default PartnershipScreen;
