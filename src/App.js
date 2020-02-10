import React from 'react';
import './App.css';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import NowPlaying from './components/content/NowPlaying.js'
import SongList from './components/content/SongList.js'


function App() {
  return (
    <div className="App">
        <Header />
        <NowPlaying />
        <SongList />
      </div>
  );
}

export default App;
