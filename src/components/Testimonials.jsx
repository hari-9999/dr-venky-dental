import React from 'react';
import { Star, Quote } from 'lucide-react';
import './Testimonials.css';

const reviews = [
  {
    id: 1,
    name: 'Srinidhi Rao',
    date: '2 weeks ago',
    text: 'I was always terrified of root canals, but Dr. Venkatesh made it completely painless! The clinic is incredibly clean and modern. Highly recommend for any dental anxiety.',
  },
  {
    id: 2,
    name: 'Ravi Kumar',
    date: '1 month ago',
    text: 'Got my dental implants done here. The whole process was explained clearly, pricing was transparent, and the results are amazing. Best clinic in Jubilee Hills.',
  },
  {
    id: 3,
    name: 'Anjali Desai',
    date: '3 months ago',
    text: 'Brought my 5-year-old for cavity filling. The staff is so patient and family-friendly. The UV sanitization also gave us peace of mind during our visits.',
  }
];

const Testimonials = () => {
  return (
    <section className="testimonials" id="reviews">
      <div className="container">
        
        <div className="testimonials-header text-center">
           <span className="section-label">Patient Stories</span>
           <h2 className="section-title">Trusted by 450+ Happy Patients</h2>
           <div className="rating-summary">
             <div className="stars-lg">
                {[...Array(5)].map((_, i) => <Star key={i} size={28} fill="var(--accent-gold)" color="var(--accent-gold)" />)}
             </div>
             <span className="rating-score-lg">5.0 / 5.0 on Google Maps</span>
           </div>
        </div>

        <div className="reviews-grid">
           {reviews.map((review) => (
             <div key={review.id} className="review-card hover-card">
               <Quote size={40} className="quote-icon text-bg-alt" color="var(--primary)" opacity={0.1} />
               
               <div className="review-stars">
                 {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="var(--accent-gold)" color="var(--accent-gold)" />)}
               </div>
               
               <p className="review-text">"{review.text}"</p>
               
               <div className="review-author">
                 <div className="author-avatar">{review.name.charAt(0)}</div>
                 <div className="author-info">
                   <span className="author-name">{review.name}</span>
                   <span className="author-date">{review.date}</span>
                 </div>
               </div>
             </div>
           ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
