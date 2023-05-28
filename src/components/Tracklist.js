import React from "react"
import Track from "./Track"
import './Tracklist.css'

function Tracklist (props) {
    if ( props.tracks ) {
        return (
            props.tracks.map((track, index) => {
                return(
                    <Track
                        key={index}
                        index={index}
                        id={track.uri}
                        trackName={track.trackName} 
                        artist={track.artist} 
                        album={track.album}
                        onClickButton={props.onClickButton}
                        buttonText = {props.buttonText}
                    />
                )
            })
        )
    }
}

export default Tracklist