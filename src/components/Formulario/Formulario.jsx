import React from "react";
import { Link } from "react-router-dom";
import pokebola from "../../assets/pokebola.png";
import entrenador from "../../assets/entrenador.png";
import pikachu from "../../assets/pikachu.png";
import Input from "../Input/Input";
import Detalle from "./Detalle";

const Formulario = () => {
  return (
    <>
      <header className="form-header">
        <div>
          <img src={pokebola} alt="pokebola" />
          <h2>Centro Pokemon de Ash</h2>
        </div>
        <Link className="volver" to="/">
          Home
        </Link>
      </header>
      <div className="formulario-ingreso">
        <h3>Solicitud de atención</h3>
        <p>
          Por favor, completa el formulario para que podamos atender a tu
          pokémon
        </p>
        <div className="cuerpo-formulario">
          <div className="inputs">
            <div>
              <p className="nombre-seccion">
                <img src={entrenador} alt="entrenador" />
                <span>ENTRENADOR</span>
              </p>
              <Input
                action="ACTUALIZAR_ENTRENADOR"
                name="nombre"
                label="Nombre"
                placeholder="Ingrese su nombre"
              />
              <Input
                action="ACTUALIZAR_ENTRENADOR"
                name="apellido"
                label="Apellido"
                placeholder="Ingrese su apellido"
              />
              <Input
                action="ACTUALIZAR_ENTRENADOR"
                name="email"
                label="Email"
                placeholder="Ingrese su email"
              />
            </div>
            <div>
              <p className="nombre-seccion">
                <img src={pikachu} alt="pikachu" />
                <span>POKEMON</span>
              </p>
              <Input
                action="ACTUALIZAR_POKEMON"
                name="nombre"
                label="Nombre"
                placeholder="Ingrese el nombre de su pokemon"
              />
              <Input
                action="ACTUALIZAR_POKEMON"
                name="tipo"
                label="Tipo"
                placeholder="Ingrese el tipo de su pokemon"
              />
              <Input
                action="ACTUALIZAR_POKEMON"
                name="elemento"
                label="Elemento"
                placeholder="Ingrese el elemento de su pokemon"
              />
              <Input
                action="ACTUALIZAR_POKEMON"
                name="altura"
                label="Altura"
                placeholder="Ingrese la altura de su pokemon"
              />
              <Input
                action="ACTUALIZAR_POKEMON"
                name="edad"
                label="Edad"
                placeholder="Ingrese la edad de su pokemon"
              />
            </div>
          </div>
          <Detalle />
        </div>
      </div>
    </>
  );
};

export default Formulario;
