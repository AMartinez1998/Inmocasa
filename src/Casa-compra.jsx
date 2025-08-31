import { Link } from 'react-router-dom';
export default function Tarjeta({imagen,habitaciones,precio}){
    return(
        <>
        <article className='tarjeta-casa'>
        <img src={imagen} alt="foto casa"/>
        <p>{habitaciones}</p>
        <p>{precio}</p>
        
        <div className='enlace'>
            <Link to="/Reservas">Reservar visita</Link>
            </div>
        </article>
        </>
    )
}