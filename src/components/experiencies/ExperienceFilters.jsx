import PropTypes from 'prop-types';
import './Experiences.css';
import { FaGlobe, FaLandmark, FaTree, FaHiking } from 'react-icons/fa';

const ExperienceFilters = ({ activeFilter, onFilterChange }) => {
    const filters = [
        { id: 'all', label: 'Todos', icon: <FaGlobe /> },
        { id: 'cultural', label: 'Cultural', icon: <FaLandmark /> },
        { id: 'naturaleza', label: 'Naturaleza', icon: <FaTree /> },
        { id: 'aventura', label: 'Aventura', icon: <FaHiking /> }
    ];

    return (
        <div className="filter-tabs">
            {filters.map(filter => (
                <button
                    key={filter.id}
                    className={`filter-button ${activeFilter === filter.id ? 'active' : ''}`}
                    onClick={() => onFilterChange(filter.id)}
                >
                    {filter.icon} {filter.label}
                </button>
            ))}
        </div>
    );
};

ExperienceFilters.propTypes = {
    activeFilter: PropTypes.string.isRequired,
    onFilterChange: PropTypes.func.isRequired,
};

export default ExperienceFilters;
