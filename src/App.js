
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Navigation from './components/navigation';
import Home from './pages/Home';
import Hotels from './pages/Hotels';
import Contact from './pages/Contact'
function App() {
  return ( <>
  <Navigation />
  <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/hotels' element={<Hotels movies={movies} />} />
        <Route path="/hotels/:id" element={<Booking hotels={hotels} />} />

      </Routes>
  </>);
}

export default App;
