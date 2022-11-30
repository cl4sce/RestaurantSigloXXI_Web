import React from "react";
import "../hojas-de-estilo/menu.css";
import { Store } from "../store/Store";
import TablaDetalle from "./TableDetalle";

const DetallePedido = () => {
  return (
    <div>
      <div className="aplicacion-menu">
        <div className="aplicacion-lista-menu">
          <h1>Detalle Del Pedido</h1>

          <TablaDetalle store={Store} />
        </div>
      </div>
    </div>
  );
};

export default DetallePedido;
