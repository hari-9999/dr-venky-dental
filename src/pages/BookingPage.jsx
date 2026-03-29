import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar as CalendarIcon, Clock, User, Phone, MessageSquare, CheckCircle, ArrowLeft } from 'lucide-react';
import './BookingPage.css';

const BookingPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    reason: 'General Consultation',
    date: '',
    time: ''
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);

  const morningSlots = ["10:30 AM", "11:30 AM", "01:00 PM"];
  const eveningSlots = ["04:00 PM", "06:00 PM", "08:00 PM", "09:00 PM"];

  const reasons = [
    "General Consultation",
    "Painless Root Canal",
    "Dental Implants",
    "Teeth Whitening",
    "Tooth Extraction",
    "Orthodontic Treatment (Braces)"
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleTimeSelect = (slot) => {
    setFormData(prev => ({ ...prev, time: slot }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.phone && formData.date && formData.time) {
      setIsSubmitted(true);
    }
  };

  const closePopupAndReturn = () => {
    setIsSubmitted(false);
    navigate('/');
  };

  return (
    <div className="booking-page-container fade-in">
      <div className="container booking-container">
        
        <button onClick={() => navigate('/')} className="btn-back">
          <ArrowLeft size={20} /> Back to Home
        </button>

        <div className="booking-form-wrapper glass-panel shadow-xl">
          <div className="booking-form-header">
            <h2>Book Your Visit</h2>
            <p>Schedule a comfortable, painless experience with Dr. Venkatesh K.</p>
          </div>

          <form onSubmit={handleSubmit} className="booking-form">
            {/* Personal Details */}
            <div className="form-section">
              <h3>1. Patient Details</h3>
              <div className="input-group">
                <label><User size={16} /> Full Name</label>
                <input 
                  type="text" 
                  name="name" 
                  placeholder="John Doe" 
                  value={formData.name}
                  onChange={handleInputChange}
                  required 
                />
              </div>
              <div className="input-group">
                <label><Phone size={16} /> Phone Number</label>
                <input 
                  type="tel" 
                  name="phone" 
                  placeholder="+91 90000 00000" 
                  value={formData.phone}
                  onChange={handleInputChange}
                  required 
                />
              </div>
              <div className="input-group">
                <label><MessageSquare size={16} /> Reason for Visit</label>
                <select name="reason" value={formData.reason} onChange={handleInputChange}>
                  {reasons.map(r => <option key={r} value={r}>{r}</option>)}
                </select>
              </div>
            </div>

            {/* Date and Time */}
            <div className="form-section">
              <h3>2. Select Date & Time</h3>
              <div className="input-group">
                <label><CalendarIcon size={16} /> Preferred Date</label>
                <input 
                  type="date" 
                  name="date" 
                  value={formData.date}
                  onChange={handleInputChange}
                  required 
                />
              </div>

              <div className="input-group time-selection">
                <label><Clock size={16} /> Morning Slots</label>
                <div className="slot-grid">
                  {morningSlots.map(slot => (
                    <button 
                      type="button" 
                      key={slot}
                      className={`time-slot ${formData.time === slot ? 'selected' : ''}`}
                      onClick={() => handleTimeSelect(slot)}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>

              <div className="input-group time-selection">
                <label><Clock size={16} /> Evening Slots</label>
                <div className="slot-grid">
                  {eveningSlots.map(slot => (
                    <button 
                      type="button" 
                      key={slot}
                      className={`time-slot ${formData.time === slot ? 'selected' : ''}`}
                      onClick={() => handleTimeSelect(slot)}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <button type="submit" className="btn btn-primary btn-lg submit-btn hover-scale" disabled={!formData.time}>
              Confirm Appointment
            </button>
          </form>
        </div>
      </div>

      {/* Success Modal Overlay */}
      {isSubmitted && (
        <div className="modal-overlay fade-in">
          <div className="modal-content scale-up shadow-xl">
            <CheckCircle size={64} className="success-icon" />
            <h2>Booking Successful!</h2>
            <div className="modal-details">
              <p>Thank you, <strong>{formData.name}</strong>.</p>
              <p>Your appointment for <strong>{formData.reason}</strong> is confirmed for:</p>
              <div className="modal-date-card">
                <p className="modal-date"><CalendarIcon size={18}/> {formData.date}</p>
                <p className="modal-time"><Clock size={18}/> {formData.time}</p>
              </div>
              <p className="modal-note">Our clinic will contact you shortly at {formData.phone} if any details are needed.</p>
            </div>
            <button onClick={closePopupAndReturn} className="btn btn-primary btn-lg w-100 hover-scale">
              Done
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookingPage;
