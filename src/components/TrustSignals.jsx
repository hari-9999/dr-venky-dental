import React from 'react';
import { Activity, ShieldPlus, Users, IndianRupee } from 'lucide-react';
import './TrustSignals.css';

const signals = [
  {
    icon: <Activity size={32} />,
    title: 'Advanced Laser Tech',
    desc: 'Cutting-edge equipment for painless and precise dental treatments.',
  },
  {
    icon: <ShieldPlus size={32} />,
    title: '100% Strict Hygiene',
    desc: 'UV sanitization and COVID safety protocols for your absolute peace of mind.',
  },
  {
    icon: <Users size={32} />,
    title: 'Family-Friendly',
    desc: 'Specialized care for both adults and children in a comfortable environment.',
  },
  {
    icon: <IndianRupee size={32} />,
    title: 'Transparent Pricing',
    desc: 'Affordable, honest pricing with no hidden charges for any procedure.',
  }
];

const TrustSignals = () => {
  return (
    <section className="trust-signals">
      <div className="container">
        <div className="signals-grid">
          {signals.map((signal, index) => (
            <div key={index} className="signal-card hover-card">
              <div className="signal-icon">
                {signal.icon}
              </div>
              <h3 className="signal-title">{signal.title}</h3>
              <p className="signal-desc">{signal.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSignals;
