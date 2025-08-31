import { useState } from "react";
import Tarjeta from "./Casa-compra";

export default function Alquilar() {
  const casas = [
    { id: 1, imagen: "casa1.png", habitaciones: 3, precio: 1200 },
    { id: 2, imagen: "casa1.png", habitaciones: 2, precio: 900 },
    { id: 3, imagen: "casa1.png", habitaciones: 4, precio: 1800 },
    { id: 4, imagen: "casa1.png", habitaciones: 1, precio: 700 },
    { id: 5, imagen: "casa1.png", habitaciones: 5, precio: 2500 },
  ];

  const [filtroHabitaciones, setFiltroHabitaciones] = useState(null);
  const [precioMin, setPrecioMin] = useState("");
  const [precioMax, setPrecioMax] = useState("");
  const [mostrarFiltros, setMostrarFiltros] = useState(false);

  // Filtrado de casas
  const casasFiltradas = casas.filter((casa) => {
    let coincideHabitaciones = true;
    let coincidePrecio = true;

    if (filtroHabitaciones) {
      coincideHabitaciones = casa.habitaciones === filtroHabitaciones;
    }

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
            <h3>Filtrar por precio de alquiler</h3>
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
            precio={`${casa.precio.toLocaleString()} €/mes`}
          />
        ))}
      </div>
    </div>
  );
}
