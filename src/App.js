import React, { useState } from 'react'
import './App.css';
import Playlist from './components/Playlist';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';


function App() {
  const [ searchParam, setSearchParam] = useState('')
  const [ searchResultsArray, setSearchResultsArray ] = useState([
    {artist: 'arctic monkeys', trackName: 'favourite worst nightmare', album: 'unknown', uri: 1}, 
    {artist: 'beyonce', trackName: 'single ladies', album: 'unknown', uri: 2}, 
    {artist:'unknown', trackName:'chacha slide', album: 'unknown', uri: 3},
    {artist: 'queen', trackName: 'we will rock you', album: 'unknown', uri:4}, 
    {artist: 'unknown', trackName: 'crazy frog', album: 'unknown', uri: 5}, 
    {artist:'unknown', trackName:'fast food song', album: 'unknown', uri: 6}
  ])
  const [ playlistName, setPlaylistName ] = useState('')
  const [ playlistTracks, setPlaylistTracks ] = useState([])
  const [ playlistToSave, setPlaylistToSave ] = useState([])

  const handleSubmit = (value) => {
    alert(searchParam)
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
    alert(playlistToSave)
  }

  return (
    <div className="App">
      <SearchBar searchParam={searchParam} setSearchParam={setSearchParam} handleSubmit={handleSubmit}/>
      <SearchResults tracks={searchResultsArray} onClickButton={onClickAddHandler}/>
      <Playlist playlistName={playlistName} setPlaylistName={setPlaylistName} savePlaylist={savePlaylist} tracks={playlistTracks} onClickButton={onClickRemoveHandler}/>
    </div>
  );
}

export default App;
