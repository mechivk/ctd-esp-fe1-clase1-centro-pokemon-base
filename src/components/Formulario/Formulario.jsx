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
                name="nombre"
                label="Nombre"
                placeholder="Ingrese su nombre"
              />
              <Input
                name="apellido"
                label="Apellido"
                placeholder="Ingrese su apellido"
              />
              <Input
                name="email"
                label="Email"
                type="email"
                placeholder="Ingrese su email"
              />
            </div>
            <div>
              <p className="nombre-seccion">
                <img src={pikachu} alt="pikachu" />
                <span>POKEMON</span>
              </p>
              <Input
                name="nombrePokemon"
                label="Nombre"
                placeholder="Ingrese el nombre de su pokemon"
              />
              <Input
                name="tipoPokemon"
                label="Tipo"
                placeholder="Ingrese el tipo de su pokemon"
              />
              <Input
                name="elementoPokemon"
                label="Elemento"
                placeholder="Ingrese el elemento de su pokemon"
              />
              <Input
                name="alturaPokemon"
                label="Altura"
                placeholder="Ingrese la altura de su pokemon"
              />
              <Input
                name="edadPokemon"
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
