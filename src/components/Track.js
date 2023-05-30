import React from "react"
import styles from './Track.module.css'

function Track (props) {
    return (
        <div className={styles.trackbox} >
            <div className={styles.textbox} >
                <p className={styles.trackName} >{props.trackName}</p>
                <p className={styles.artist} >{props.artist}</p>
                <p className={styles.album} >{props.album}</p>
            </div>
            <button
                className={styles.button} 
                onClick={() => props.onClickButton(props.index)} 
                id={props.id} 
            >{props.buttonText}</button>
        </div>
    )
}

export default Track