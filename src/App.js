import './App.css';
import Playlist from './components/Playlist';
import SearchBar from './components/SearchBar';
import Tracklist from './components/Tracklist';

function App() {
  return (
    <div className="App">
      <SearchBar />
      <Tracklist/>
      <Playlist />
    </div>
  );
}

export default App;
