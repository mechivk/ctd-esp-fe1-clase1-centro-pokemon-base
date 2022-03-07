// Aqui debemos crear nuestro contexto y nuestro provider.
import React, { useReducer } from "react";

export const FormContext = React.createContext({});

export const initialState = {
  entrenador: { nombre: "", apellido: "", email: "" },
  pokemon: {
    nombre: "",
    elemento: "",
    tipo: "",
    altura: "",
    edad: "",
  },
};

export const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ACTUALIZAR_ENTRENADOR":
      return {
        ...state,
        entrenador: {
          ...state.entrenador,
          [action.attribute]: action.payload,
        },
      };
    case "ACTUALIZAR_POKEMON":
      return {
        ...state,
        pokemon: { ...state.pokemon, [action.attribute]: action.payload },
      };
    default:
      throw new Error("No se ha recibido ningun tipo de acción...");
  }
};

export const FormContextProvider = ({ children }) => {
  let [state, dispatch] = useReducer(reducer, initialState);

  return (
    <FormContext.Provider value={{ formInfo: state, dispatch: dispatch }}>
      {children}
    </FormContext.Provider>
  );
};
