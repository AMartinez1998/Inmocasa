export default function Footer({titulo,phone,email,address,copyright}){
    return(
        <footer>
            <h2>{titulo}</h2>
            <div className="contenedor-footer">
            <span className="textillo">
          <p>{phone}</p>
          <p>{email}</p>
          <p>{address}</p>
          <p>{copyright}</p>
        </span>

            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9525.874048886828!2d-6.258825669016719!3d53.352769664495376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48670e888add5d2d%3A0x6223c70a062b51c2!2sDublin%201!5e0!3m2!1ses!2sie!4v1756356737409!5m2!1ses!2sie" 
            width="600" height="450" 
            style={{ border: 0 }} 
            allowfullscreen="" 
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade">

            </iframe>
            </div>
        </footer>
    )
}