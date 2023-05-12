import React from "react"
import Tracklist from './Tracklist'
import './Playlist.css'




function Playlist (props) {
    return (
        <div>
            <h2>Playlist</h2>
            <Tracklist tracks={props.tracks} buttonText='-' onClickButton={props.onClickButton}/>
        </div>
    )
}

export default Playlist