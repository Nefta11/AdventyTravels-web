import { useState, useEffect } from "react";

/**
 * Hook personalizado para manejar la opacidad decreciente de la web con overlay negro
 * @param {string} startDate - Fecha de inicio en formato 'YYYY-MM-DD'
 * @param {number} totalDaysToFade - Número total de días para que la opacidad llegue a 0
 * @returns {object} - Objeto con opacidad y overlay negro
 */
const useFadeOpacity = (startDate = "2025-07-03", totalDaysToFade = 30) => {
  const [opacity, setOpacity] = useState(1);
  const [blackOverlay, setBlackOverlay] = useState(0);

  useEffect(() => {
    // Fecha de inicio
    const start = new Date(startDate);
    const currentDate = new Date();

    // Calcular días transcurridos desde la fecha de inicio
    const timeDiff = currentDate.getTime() - start.getTime();
    const daysDiff = Math.floor(timeDiff / (1000 * 3600 * 24));

    // Calcular opacidad basada en los días transcurridos
    let calculatedOpacity = 1 - daysDiff / totalDaysToFade;
    
    // Calcular overlay negro (inverso de la opacidad)
    let calculatedBlackOverlay = daysDiff / totalDaysToFade;

    // Asegurar que los valores estén entre 0 y 1
    calculatedOpacity = Math.max(0, Math.min(1, calculatedOpacity));
    calculatedBlackOverlay = Math.max(0, Math.min(0.9, calculatedBlackOverlay)); // Máximo 90% para no ser completamente negro

    setOpacity(calculatedOpacity);
    setBlackOverlay(calculatedBlackOverlay);

    // Log para debugging (puedes remover esto en producción)
    console.log(
      `Días transcurridos: ${daysDiff}, Opacidad: ${calculatedOpacity.toFixed(
        2
      )}, Overlay Negro: ${calculatedBlackOverlay.toFixed(2)}`
    );
  }, [startDate, totalDaysToFade]);

  return {
    opacity,
    blackOverlay,
    styles: {
      content: { opacity: opacity, transition: 'opacity 0.3s ease' },
      overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: `rgba(0, 0, 0, ${blackOverlay})`,
        pointerEvents: 'none',
        zIndex: 9999,
        transition: 'background-color 0.3s ease'
      }
    }
  };
};

export default useFadeOpacity;
