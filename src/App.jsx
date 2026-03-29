import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import BookingPage from './pages/BookingPage';
import './index.css';

// Intelligent Scroll Handler
const ScrollHandler = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // If there's no hash (like e.g. /book or /), scroll to top
    if (!hash) {
      window.scrollTo(0, 0);
    } else {
      // If there's a hash, find the element and scroll smoothly to it
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        // Slight delay to ensure home page content is rendered before scrolling
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [pathname, hash]);

  return null;
};

function App() {
  return (
    <>
      <ScrollHandler />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book" element={<BookingPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
