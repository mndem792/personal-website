import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './Pages/Home/Navbar';
import Home from "./Pages/Home/Homescreen"
import AboutMe from './Pages/Home/AboutMe';
import Articles from './Pages/Home/Articles';


function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/" element={<AboutMe />}></Route>
            <Route path="/" element={<Articles />}></Route>
            <Route path="*" elsement={<div>This page is a ghost</div>}></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
