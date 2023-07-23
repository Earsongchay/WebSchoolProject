import React from 'react'
import buttom from '../assets/images/Group 26.jpg'
import styles from '../Styles.module.css'
import Ruler from '../components/Ruler';

function Youtube() {
  return (
    <div className={styles.youtubeContainer}>
      <Ruler title='Explore Our Campus'></Ruler>
      <div className={styles.video}>
        <iframe width="100%" height="700px" src="https://www.youtube.com/embed/-eBC0O2Vx6I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>

      <div style={{ width: '100%', marginTop: '100px', marginBottom: '0px' }}><img width='100%' src={buttom} alt='asd'></img></div>

    </div>
  );
}

export default Youtube;