import React from "react"
import Tracklist from './Tracklist'
import './Playlist.css'




function Playlist (props) {
    return (
        <div id='playlist'>
            <h2>Playlist</h2>
            <Tracklist tracks={props.tracks} buttonText='-' onClickAdd={props.onClickAdd}/>
        </div>
    )
}

export default Playlist