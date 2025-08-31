import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Navegacion() {
  const [abierto, setAbierto] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 720);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 720);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="menu-container">
      {isMobile && (
        <button className="boton-menu" onClick={() => setAbierto(!abierto)}>
          ☰
        </button>
      )}
      <ul className={`barra-menu ${abierto ? "activo" : ""}`}>
        <li><Link to="/Home">Home</Link></li>
        <li><Link to="/Comprar">Comprar</Link></li>
        <li><Link to="/Alquilar">Alquilar</Link></li>
        <li><Link to="/Reservas">Reservar Cita</Link></li>
      </ul>
    </nav>
  );
}
