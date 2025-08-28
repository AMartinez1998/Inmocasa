import { Link } from 'react-router-dom';
export default function Call({title,text,tolink,textlink}){
    return(
        <article className='big-card'>
            <div className='texto'>
            <h1>{title}</h1>
            <p>{text}</p>
            </div>

            <div className='enlace'>
            <Link to={tolink}>{textlink}</Link>
            </div>


        </article>
    )
}