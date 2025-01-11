import './App.css';
import React, {useLayoutEffect} from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, useLocation} from 'react-router-dom';
import Navbar from './Pages/Home/Navbar';
import Home from "./Pages/Home/Homescreen"
import AboutMe from './Pages/Home/AboutMe';
import ArticlesPage from './Pages/Home/ArticlesPage/ArticlesPage';
import Article from './Pages/Home/ArticlesPage/Article';
import NotFound from './Pages/Home/NotFound';


const Wrapper = ({ children }) => {
  const {pathname} = useLocation();

  useLayoutEffect(() => {
    // Scroll to the top of the page when the route changes
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
};


function App() {
  return (
    <div className="App">
      <Router>
        <Wrapper/>
          <Navbar />
          <Routes>
            <Route path="/aboutme2" element={<Home />}/>
            <Route path="/" element={<ArticlesPage />}/>
            <Route path="/aboutme" element={<AboutMe />}/>
            <Route path="/:link" element={<Article />} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
