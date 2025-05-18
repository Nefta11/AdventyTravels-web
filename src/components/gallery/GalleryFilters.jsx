import PropTypes from 'prop-types';
import { Search, Filter, X, Mountain, TreePine, Umbrella, Landmark, PawPrint, Bike } from 'lucide-react';

const GalleryFilters = ({
    activeFilter,
    searchQuery,
    onFilterChange,
    onSearchChange,
}) => {
    const filters = [
        { id: 'all', label: 'Todos', icon: <Filter size={16} /> },
        { id: 'montañas', label: 'Montañas', icon: <Mountain size={16} /> },
        { id: 'naturaleza', label: 'Naturaleza', icon: <TreePine size={16} /> },
        { id: 'playas', label: 'Playas', icon: <Umbrella size={16} /> },
        { id: 'cultural', label: 'Cultural', icon: <Landmark size={16} /> },
        { id: 'fauna', label: 'Fauna', icon: <PawPrint size={16} /> },
        { id: 'aventura', label: 'Aventura', icon: <Bike size={16} /> },
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
                            <span style={{marginRight: 6, display: 'inline-flex', alignItems: 'center'}}>{filter.icon}</span>
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
