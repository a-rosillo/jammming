import React from "react"
import './Tracklist.css'

const tracks = ['favourite worst nightmare', 'single ladies', 'chacha slide']
const trackListArray = tracks.map((track) => {
    return (
        <>
            {track}
            <div id='add-button'>
                <p>add</p>
            </div>
        </>
    )
})


function Tracklist () {
    return (
        <form>
            <h2>Tracklist</h2>
            <div className="grid-container">{trackListArray}</div>
        </form>
    )
}

export default Tracklist