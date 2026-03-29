import { Link } from 'react-router-dom';
import { Award, CheckCircle, HeartPulse } from 'lucide-react';
import './AboutDoctor.css';

const AboutDoctor = () => {
  return (
    <section className="about-doctor" id="about">
      <div className="container">
        <div className="about-grid">
           
           <div className="doc-visual">
             <div className="doc-image-wrapper">
               {/* Doctor Image Placeholder - using a subtle gradient placeholder if no image found */}
               <div className="doc-bg-pattern"></div>
               <img src="/unnamed(11).webp" alt="Dr. Venkatesh K" className="doc-img shadow-lg" onError={(e) => { e.target.style.display='none'; e.target.parentElement.classList.add('fallback-bg'); }}/>
               
               <div className="doc-badge glass-panel animate-float">
                  <Award size={32} className="text-secondary" />
                  <div className="badge-text">
                    <span className="badge-num">15+</span>
                    <span className="badge-label">Years of<br/>Excellence</span>
                  </div>
               </div>
             </div>
           </div>

           <div className="doc-content">
             <span className="section-label">Meet The Expert</span>
             <h2 className="section-title">Dr. Venkatesh K</h2>
             <h4 className="doc-title text-primary">Cosmetic Dental Surgeon & Root Canal Specialist</h4>
             
             <p className="doc-bio">
               A distinguished alumnus of the prestigious <strong>Osmania Dental College</strong>, Dr. Venkatesh K has built a reputation for providing completely painless, highly precise, and patient-centric dental care in Jubilee Hills.
             </p>

             <p className="doc-bio">
               His approach focuses on strong doctor-patient communication, ensuring you fully understand your procedures before anything begins. Whether dealing with anxious patients or complex surgeries, his calm demeanor and use of advanced laser technology guarantee a comfortable experience.
             </p>

             <ul className="doc-highlights">
               <li><CheckCircle size={20} className="text-secondary" /> <span>Specialist in Painless Root Canal Treatments</span></li>
               <li><CheckCircle size={20} className="text-secondary" /> <span>Expert in full-mouth Dental Implants</span></li>
               <li><CheckCircle size={20} className="text-secondary" /> <span>Advanced Cosmetic & Smile Designing</span></li>
               <li><CheckCircle size={20} className="text-secondary" /> <span>Backed by a team of Periodontics & Laser Specialists</span></li>
             </ul>

             <div className="doc-actions">
                <Link to="/book" className="btn btn-secondary">
                  <HeartPulse size={18} /> Schedule a Consultation
                </Link>
             </div>

           </div>

        </div>
      </div>
    </section>
  );
};

export default AboutDoctor;
