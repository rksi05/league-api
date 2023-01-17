import React from 'react';
import './App.css';
import Home from './Home';
import Champions from './Champions';
import NavBar from './NavBar';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="Parallax">
    <div><div className="App">
      <br></br>
      <br></br>
      <header>
      <h1>Welcome to Summoner's Rift!</h1>
      <h3>Click a champion to learn more:</h3>
      <p>☽. _________________ .☾</p>
      </header>
      <Router>
        <NavBar />
        <Routes>
          <Route path = "/" element = {<Home/>}/>
          <Route path = "/Champions" element = {<Champions />}/>
        </Routes>
      </Router>
      <Home/>
    </div>
    </div>
    </div>
  );
}

export default App;