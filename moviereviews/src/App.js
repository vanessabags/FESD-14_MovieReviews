import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Navigation from './Components/Navigation';
import MovieList from './Components/MovieList'
import MovieContainer from './Components/MovieContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navigation />
      </header>
      <div>
        <MovieList />
        <MovieContainer />
      </div>
    </div>
  );
}


export default App;