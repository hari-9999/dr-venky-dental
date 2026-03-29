import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, ArrowRight } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <div className="container">
        
        <div className="footer-grid">
           
           <div className="footer-brand">
             <div className="logo-brand" style={{ marginBottom: '24px' }}>
               <div className="logo-image-box-footer">
                  <img src="/logo.webp" alt="Dr. Venky's Logo" className="logo-img-footer" onError={(e) => { e.target.style.display='none'; }} />
               </div>
               <div className="logo-text">
                 <h2 style={{color: 'white'}}>Dr. Venky's</h2>
                 <span style={{color: 'var(--secondary-light)'}}>Dental Clinic</span>
               </div>
             </div>
             <p className="footer-desc">
               Premium, painless, and patient-friendly dental care in the heart of Jubilee Hills. Advanced technology meets expert hands.
             </p>
             <div className="social-links">
               <a href="#" className="social-link" title="Instagram">In</a>
               <a href="#" className="social-link" title="Facebook">Fb</a>
             </div>
           </div>

           <div className="footer-links">
             <h4 className="footer-title">Quick Links</h4>
             <ul>
               <li><Link to="/#home">Home</Link></li>
               <li><Link to="/#services">Our Services</Link></li>
               <li><Link to="/#about">About Dr. Venkatesh K</Link></li>
               <li><Link to="/#reviews">Patient Reviews</Link></li>
             </ul>
           </div>

           <div className="footer-contact">
             <h4 className="footer-title">Visit Clinic</h4>
             <ul className="contact-info">
               <li>
                 <MapPin className="contact-icon text-secondary" size={20} />
                 <span>
                   <strong>Jubilee Hills, Hyderabad</strong><br />
                   Premium location with dedicated Parking & Lift access for your convenience.
                 </span>
               </li>
               <li>
                 <Phone className="contact-icon text-secondary" size={20} />
                 <a href="tel:+919876543210">+91 98765 43210</a>
               </li>
               <li>
                 <Mail className="contact-icon text-secondary" size={20} />
                 <a href="mailto:contact@drvenkysdental.com">contact@drvenkysdental.com</a>
               </li>
             </ul>
           </div>

           <div className="footer-hours">
             <h4 className="footer-title">Working Hours</h4>
             <ul className="contact-info">
               <li>
                 <Clock className="contact-icon text-secondary" size={20} />
                 <span>
                   Mon - Sat:<br />9:00 AM - 8:00 PM
                 </span>
               </li>
               <li>
                 <Clock className="contact-icon text-muted" size={20} />
                 <span className="text-muted">Sunday: By Appointment</span>
               </li>
             </ul>
             <Link to="/book" className="btn btn-secondary mt-20" style={{ width: '100%', marginTop: '20px' }}>
               Book Appointment <ArrowRight size={18} />
             </Link>
           </div>

        </div>

        <div className="footer-bottom">
           <p>&copy; {new Date().getFullYear()} Dr. Venky's Dental Clinic. All Rights Reserved.</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
