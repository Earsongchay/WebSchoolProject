import React, { useState } from 'react'
import Major from './Major'
import visual from '../assets/images/Graphic_Design.png'
import fashion from '../assets/images/Fashion_Design.jpg'
import interior from '../assets/images/Interior_Achitect.jpg'
import architect from '../assets/images/Architecture.jpg'
import mis from '../assets/images/MIS.jpg'
import bit from '../assets/images/BIT.jpg'
import styles from '../Styles.module.css';

function MajorContainer() {
  const [degreeType, setDegreeType] = useState('Bachelor');
  return (

    <div className={styles.majorContainer}>
      <h1>Academic Majors</h1>
      <div className={styles.boxButton}>
        <button className={degreeType === 'Associate' ?styles.btnDegree : styles.degreeActive } onClick={()=>{setDegreeType('Associate')}} >Associate Degree</button>
        <button className={degreeType === 'Bachelor' ?styles.btnDegree : styles.degreeActive } onClick={()=>{setDegreeType('Bachelor')}} >Bachelor Degree</button>
        <button className={degreeType === 'Master' ?styles.btnDegree : styles.degreeActive } onClick={()=>{setDegreeType('Master')}} >Master Degree</button>
      </div>

      {degreeType === 'Bachelor' && <div className={styles.majorsBox}>
        <Major to='/major/' index={1} Image={visual} title='Visual Communication' desc="Anything that you see out there, whether it is online or printed as magazines, billboards or packaging, behind the vibrant images is a designer who has mastered the use of digital tools to promote products and services." ></Major>
        <div className='fashion'><Major to='/major/' index={0} Image={fashion} title='Fashion Design' desc="The fashion industry is both glamorous and demanding. Before you can start making plans to start your own labels, there is a lot to understand about cutting techniques, fabric types, the use of certain tools, and technology. It is definitely exciting." ></Major></div>
        <div className='mis'><Major to='/major/' index={2} Image={mis} title='Mangement Information System' desc="The usage of information technology has expanded quickly in the nation as private organizations and the system have been changed to meet societal needs. That is why the Labor Organization is modifying its system to grow and make them capable of competing by utilizing information technology and human resources, whether public or private." ></Major></div>
        <Major to='/major/' index={3} Image={interior} title='Interior Architect' desc="Becoming an interior architect will teach you how to organize and create the interiors of public, commercial, recreational, institutional, and residential structures." ></Major>
        <Major to='/major/' index={4} Image={bit} title='Business Information Technology' desc="Business success in the modern era of fierce competition depends heavily on the effective use of information technology. BIT will provide you with dual knowledge of both business and IT practices." ></Major>
        <Major to='/major/' index={5} Image={architect} title='Architecture' desc="From the most modest dwellings to the most spectacular skyscrapers, architecture, which is regarded as the 'mother of all arts,' affects everyone's lives." />
      </div>}
      {degreeType === 'Associate' && <div className={styles.majorsBox}>
        <Major to='/major/' index={1} Image={visual} title='Visual Communication' desc="Anything that you see out there, whether it is online or printed as magazines, billboards or packaging, behind the vibrant images is a designer who has mastered the use of digital tools to promote products and services." ></Major>
        <div className='mis'><Major to='/major/' index={2} Image={mis} title='Mangement Information System' desc="The usage of information technology has expanded quickly in the nation as private organizations and the system have been changed to meet societal needs. That is why the Labor Organization is modifying its system to grow and make them capable of competing by utilizing information technology and human resources, whether public or private." ></Major></div>
        <Major to='/major/' index={3} Image={interior} title='Interior Architect' desc="Becoming an interior architect will teach you how to organize and create the interiors of public, commercial, recreational, institutional, and residential structures." ></Major>
        <Major to='/major/' index={4} Image={bit} title='Business Information Technology' desc="Business success in the modern era of fierce competition depends heavily on the effective use of information technology. BIT will provide you with dual knowledge of both business and IT practices." ></Major>
        </div>}
        {degreeType === 'Master' && <div className={styles.majorsBox}>
        <Major to='/major/' index={1} Image={visual} title='Visual Communication' desc="Anything that you see out there, whether it is online or printed as magazines, billboards or packaging, behind the vibrant images is a designer who has mastered the use of digital tools to promote products and services." ></Major>
        <div className='mis'><Major to='/major/' index={2} Image={mis} title='Mangement Information System' desc="The usage of information technology has expanded quickly in the nation as private organizations and the system have been changed to meet societal needs. That is why the Labor Organization is modifying its system to grow and make them capable of competing by utilizing information technology and human resources, whether public or private." ></Major></div>
        <Major to='/major/' index={3} Image={interior} title='Interior Architect' desc="Becoming an interior architect will teach you how to organize and create the interiors of public, commercial, recreational, institutional, and residential structures." ></Major>
        </div>}
    </div>
  )
}

export default MajorContainer
