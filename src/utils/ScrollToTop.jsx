// ScrollToTop.jsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        // Hacer scroll al inicio de la página de manera instantánea (sin animación)
        window.scrollTo(0, 0);
    }, [pathname]);

    return null; // Este componente no renderiza nada
};

export default ScrollToTop;
