import React from "react"
import Track from "./Track"
import './Tracklist.css'

function Tracklist (props) {
    return (
        props.tracks.map((track, index) => {
        return(
            <div key={index}>
                <Track
                    trackName={track.trackName} 
                    artist={track.artist} 
                />
                <div className='button' onClick={props.onClickAdd}>
                    <p>{props.buttonText}</p>
                </div>
            </div>
        )
        })
    )
}

export default Tracklist