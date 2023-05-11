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
                    <p className='button' onClick={props.onClickAdd} id={track.id} >{props.buttonText}</p>
                </div>
            )
        })
    )
}

export default Tracklist