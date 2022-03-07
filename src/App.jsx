import React, { useReducer } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Formulario from "./components/Formulario/Formulario";
import { reducer, initialState, FormContext } from "./context/FormContext";
import "./App.css";

function App() {
  let [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <FormContext.Provider value={{ formInfo: state, dispatch: dispatch }}>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/formularioIngreso" element={<Formulario />} />
        </Routes>
      </FormContext.Provider>
    </div>
  );
}

export default App;
