import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, Menu, X, Calendar } from 'lucide-react';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
      {/* Very clean modern top bar */}
      <div className="top-bar">
        <div className="container top-bar-content">
          <div className="top-contacts text-muted">
            <span className="contact-item">
              <MapPin size={14} className="text-primary" /> Jubilee Hills, Hyderabad (Parking + Lift)
            </span>
            <span className="divider"></span>
            <span className="contact-item">
              <Calendar size={14} className="text-primary" /> Mon-Sat: 9AM - 8PM
            </span>
          </div>
          <div className="top-actions">
            <a href="tel:+919876543210" className="contact-link text-primary font-bold">
              <Phone size={14} /> +91 98765 43210
            </a>
          </div>
        </div>
      </div>

      {/* Main Glass Navigation */}
      <div className="main-nav-wrapper glass-panel">
        <div className="container main-nav">
          
          <Link to="/" className="logo-brand group">
            <div className="logo-image-box">
              <img src="/logo.webp" alt="Dr. Venky's Logo" className="logo-img" onError={(e) => { e.target.style.display='none'; e.target.parentElement.classList.add('fallback-text-logo'); }} />
            </div>
            <div className="logo-text">
              <h2>Dr. Venky's</h2>
              <span>Dental Clinic</span>
            </div>
          </Link>

          <nav className={`desktop-nav ${mobileMenuOpen ? 'open' : ''}`}>
            <ul>
              <li><Link to="/#home" onClick={() => setMobileMenuOpen(false)}>Home</Link></li>
              <li><Link to="/#services" onClick={() => setMobileMenuOpen(false)}>Services</Link></li>
              <li><Link to="/#about" onClick={() => setMobileMenuOpen(false)}>Our Team</Link></li>
              <li><Link to="/#reviews" onClick={() => setMobileMenuOpen(false)}>Reviews</Link></li>
            </ul>
            
            <Link to="/book" className="btn btn-primary nav-cta shadow-md hover-scale">
              Book Appointment
            </Link>
          </nav>

          <button className="mobile-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
