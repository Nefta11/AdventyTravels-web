import PropTypes from 'prop-types';
import './Experiences.css';

const ExperienceFilters = ({ activeFilter, onFilterChange }) => {
    const filters = [
        { id: 'all', label: 'Todos' },
        { id: 'cultural', label: 'Cultural' },
        { id: 'naturaleza', label: 'Naturaleza' },
        { id: 'aventura', label: 'Aventura' }
    ];

    return (
        <div className="filter-tabs">
            {filters.map(filter => (
                <button
                    key={filter.id}
                    className={activeFilter === filter.id ? 'active' : ''}
                    onClick={() => onFilterChange(filter.id)}
                >
                    {filter.label}
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
