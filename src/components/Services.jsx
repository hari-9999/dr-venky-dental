import { Link } from 'react-router-dom';
import { Sparkles, Stethoscope, Microscope, Braces, Zap, ArrowRight } from 'lucide-react';
import './Services.css';

const serviceGroups = [
  {
    id: 'general',
    icon: <Stethoscope size={28} />,
    title: 'Preventive & General Care',
    items: ['Deep Cleaning & Scaling', 'Polishing', 'Tooth Colored Fillings', 'Digital X-Rays'],
    color: 'var(--primary)',
  },
  {
    id: 'advanced',
    icon: <Microscope size={28} />,
    title: 'Advanced Treatments',
    items: ['Painless Root Canal', 'Dental Implants', 'Wisdom Tooth Removal', 'Flap Surgery'],
    color: '#8B5CF6',
  },
  {
    id: 'cosmetic',
    icon: <Sparkles size={28} />,
    title: 'Cosmetic Dentistry',
    items: ['Teeth Whitening', 'Porcelain Veneers', 'Complete Smile Designing', 'Laser Depigmentation'],
    color: 'var(--secondary)',
  },
  {
    id: 'ortho',
    icon: <Braces size={28} />,
    title: 'Orthodontics',
    items: ['Invisible Aligners', 'Ceramic Braces', 'Traditional Metal Braces', 'Retainers'],
    color: '#0EA5E9',
  },
  {
    id: 'laser',
    icon: <Zap size={28} />,
    title: 'Gum & Laser Treatments',
    items: ['Painless Gum Therapy', 'Laser Disinfection', 'Gum Contouring', 'Sensitivity Relief'],
    color: '#10B981',
  }
];

const Services = () => {
  return (
    <section className="services" id="services">
      <div className="container">
        
        <div className="text-center">
          <span className="section-label">Our Treatments</span>
          <h2 className="section-title">Comprehensive Dental Solutions</h2>
          <p className="section-subtitle">
            From routine cleanings to advanced laser surgeries, our clinic is fully equipped to handle all your dental needs under one roof.
          </p>
        </div>

        <div className="services-grid">
          {serviceGroups.map((group) => (
            <div key={group.id} className="service-card hover-card">
               <div className="service-icon-bg" style={{ backgroundColor: group.color }}>
                 <div className="service-icon text-on-primary">
                    {group.icon}
                 </div>
               </div>
               
               <h3 className="service-title">{group.title}</h3>
               
               <ul className="service-list">
                 {group.items.map((item, idx) => (
                   <li key={idx}>
                     <div className="list-dot" style={{ backgroundColor: group.color }}></div>
                     {item}
                   </li>
                 ))}
               </ul>

               <Link to="/book" className="service-cta text-primary">
                  Book Consultation <ArrowRight size={16} />
               </Link>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;
