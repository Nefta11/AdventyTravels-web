import PropTypes from 'prop-types';
import { Search, Filter, X } from 'lucide-react';

const GalleryFilters = ({
    activeFilter,
    searchQuery,
    onFilterChange,
    onSearchChange,
}) => {
    const filters = [
        { id: 'all', label: 'Todos' },
        { id: 'montañas', label: 'Montañas' },
        { id: 'naturaleza', label: 'Naturaleza' },
        { id: 'playas', label: 'Playas' },
        { id: 'cultural', label: 'Cultural' },
        { id: 'fauna', label: 'Fauna' },
        { id: 'aventura', label: 'Aventura' },
    ];
    return (
        <div className="gallery-controls">
            <div className="search-bar">
                <Search size={20} />
                <input
                    type="text"
                    placeholder="Buscar por título, ubicación o fotógrafo..."
                    value={searchQuery}
                    onChange={(e) => onSearchChange(e.target.value)}
                />
                {searchQuery && (
                    <button className="clear-search" onClick={() => onSearchChange('')}>
                        <X size={16} />
                    </button>
                )}
            </div>
            <div className="filter-controls">
                <Filter size={20} />
                <div className="gallery-filters">
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
            </div>
        </div>
    );
};

GalleryFilters.propTypes = {
    activeFilter: PropTypes.string.isRequired,
    searchQuery: PropTypes.string.isRequired,
    onFilterChange: PropTypes.func.isRequired,
    onSearchChange: PropTypes.func.isRequired,
};
export default GalleryFilters;
