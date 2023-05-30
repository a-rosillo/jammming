import React, { useState } from 'react'
import './App.css';
import Playlist from './components/Playlist';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';
import { createPlaylist, searchSpotify } from './utilities/Spotify';


function App() {
  const [ searchParam, setSearchParam] = useState('')
  const [ searchResultsArray, setSearchResultsArray ] = useState([])
  const [ playlistName, setPlaylistName ] = useState('')
  const [ playlistTracks, setPlaylistTracks ] = useState([])

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
    createPlaylist(playlistName, playlistTracks)
    setPlaylistTracks([])
  }

  return (
    <div className="App">
      <header>
        <h1>Spotify Playlist Creator</h1>
        <SearchBar searchParam={searchParam} setSearchParam={setSearchParam} handleSearch={handleSearch}/>
      </header>
      <main>
        <SearchResults tracks={searchResultsArray} onClickButton={onClickAddHandler}/>
        <Playlist playlistName={playlistName} setPlaylistName={setPlaylistName} savePlaylist={savePlaylist} tracks={playlistTracks} onClickButton={onClickRemoveHandler}/> 
      </main>
    </div>
  );
}

export default App;
