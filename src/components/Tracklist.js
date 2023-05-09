import React from "react"

const tracks = ['favourite worst nightmare', 'single ladies', 'chacha slide']
const trackListArray = tracks.map((track) => {
    return (
        <li>
            {track}
            <input type='submit' value='+' />
        </li>
    )
})


function Tracklist () {
    return (
        <form>
            <h2>Tracklist</h2>
            <ul>{trackListArray}</ul>
        </form>
    )
}

export default Tracklist