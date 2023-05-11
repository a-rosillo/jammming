import React from "react"
import Tracklist from './Tracklist'
import './Playlist.css'

const playlistTracks = [
    {artist: 'queen', trackName: 'we will rock you'}, 
    {artist: 'unknown', trackName: 'crazy frog'}, 
    {artist:'unknown', trackName:'fast food song'}
]


function Playlist () {
    return (
        <div id='playlist'>
            <h2>Playlist</h2>
            <Tracklist tracks={playlistTracks} buttonText='-' />
        </div>
    )
}

export default Playlist