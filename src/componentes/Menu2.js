import React from "react";
import "../hojas-de-estilo/menu.css";
import { AiOutlineCloseCircle } from "react-icons/ai";
import CardMenu from "../componentes/CardMenu";
import "../hojas-de-estilo/CardMenu.css";
import IngresarMenu from "../componentes/IngresarMenu";

function Menu({ texto, tachar }) {
  const arreglo = [
    {
      titulo: "Hamburguesa",
      precio: "$7.000",
      descripcion: "esta es una descripcion",
    },
    {
      titulo: "Pizza",
      precio: "$10.000",
      descripcion:
        "Pizza familiar, con champiñones, choclo, aceitunas y extra queso.",
    },
    {
      titulo: "Suchi",
      precio: "$13.000",
      descripcion: "10 Tempura, 10 env.palta, 10 Champiñon.",
    },
  ];
  return (
    <div>
      <div className="aplicacion-menu" align="center">
        <div className="aplicacion-lista-menu">
          <h1>Menú</h1>
          <div
            className={tachar ? "menu-contenedor tachar" : "menu-contenedor"}
          >
            <div className="menu-texto">{texto}</div>

            <div className="menu-contenedor-icono">
              <AiOutlineCloseCircle className="menu-icono" />
            </div>
          </div>
          <div className="contenedor-cardmenu">
            {arreglo.map((item, id) => (
              <CardMenu
                key={id}
                titulo={item.titulo}
                precio={item.precio}
                descripcion={item.descripcion}
              />
            ))}
          </div>
          <IngresarMenu />
        </div>
      </div>
    </div>
  );
}

export default Menu;
