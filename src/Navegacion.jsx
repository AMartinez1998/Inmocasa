import { Link } from 'react-router-dom';
export default function Navegacion(){
    return(
    <nav>
        <ul className="barra-menu">
        <li><Link to="/Home">Home</Link></li>
        <li><Link to="/Comprar">Comprar</Link></li>
        <li><Link to="/Alquilar">Alquilar</Link></li>
        <li><Link to="/Reservar">Reservar Cita</Link></li>
        <li><Link to="/Prestamos">Prestamos</Link></li>
        </ul>
    </nav>
    )
}