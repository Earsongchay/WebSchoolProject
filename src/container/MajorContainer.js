import React from 'react'
import ButtonPrimary from '../components/ButtonPrimary'
import Major from './Major'
import visual from '../assets/images/Graphic_Design.png'
import fashion from '../assets/images/Fashion_Design.jpg'
import interior from '../assets/images/Interior_Achitect.jpg'
import architect from '../assets/images/Architecture.jpg'
import mis from '../assets/images/MIS.jpg'
import bit from '../assets/images/BIT.jpg'
import styles from '../Styles.module.css';

function MajorContainer() {
  return (
    <div className={styles.majorContainer}>
        <h1>Academic Majors</h1>
        <div className={styles.boxButton}>
            <ButtonPrimary classname={styles.btnDegree} text='Associate Degree' to='/' color='#16a062'></ButtonPrimary>
            <ButtonPrimary classname={styles.btnDegree} text='Bachelor Degree' to='/' color='#16a062'></ButtonPrimary>
            <ButtonPrimary classname={styles.btnDegree} text='Master Degree' to='/' color='#16a062'></ButtonPrimary>
        </div>
        <div className={styles.majorsBox}>
            <Major Image={visual} title='Visual Communication' desc="Anything that you see out there, whether it is online or printed as magazines, billboards or packaging, behind the vibrant images is a designer who has mastered the use of digital tools to promote products and services." ></Major>
            <div className='fashion'><Major Image={fashion} title='Fashion Design' desc="The fashion industry is both glamorous and demanding. Before you can start making plans to start your own labels, there is a lot to understand about cutting techniques, fabric types, the use of certain tools, and technology. It is definitely exciting." ></Major></div>
            <div className='mis'><Major Image={mis} title='Mangement Information System' desc="The usage of information technology has expanded quickly in the nation as private organizations and the system have been changed to meet societal needs. That is why the Labor Organization is modifying its system to grow and make them capable of competing by utilizing information technology and human resources, whether public or private." ></Major></div>
            <Major Image={interior} title='Interior Architect' desc="Becoming an interior architect will teach you how to organize and create the interiors of public, commercial, recreational, institutional, and residential structures." ></Major>
            <Major Image={bit} title='Business Information Technology' desc="Business success in the modern era of fierce competition depends heavily on the effective use of information technology. BIT will provide you with dual knowledge of both business and IT practices." ></Major>
            <Major Image={architect} title='Architecture' desc="From the most modest dwellings to the most spectacular skyscrapers, architecture, which is regarded as the 'mother of all arts,' affects everyone's lives." />

        </div>
    </div>
  )
}

export default MajorContainer
