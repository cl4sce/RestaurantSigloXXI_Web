import React from "react";
import '../hojas-de-estilo/menu.css';
import TablaDetalle from "./TableDetalle";

function DetallePedido(){
    return(
        <div>  
            <div className="aplicacion-menu">
                <div className="aplicacion-lista-menu">
                <h1>Detalle Del Pedido</h1>

                <TablaDetalle />
                </div>
            </div>
        </div>
    );
}

export default DetallePedido;