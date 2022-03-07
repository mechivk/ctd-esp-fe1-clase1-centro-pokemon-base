import React, { useContext, useEffect } from "react";

import { FormContext } from "../../context/FormContext";

const Detalle = () => {
  // Aqui deberíamos obtener los datos del formulario para poder mostrarlo en
  // la vista previa.
  const { formInfo } = useContext(FormContext);

  useEffect(() => {
    console.log(formInfo);
  }, [formInfo]);

  return (
    <div className="detalle-formulario">
      <div className="encabezado">
        <h3>Vista Previa de la Solicitud</h3>
      </div>
      <section className="datos-cliente">
        <h4>Datos del Entrenador</h4>
        <div className="fila">
          <p>Nombre: {formInfo.entrenador.nombre}</p>
          <p>Apellido: {formInfo.entrenador.apellido}</p>
          <p>Email: {formInfo.entrenador.email}</p>
        </div>
      </section>
      <section className="datos-cliente">
        <h4>Datos del Pokémon</h4>
        <div className="fila">
          <p>Nombre: {formInfo.pokemon.nombre}</p>
          <p>Tipo: {formInfo.pokemon.tipo}</p>
          <p>Elemento: {formInfo.pokemon.elemento}</p>
          <p>Altura: {formInfo.pokemon.altura}</p>
          <p>Edad: {formInfo.pokemon.edad}</p>
        </div>
      </section>
      <button
        className="boton-enviar"
        onClick={() => alert("Solicitud enviada :)")}
      >
        Enviar Solicitud
      </button>
    </div>
  );
};

export default Detalle;
