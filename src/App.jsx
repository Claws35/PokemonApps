import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Inicio from "./Pages/Inicio";
import Detalle from "./Pages/Detalle";
import ErrorPage from "./Pages/Error404";
const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/pokemon/:id" element={<Detalle />} />
          <Route path="/" element={<Inicio />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
