export default function Reservas() {
  return (
    <form className="form-reservas">
      <input
        type="text"
        name="nombre"
        placeholder="Nombre"
        required
      />
      <input
        type="text"
        name="apellido"
        placeholder="Apellido"
        required
      />
      <input
        type="email"
        name="email"
        placeholder="your@email.com"
        required
      />
      
      {/* Botón de enviar */}
      <button type="submit" className="botoncete">
        Reservar
      </button>
    </form>
  );
}
