import React from "react";
import '../hojas-de-estilo/menu.css';
import ElegirPago from "./ElegirPago";

function Pagar(){
    return(
        <div>  
            <div className="aplicacion-menu">
                <div className="aplicacion-lista-menu">
                    <h1>Elegir Medio de Pago</h1>
                    <div align="center">
                        <ElegirPago />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Pagar;