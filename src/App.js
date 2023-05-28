import React, { useState } from 'react'
import './App.css';
import Playlist from './components/Playlist';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';
import { createPlaylist, getAccessToken, searchSpotify } from './utilities/Spotify';


function App() {
  const [ searchParam, setSearchParam] = useState('')
  const [ searchResultsArray, setSearchResultsArray ] = useState([])
  const [ playlistName, setPlaylistName ] = useState('')
  const [ playlistTracks, setPlaylistTracks ] = useState([])
  const [ playlistToSave, setPlaylistToSave ] = useState([])

  const handleSearch = async() => {
    setSearchResultsArray(await searchSpotify(searchParam))
  }
  const onClickAddHandler = index => setPlaylistTracks(
    prevPlaylistTracks => [...prevPlaylistTracks, searchResultsArray[index]]
  )
  const onClickRemoveHandler = targetIndex => setPlaylistTracks(
    prevPlaylistTracks => prevPlaylistTracks.filter((track, index) => index !== targetIndex)
  )

  function savePlaylist() {
    setPlaylistToSave(playlistTracks)
    setPlaylistTracks([])
    const trackUris = {
      uris: ["spotify:track:4iV5W9uYEdYUVa79Axb7Rh",
          "spotify:track:1301WleyT98MSxVHPZCA6M", 
          "spotify:episode:512ojhOuo1ktJprKbVcKyQ"]
    }
    createPlaylist('Mock name', trackUris)
  }

  return (
    <div className="App">
      <button onClick={getAccessToken}>Access Spotify</button>
      <SearchBar searchParam={searchParam} setSearchParam={setSearchParam} handleSearch={handleSearch}/>
      <SearchResults tracks={searchResultsArray} onClickButton={onClickAddHandler}/>
      <Playlist playlistName={playlistName} setPlaylistName={setPlaylistName} savePlaylist={savePlaylist} tracks={playlistTracks} onClickButton={onClickRemoveHandler}/>
    </div>
  );
}

export default App;
