import { Calendar, Clock, Users, MapPin, Star, ArrowUpRight } from 'lucide-react';
import PropTypes from 'prop-types';
import './Experiences.css';

const ExperienceCard = ({ experience }) => {
    return (
        <div className="experience-card">
            <div className="experience-image" style={{ backgroundImage: `url(${experience.image})` }}>
                <div className="experience-rating">
                    <Star size={16} fill="#FFD700" stroke="#FFD700" />
                    <span>{experience.rating}</span>
                </div>
            </div>
            <div className="experience-content">
                <div className="experience-details">
                    <h3>{experience.title}</h3>
                    <div className="experience-location">
                        <MapPin size={16} />
                        <span>{experience.location}</span>
                    </div>
                </div>
                <p>{experience.description}</p>
                <div className="experience-highlights">
                    {experience.highlights.map((highlight, index) => (
                        <span key={index} className="highlight-tag">{highlight}</span>
                    ))}
                </div>
                <div className="experience-meta">
                    <div className="meta-item">
                        <Calendar size={16} />
                        <span>{experience.duration}</span>
                    </div>
                    <div className="meta-item">
                        <Users size={16} />
                        <span>{experience.groupSize}</span>
                    </div>
                    <div className="meta-item">
                        <Clock size={16} />
                        <span>Todo el año</span>
                    </div>
                </div>
                <div className="experience-footer">
                    <div className="experience-price">
                        <span className="price-amount">${experience.price}</span>
                        <span className="price-text">por persona</span>
                    </div>
                    <a
                        href="https://booking.adventytravels.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="experience-link"
                    >
                        Reservar <ArrowUpRight size={16} />
                    </a>
                </div>
            </div>
        </div>
    );
};
ExperienceCard.propTypes = {
    experience: PropTypes.shape({
        image: PropTypes.string.isRequired,
        rating: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        highlights: PropTypes.arrayOf(PropTypes.string).isRequired,
        duration: PropTypes.string.isRequired,
        groupSize: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
    }).isRequired,
};

export default ExperienceCard;
