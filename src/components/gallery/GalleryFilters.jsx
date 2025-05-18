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
        <div className="gallery-controls" style={{ marginBottom: '2.5rem' }}>
            <div className="search-bar" style={{ boxShadow: '0 2px 12px rgba(125,193,189,0.08)', background: 'rgba(255,255,255,0.85)', borderRadius: 32, position: 'relative' }}>
                <Search size={20} style={{ position: 'absolute', left: 18, top: '50%', transform: 'translateY(-50%)', color: '#7DC1BD', opacity: 0.7 }} />
                <input
                    type="text"
                    placeholder="Buscar por título, ubicación o fotógrafo..."
                    value={searchQuery}
                    onChange={(e) => onSearchChange(e.target.value)}
                    style={{
                        background: 'transparent',
                        border: 'none',
                        boxShadow: 'none',
                        paddingLeft: 44,
                        fontSize: '1.08rem',
                        color: 'var(--text-color)',
                        height: 48,
                        borderRadius: 32,
                        outline: 'none',
                        fontWeight: 500
                    }}
                />
                {searchQuery && (
                    <button className="clear-search" onClick={() => onSearchChange('')} style={{ right: 12, top: '50%', transform: 'translateY(-50%)', position: 'absolute', background: 'none', border: 'none', color: '#7DC1BD', opacity: 0.7, cursor: 'pointer' }}>
                        <X size={18} />
                    </button>
                )}
            </div>
            <div className="filter-controls" style={{ gap: '0.5rem', padding: '0.5rem 0' }}>
                <Filter size={22} style={{ color: '#7DC1BD', opacity: 0.8 }} />
                <div className="gallery-filters" style={{ gap: 10, flexWrap: 'wrap', display: 'flex' }}>
                    {filters.map(filter => (
                        <button
                            key={filter.id}
                            className={activeFilter === filter.id ? 'active' : ''}
                            onClick={() => onFilterChange(filter.id)}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: 7,
                                padding: '0.7rem 1.3rem',
                                borderRadius: 22,
                                border: 'none',
                                background: activeFilter === filter.id ? 'var(--primary-color, #7DC1BD)' : 'rgba(255,255,255,0.85)',
                                color: activeFilter === filter.id ? '#fff' : 'var(--text-color)',
                                fontWeight: 600,
                                fontSize: '1.01rem',
                                boxShadow: activeFilter === filter.id ? '0 2px 12px rgba(125,193,189,0.13)' : '0 1px 6px rgba(0,0,0,0.04)',
                                transform: activeFilter === filter.id ? 'translateY(-2px) scale(1.04)' : 'none',
                                transition: 'all 0.18s cubic-bezier(0.4,0,0.2,1)',
                                cursor: 'pointer',
                                outline: activeFilter === filter.id ? '2px solid #7DC1BD44' : 'none',
                                minWidth: 110
                            }}
                        >
                            <span style={{ display: 'inline-flex', alignItems: 'center', color: activeFilter === filter.id ? '#fff' : '#7DC1BD', opacity: 0.9 }}>{filter.icon}</span>
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
