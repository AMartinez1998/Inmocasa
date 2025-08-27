export default function Card({titulo,parrafo,imagen,alt}){
    return(
        <div className="card">
      <div className="card-text">
        <h1>{titulo}</h1>
        <p>{parrafo}</p>
      </div>

      <div className="card-imagen">
        <img src={imagen} alt={alt} />
      </div>
    </div>
    )
}