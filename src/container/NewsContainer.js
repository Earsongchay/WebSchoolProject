import React from 'react'
import styles from '../Styles.module.css'
import News from './News'
import random from '../assets/images/2022_12_06_21_11_IMG_5873.PNG'
import perform from '../assets/images/Fashion_Show.jpg'
import tour from '../assets/images/pherk.jpg'
import ex from '../assets/images/Exhibitiosdfn.jpg'
import sangkran from '../assets/images/sangkran.jpg'
import Ruler from '../components/Ruler'

function NewsContainer() {
  return (
    
    <div id='news' className={styles.allNews}>
      <Ruler title='News & Events'></Ruler>
     <div className={styles.newsContainer}>
      <News desc="Student's Work: Interior Architecture and Graphic Design" title="EXHIBITION" Image={ex}></News>
      <News desc='Fashion | Walk Show modeling, Chip Mong Megamall 271' title='PERFORMANCE' Image={perform}></News>
      <News desc='Students and lecturers together were having party before holidays' title='Sangkran Setec' Image={sangkran}></News>
      <News desc='Cambodia School Tours - Wide Eyed Tours' title='TOUR' Image={tour}></News>
      <News desc='Cambodia School Tours - Wide Eyed Tours' title='TOUR' Image={random}></News>
     </div>
    </div>
    
  )
}

export default NewsContainer
