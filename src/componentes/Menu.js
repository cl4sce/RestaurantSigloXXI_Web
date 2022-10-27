import React from "react";
import '../hojas-de-estilo/menu.css';
import CardMenu from '../componentes/CardMenu';
import '../hojas-de-estilo/CardMenu.css';
import ElegirMenu from "./ElegirMenu";
import { useState, useEffect } from "react";
import axios from "axios";

function Menu(){
    const [ platos , setPlatos] = useState([]);

    useEffect(()=>{
        const obtenerPlato = async() =>{
            const API_PLATO_URL = "https://g96da999b89fb17-restaurantedb.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/platos/";
            const result = await axios.get(API_PLATO_URL);
            setPlatos(result.data.items);
        } 
        obtenerPlato()

    },[]);
    
    return(
        <div>    
            <div className="aplicacion-menu" align="center">
                <div className="aplicacion-lista-menu" >
                    <h1>Menú</h1>
                    <div>
                        <ElegirMenu align="center" />
                    </div>
                    <div className='contenedor-cardmenu'>
                        {platos.map( (item) => 
                            <CardMenu id={item.id_plato} titulo={item.nombre} precio={item.precio_plato} descripcion={item.descripcion} />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Menu;