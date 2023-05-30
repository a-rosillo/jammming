import React from "react"
import Tracklist from './Tracklist'

function SearchResults (props) {
    return (
        <div className="search-results">
            <h2>Search Results</h2>
            <Tracklist tracks={props.tracks} buttonText='+' onClickButton={props.onClickButton}/>
        </div>
    )
}

export default SearchResults