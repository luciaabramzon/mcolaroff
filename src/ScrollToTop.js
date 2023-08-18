import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isLoading) {
      return; // Evita el scroll mientras se carga el componente
    }

    window.scrollTo(0, 0);

    const handlePopState = () => {
      setTimeout(() => {
        window.scrollTo(0, 0);
      }, 0);
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, [pathname, isLoading]);

  // Simulación de carga, reemplaza esto con tu lógica real de carga
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000); // Cambia el tiempo de carga según tus necesidades
  }, []);

  return isLoading ? (
    <div>Loading...</div>
  ) : (
    <div className="scroll-to-top-placeholder">
      {/* No se muestra, solo se usa para disparar el useEffect */}
      <div></div>
    </div>
  );
}

export default ScrollToTop;
