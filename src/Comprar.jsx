import { useState } from "react";
import Tarjeta from "./Casa-compra";

export default function Comprar() {
  const casas = [
    { id: 1, imagen: "casa1.png", habitaciones: 3, precio: 150000 },
    { id: 2, imagen: "casa2.jpg", habitaciones: 2, precio: 120000 },
    { id: 3, imagen: "casa3.jpg", habitaciones: 4, precio: 200000 },
    { id: 4, imagen: "casa4.jpg", habitaciones: 1, precio: 90000 },
    { id: 5, imagen: "casa5.png", habitaciones: 5, precio: 250000 },
  ];

  const [filtroHabitaciones, setFiltroHabitaciones] = useState(null);
  const [precioMin, setPrecioMin] = useState("");
  const [precioMax, setPrecioMax] = useState("");
  const [mostrarFiltros, setMostrarFiltros] = useState(false);

  // Filtrado de casas
  const casasFiltradas = casas.filter((casa) => {
    let coincideHabitaciones = true;
    let coincidePrecio = true;

    // Filtrar por habitaciones
    if (filtroHabitaciones) {
      coincideHabitaciones = casa.habitaciones === filtroHabitaciones;
    }

    // Filtrar por rango de precio
    if (precioMin) {
      coincidePrecio = coincidePrecio && casa.precio >= parseInt(precioMin);
    }
    if (precioMax) {
      coincidePrecio = coincidePrecio && casa.precio <= parseInt(precioMax);
    }

    return coincideHabitaciones && coincidePrecio;
  });

  return (
    <div>
      {/* Botón que abre/cierra los filtros */}
      <button onClick={() => setMostrarFiltros(!mostrarFiltros)}>
        {mostrarFiltros ? "Cerrar filtros" : "Filtrar"}
      </button>

      {/* Bloque de filtros */}
      {mostrarFiltros && (
        <div className="filtros">
          {/* Input habitaciones */}
          <div>
            <h3>Filtrar por habitaciones (1-5)</h3>
            <input
              type="number"
              min="1"
              max="5"
              placeholder="Ej: 3"
              value={filtroHabitaciones || ""}
              onChange={(e) =>
                setFiltroHabitaciones(e.target.value ? parseInt(e.target.value) : null)
              }
            />
          </div>

          {/* Inputs de rango de precio */}
          <div>
            <h3>Filtrar por precio</h3>
            <input
              type="number"
              placeholder="Precio mínimo"
              value={precioMin}
              onChange={(e) => setPrecioMin(e.target.value)}
            />
            <input
              type="number"
              placeholder="Precio máximo"
              value={precioMax}
              onChange={(e) => setPrecioMax(e.target.value)}
            />
          </div>
        </div>
      )}

      {/* Renderizado de casas */}
      <div className="contenedores-compra">
        {casasFiltradas.map((casa) => (
          <Tarjeta
            key={casa.id}
            imagen={casa.imagen}
            habitaciones={`${casa.habitaciones} habitaciones`}
            precio={`${casa.precio.toLocaleString()} $`}
          />
        ))}
      </div>
    </div>
  );
}
