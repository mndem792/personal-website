import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './Pages/Home/Navbar';
import Home from "./Pages/Home/Homescreen"
import AboutMe from './Pages/Home/AboutMe';
import Articles from './Pages/Home/ArticlesPage/ArticlesPage';
import NotFound from './Pages/Home/NotFound';


function App() {
  
  return (
    <div className="App">
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/aboutme2" element={<Home />}/>
            <Route path="/" element={<Articles />}/>
            <Route path="/aboutme" element={<AboutMe />}/>
            <Route path="*" element={<NotFound/>}/>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
