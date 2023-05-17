import React, { useState } from 'react'
import './App.css';
import Playlist from './components/Playlist';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';

const searchTracks = [
  {artist: 'arctic monkeys', trackName: 'favourite worst nightmare', album: 'unknown', uri: 1}, 
  {artist: 'beyonce', trackName: 'single ladies', album: 'unknown', uri: 2}, 
  {artist:'unknown', trackName:'chacha slide', album: 'unknown', uri: 3},
  {artist: 'queen', trackName: 'we will rock you', album: 'unknown', uri:4}, 
  {artist: 'unknown', trackName: 'crazy frog', album: 'unknown', uri: 5}, 
  {artist:'unknown', trackName:'fast food song', album: 'unknown', uri: 6}
]

function App() {
  const handleSubmit = () => alert('submitted')
  const [ playlistName, setPlaylistName ] = useState('')
  const [ playlistTracks, setPlaylistTracks ] = useState([])
  const [ playlistToSave, setPlaylistToSave ] = useState([])
  const onClickAddHandler = index => setPlaylistTracks(
    prevPlaylistTracks => [...prevPlaylistTracks, searchTracks[index]]
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
      <SearchBar handleSubmit={handleSubmit}/>
      <SearchResults tracks={searchTracks} onClickButton={onClickAddHandler}/>
      <Playlist playlistName={playlistName} setPlaylistName={setPlaylistName} savePlaylist={savePlaylist} tracks={playlistTracks} onClickButton={onClickRemoveHandler}/>
    </div>
  );
}

export default App;
