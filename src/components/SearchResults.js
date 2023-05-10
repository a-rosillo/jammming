import React from "react"
import Tracklist from './Tracklist'

const tracks = [
    {artist: 'arctic monkeys', trackName: 'favourite worst nightmare'}, 
    {artist: 'beyonce', trackName: 'single ladies'}, 
    {artist:'unknown', trackName:'chacha slide'}
]

function SearchResults () {
    return (
        <div>
            <h2>Search Results</h2>
            <Tracklist tracks={tracks} />
        </div>
    )
}

export default SearchResults