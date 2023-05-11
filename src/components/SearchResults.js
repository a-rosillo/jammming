import React from "react"
import Tracklist from './Tracklist'

function SearchResults (props) {
    return (
        <div>
            <h2>Search Results</h2>
            <Tracklist tracks={props.tracks} buttonText='+'/>
        </div>
    )
}

export default SearchResults