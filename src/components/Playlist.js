import React from "react"
import Tracklist from './Tracklist'
import styles from './Playlist.module.css'

function Playlist (props) {

    function handleChange (event) {
        props.setPlaylistName(event.target.value)
    }

    function handleSubmit (event) {
        event.preventDefault()
        handleSave()
    }

    function handleSave () {
        props.savePlaylist()
    }


    return (
        <div id="playlist">
            <form 
                className={styles.form}
                onSubmit={handleSubmit}
            >
                <span className={styles.span}>
                    <input
                        className={styles.input}
                        type="text"
                        placeholder="Your playlist name"
                        aria-label="Playlist name"
                        value={props.playlistName}
                        onChange={handleChange}
                    />
                </span>
                <input 
                    className={styles.submit}
                    type='submit' 
                    value='Save'/>
            </form>
            <Tracklist 
                tracks={props.tracks} 
                buttonText='-' 
                onClickButton={props.onClickButton}
            />
        </div>
    )
}

export default Playlist