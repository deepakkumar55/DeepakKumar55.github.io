import React from 'react';
import './App.css';
import About from './components/About';
import Header from './components/Header';
import Photos from './components/Photos.js';
import Blog from './components/Blog.js';
import Contact from './components/Contact';
import Loader from './components/Loader.js';
import Home from './components/Home.js';
import Project from './components/Project';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
    return (
        <div>
            <Router>
                <div>
                    <Loader/>
                    <Header />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/project" element={<Project />} />
                        <Route path='/photos' element={<Photos />} />
                        <Route path="/blog" element={<Blog />} />
                    </Routes>
                </div>
            </Router>
        </div>
    );
}

export default App;
