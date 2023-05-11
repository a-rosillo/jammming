import React from "react"
import Track from "./Track"
import './Tracklist.css'

function Tracklist (props) {
    return (
        props.tracks.map((track, index) => {
        return(
            <div>
                <Track 
                    trackName={track.trackName} 
                    artist={track.artist} 
                    key={index} 
                    index={index} 
                />
                <div className='button'>
                    <p>{props.buttonText}</p>
                </div>
            </div>
        )
        })
    )
}

export default Tracklist