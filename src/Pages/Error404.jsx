// 404Page.jsx
import React from "react";
import { Link } from "react-router-dom";
import BotonGenerico from "../Componentes/BotonGenerico";

const ErrorPage = () => {
  return (
    <div className=" bg-slate-400 h-[100vh]">
      <div className="flex justify-center items-center min-h-[700px] flex-col	">
        <div>
          <h1 className=" text-[36px] text-slate-50">
            Error 404: Page Not Found
          </h1>
        </div>
        <div className="bg-imagen-fondo-Error h-[400px] w-[600px] bg-cover rounded-lg my-10"></div>

        <Link to="/">
          <div className=" animate-bounce">
            <BotonGenerico text="Volver al inicio" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
