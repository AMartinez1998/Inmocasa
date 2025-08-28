import Card from './Card'
import Call from './Call-card'
export default function Home(){
return(
    <>
    <Card
    titulo="Inmocasa"
    parrafo="Inmocasa nació con la visión de transformar la forma en que las personas compran,
    venden y alquilan propiedades. Fundada por un equipo de profesionales apasionados por el
    sector inmobiliario, desde nuestros primeros pasos nos enfocamos en la confianza, la
    transparencia y la cercanía con nuestros clientes. Con el tiempo, hemos crecido acompañando 
    a cientos de familias e inversores a encontrar el hogar o la propiedad ideal, siempre combinando
    innovación tecnológica con un trato personalizado. Hoy, Inmocasa se consolida como una inmobiliaria
    moderna y comprometida, donde cada cliente es parte de nuestra historia."
    imagen="/inmocasa.png"
    alt="inmocasa"
    />

    <Card
    titulo="¿Por qué elegirnos?"
    parrafo="En Inmocasa creemos que elegir una inmobiliaria es confiar en un equipo que acompañará uno
     de los pasos más importantes de tu vida. Nos diferenciamos porque trabajamos con total transparencia,
      ofreciendo siempre información clara y honesta. Nuestro equipo combina experiencia profesional con
       cercanía humana, escuchando de verdad a cada cliente para entender sus necesidades y encontrar la
        propiedad ideal. Además, incorporamos innovación tecnológica que agiliza los procesos sin perder el 
        trato personalizado que nos caracteriza. Con nosotros no solo encontrarás una casa o una inversión,
         encontrarás la tranquilidad de estar en manos de una inmobiliaria comprometida contigo."
    imagen="/llave.png"
    alt="llave"
    />

    <div className='contenedor-calls'>
    <Call
    title="¿Buscando para comprar?"
    text="Aquí tienes nuestras mejores casas,listas para ti y tu familia.Aquí podrás ver todas las casas que tenemos en
    cartera que sin duda no te dejarán indiferente"
    textlink="Ir a Comprar"
    tolink="/Comprar"
    />

    <Call
    title="¿Buscando para Alquilar?"
    text="Aquí tienes nuestras mejores casas,listas para ti y tu familia.Aquí podrás ver todas las casas que tenemos en
    cartera que sin duda no te dejarán indiferente"
    textlink="Ir a Alquilar"
    tolink="/Alquilar"
    />
    </div>
   
    </>
)
}