import React from "react"
import './Playlist.css'

const tracks = ['we will rock you', 'crazy frog', 'fast food song']
const trackListArray = tracks.map((track) => <p>{track}</p>)


function Playlist () {
    return (
        <div id='playlist'>
            <h2>Playlist</h2>
            <div>{trackListArray}</div>
        </div>
    )
}

export default Playlist