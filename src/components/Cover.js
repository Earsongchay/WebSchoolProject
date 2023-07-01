import React from 'react';
import TextCover from './TextCover';
import styles from '../Styles.module.css';

function Cover() {
  return (
    <div>
      <div className={styles.cover}>
         <TextCover/>
      </div>
    </div>
  )
}

export default Cover
