import './App.css';
import Playlist from './components/Playlist';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';

function App() {
  return (
    <div className="App">
      <SearchBar />
      <SearchResults/>
      <Playlist />
    </div>
  );
}

export default App;
