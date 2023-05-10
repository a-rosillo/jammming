import React from "react"
import Track from "./Track"
import './Tracklist.css'

function Tracklist (props) {
    return (
        props.tracks.map((track, index) => <Track 
            trackName={track.trackName} 
            artist={track.artist} 
            key={index} 
            index={index} 
        />)
    )
}

export default Tracklist