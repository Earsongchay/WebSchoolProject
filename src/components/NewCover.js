import React from 'react'
import styles from '../Styles.module.css'
import cover from '../assets/images/cccccc.png'

function NewCover({ img = cover, text, title }) {
    return (
        <div className={styles.newCover}>
            <div className={styles.newCoverImg}
                style={{
                    background: `linear-gradient(90deg, rgba(3, 170, 95, 0.5) 100%, rgba(0, 78, 43, 0) 50%, rgba(22, 160, 98, 0) 100%),url(${img})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat"
                }}
            >
                <div className={styles.newTextCover}>
                    <h1>{title}</h1>
                    <p>{text}</p>
                </div>
            </div>
        </div>
    )
}

export default NewCover
