import React from "react"
import Tracklist from './Tracklist'
import './Playlist.css'

function Playlist (props) {

    function handleChange (event) {
        props.setPlaylistName(event.target.value)
    }

    function handleSubmit (event) {
        event.preventDefault()
        alert(props.playlistName)
    }

    function handleSave () {
        props.savePlaylist()
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Playlist name"
                    aria-label="Playlist name"
                    value={props.playlistName}
                    onChange={handleChange}
                />
                <input type='submit'/>
            </form>
            <Tracklist tracks={props.tracks} buttonText='-' onClickButton={props.onClickButton}/>
            <button onClick={handleSave}
            >Save</button>
        </div>
    )
}

export default Playlist