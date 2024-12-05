import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, useLocation} from 'react-router-dom';
import Navbar from './Pages/Home/Navbar';
import Home from "./Pages/Home/Homescreen"
import AboutMe from './Pages/Home/AboutMe';
import ArticlesPage from './Pages/Home/ArticlesPage/ArticlesPage';
import Article from './Pages/Home/ArticlesPage/Article';
import NotFound from './Pages/Home/NotFound';


function App() {
  return (
    <div className="App">
      <Router>
          <Navbar />
          <Routes>
            <Route path="/aboutme2" element={<Home />}/>
            <Route path="/" element={<ArticlesPage />}/>
            <Route path="/aboutme" element={<AboutMe />}/>
            <Route path="/:link" element={<Article />} />
            <Route path="*" element={<Navigate to="/404" replace />} />
            <Route path="/404" element={<NotFound />} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
