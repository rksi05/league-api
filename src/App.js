import React from 'react';
import './App.css';
import Home from './Home';
import Champions from './Champions';
import About from './About';
import NavBar from './NavBar';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
//Where I routed my nav bar
// source: https://www.geeksforgeeks.org/how-to-create-a-multi-page-website-using-react-js/
function App() {
  return (
    <div className="Parallax">
    <div><div className="App">
      <br></br>
      <br></br>
      
      <header>
      <h1>Welcome to the LoL Champion API</h1>
      </header>
      <Router>
        <NavBar />
        <Routes>
          <Route path = "/" element = {<Home/>}/>
          <Route path = "/Champions" element = {<Champions />}/>
          <Route path = "/About" element = {<About />}/>
        </Routes>
      </Router>
    </div>
    </div>
    </div>
  );
}

export default App;