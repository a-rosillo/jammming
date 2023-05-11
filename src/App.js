import './App.css';
import Playlist from './components/Playlist';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';

const tracks = [
  {artist: 'arctic monkeys', trackName: 'favourite worst nightmare'}, 
  {artist: 'beyonce', trackName: 'single ladies'}, 
  {artist:'unknown', trackName:'chacha slide'}
]

function App() {
  return (
    <div className="App">
      <SearchBar />
      <SearchResults tracks={tracks} />
      <Playlist />
    </div>
  );
}

export default App;
