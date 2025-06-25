// useScrollRestoration.js
import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const useScrollRestoration = () => {
    const { pathname } = useLocation();

    // Deshabilitar la restauración automática del navegador
    useLayoutEffect(() => {
        if ('scrollRestoration' in window.history) {
            window.history.scrollRestoration = 'manual';
        }
    }, []);

    useLayoutEffect(() => {
        const xicotepecSubRoutes = [
            '/festival/',
            '/hotel/',
            '/restaurant/',
            '/atractivo/',
            '/xicotepec/tour/'
        ];

        const isXicotepecSubRoute = xicotepecSubRoutes.some(route => pathname.includes(route));
        const isXicotepecMainPage = pathname === '/xicotepec';

        if (isXicotepecMainPage) {
            const savedScrollPosition = sessionStorage.getItem('xicotepecScrollPosition');
            const cameFromSubPage = sessionStorage.getItem('cameFromXicotepecSubPage');
            
            if (cameFromSubPage === 'true' && savedScrollPosition) {
                const scrollY = parseInt(savedScrollPosition, 10);
                
                // Aplicar el scroll de manera inmediata
                document.documentElement.scrollTop = scrollY;
                document.body.scrollTop = scrollY; // Para compatibilidad con Safari
                
                sessionStorage.removeItem('cameFromXicotepecSubPage');
            } else {
                document.documentElement.scrollTop = 0;
                document.body.scrollTop = 0;
            }
        } else if (isXicotepecSubRoute) {
            sessionStorage.setItem('cameFromXicotepecSubPage', 'true');
            document.documentElement.scrollTop = 0;
            document.body.scrollTop = 0;
        } else {
            document.documentElement.scrollTop = 0;
            document.body.scrollTop = 0;
            sessionStorage.removeItem('xicotepecScrollPosition');
            sessionStorage.removeItem('cameFromXicotepecSubPage');
        }
    }, [pathname]);
};
