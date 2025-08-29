import Tarjeta from './Casa-compra'
export default function Comprar(){
    return(
        <div className='contenedores-compra'>
        <Tarjeta
        imagen="casa1.png"
        habitaciones="3 habitaciones"
        precio="150.000$"
        />

        <Tarjeta
        imagen="casa1.png"
        habitaciones="2 habitaciones"
        precio="120.000$"
        />
        <Tarjeta
        imagen="casa1.png"
        habitaciones="2 habitaciones"
        precio="120.000$"
        />
        <Tarjeta
        imagen="casa1.png"
        habitaciones="2 habitaciones"
        precio="120.000$"
        />
        <Tarjeta
        imagen="casa1.png"
        habitaciones="2 habitaciones"
        precio="120.000$"
        />

        </div>
    )
}