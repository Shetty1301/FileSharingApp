import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Upload from './components/Upload';
import About from './components/About';
import NavBar from './components/Navbar';
import NotFound from './components/NotFound';

const Routing = () => {
  const images={
    sample1: 'https://wallpapersmug.com/download/1920x1080/31df14/pixel-art-cityscape-buildings-new-york.jpg',
    sample2: 'https://t4.ftcdn.net/jpg/01/90/24/33/360_F_190243331_ROECdWvCaPuZI6g3X3ACDwvbgQ810kuI.jpg',
    sample3: 'https://wallpapergod.com/images/hd/pixel-art-1920X1080-wallpaper-8bnl3c6xbsilszl7.jpeg'
  };
  return (
  <Router>
    <NavBar/>
    <Routes>
      <Route path='/' element={<Home heading="Welcome to the File " btnText="Start Sharing 👉"/>} />
      <Route path='/upload' element={<Upload />} />
      <Route path='/about' element={<About source = {images.sample1} heading="About the App"/>} />
      <Route path='*' element={<NotFound/> }/>
    </Routes>
  </Router>
  );
};

export default Routing;
