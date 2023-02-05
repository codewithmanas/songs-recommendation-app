import logo from './music-bars-svgrepo-com.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="main-app">
        <header>
          <div><img src={logo} alt="logo" className="main-logo" /></div>
          <h1>SynthNation</h1>
        </header>
        <p>Checkout my favorite songs. Select a genre to get started</p>
        <div className="category-section">
          <button className="songs-genre">Hip-Hop</button>
          <button className="songs-genre">Acoustic</button>
          <button className="songs-genre">Classical</button>
        </div>
        <hr/>
        <div className="content-section">
          <div className="content-items">
            <h3>Second Serve</h3>
            <p>Music by: Dylan Sitts</p>
            <p>Rating: 4.5</p>
          </div>
          <div className="content-items">
            <h3>Second Serve</h3>
            <p>Music by: Dylan Sitts</p>
            <p>Rating: 4.5</p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
