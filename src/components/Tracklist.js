import React from "react"
import Track from "./Track"
import './Tracklist.css'

function Tracklist (props) {
    return (
        props.tracks.map((track, index) => {
            return(
                <Track
                    key={index}
                    id={track.id}
                    trackName={track.trackName} 
                    artist={track.artist} 
                    onClickButton={props.onClickButton}
                    buttonText = {props.buttonText}
                />
            )
        })
    )
}

export default Tracklist