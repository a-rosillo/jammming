import React, { useState } from 'react'
import './App.css';
import Playlist from './components/Playlist';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';

const searchTracks = [
  {artist: 'arctic monkeys', trackName: 'favourite worst nightmare', album: 'unknown', id: 1}, 
  {artist: 'beyonce', trackName: 'single ladies', album: 'unknown', id: 2}, 
  {artist:'unknown', trackName:'chacha slide', album: 'unknown', id: 3},
  {artist: 'queen', trackName: 'we will rock you', album: 'unknown', id:4}, 
  {artist: 'unknown', trackName: 'crazy frog', album: 'unknown', id: 5}, 
  {artist:'unknown', trackName:'fast food song', album: 'unknown', id: 6}
]

function App() {
  const [playlistTracks, setPlaylistTracks] = useState([])
  function onClickAddHandler (event) {
    const trackId = event.target.id
    const track = searchTracks.find((track) => track.id.toString() === trackId)
    setPlaylistTracks(prevArray => [...prevArray, track])
  }
  return (
    <div className="App">
      <SearchBar />
      <SearchResults tracks={searchTracks} onClickAdd={onClickAddHandler}/>
      <Playlist tracks={playlistTracks}/>
    </div>
  );
}

export default App;
