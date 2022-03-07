// Aqui debemos crear nuestro contexto y nuestro provider.
import React from "react";

export const FormContext = React.createContext({});

export const initialState = {
  nombre: "",
  apellido: "",
  email: "",
  nombrePokemon: "",
  elementoPokemon: "",
  tipoPokemon: "",
  alturaPokemon: "",
  edadPokemon: "",
};

export const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "EDIT":
      return { ...state, ...{ [action.attribute]: action.payload } };
    default:
      throw new Error("No se ha recibido ningun tipo de acción...");
  }
};
