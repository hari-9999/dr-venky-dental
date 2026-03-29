import { Link } from 'react-router-dom';
import { Star, ShieldCheck, ArrowRight, UserCheck } from 'lucide-react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero" id="home">
      <div className="container hero-container">
        
        {/* Left Column - Copy & Authority */}
        <div className="hero-content">
          <div className="hero-badge fade-in-up">
            <span className="badge-highlight">Top Rated</span>
            <span className="badge-text">Jubilee Hills' Premier Dental Clinic</span>
          </div>
          
          <h1 className="hero-title fade-in-up delay-1">
            Experience <span className="text-primary">Painless</span> &<br/>Premium Dental Care.
          </h1>
          
          <p className="hero-desc fade-in-up delay-2">
            Led by Dr. Venkatesh K, a distinguished Cosmetic Dental Surgeon & Root Canal Specialist. We combine advanced laser technology with a patient-first approach for your ultimate comfort.
          </p>

          <div className="hero-actions fade-in-up delay-3">
            <Link to="/book" className="btn btn-primary btn-lg shadow-lg hover-scale">
              Book Your Appointment <ArrowRight size={20} />
            </Link>
            <a href="#services" className="btn btn-outline btn-lg hover-scale">
              Our Treatments
            </a>
          </div>
          
          {/* Integrated Trust Proof - Removed clutter, made prominent */}
          <div className="hero-trust-inline fade-in-up delay-4">
             <div className="trust-item">
                <ShieldCheck size={28} className="text-secondary" />
                <div className="trust-text">
                  <strong>100% Safe</strong>
                  <span>UV Sterilized</span>
                </div>
             </div>
             <div className="trust-divider"></div>
             <div className="trust-item">
                <UserCheck size={28} className="text-primary" />
                <div className="trust-text">
                  <strong>Dr. Venkatesh K</strong>
                  <span>15+ Yrs Experience</span>
                </div>
             </div>
          </div>
        </div>

        {/* Right Column - Visual/Image */}
        <div className="hero-visual fade-in">
          <div className="visual-image-wrapper shadow-xl">
             <img src="/lo.webp" alt="Modern Dental Clinic in Jubilee Hills" className="hero-img" onError={(e) => { e.target.style.display='none'; e.target.parentElement.classList.add('fallback-mesh'); }} />
             
             {/* Prominent Proof Overlay at the bottom of the image for strong hierarchy */}
             <div className="visual-proof-card glass-panel shadow-lg">
                <div className="proof-rating">
                  <span className="rating-huge">5.0</span>
                  <div className="rating-details">
                    <div className="stars">
                      {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="var(--accent-gold)" color="var(--accent-gold)" />)}
                    </div>
                    <span className="rating-text">450+ Patient Reviews</span>
                  </div>
                </div>
             </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
