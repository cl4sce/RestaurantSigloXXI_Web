import { observer } from "mobx-react-lite";
import React from "react";
import "../hojas-de-estilo/menu.css";
import ElegirPago from "./ElegirPago";

const Pagar = observer(({ store }) => {
  function ccyFormat(num) {
    //return `${num.toFixed(0)}`;
    return `${new Intl.NumberFormat("de-DE").format(num)}`;
  }

  return (
    <div>
      <div className="aplicacion-menu">
        <div className="aplicacion-lista-menu">
          <h1>Elegir Medio de Pago</h1>
          <div align="center">
            <ElegirPago total = {store.totalInvoiceGlobal} />
          </div>
          <h1>El total a pagar es: ${ccyFormat(store.totalInvoiceGlobal)}</h1>
        </div>
      </div>
    </div>
  );
});

export default Pagar;
