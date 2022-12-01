import React from "react";
import '../hojas-de-estilo/menu.css';
import CardMenu from '../componentes/CardMenu';
import '../hojas-de-estilo/CardMenu.css';
import ElegirMenu from "./ElegirMenu";
import { useState, useEffect } from "react";
import axios from "axios";
import { MenuApi } from '../api/PlatoApi.js';

function Menu(){
    const [ platos , setPlatos] = useState([]);

    /*const obtenerPlato = async() =>{
        const API_PLATO_URL = "https://g96da999b89fb17-restaurantedb.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/platos/";
        const result = await axios.get(API_PLATO_URL);
        setPlatos(result.data.items);
    } */

    const obtenerPlato = async () => {
        const result = await MenuApi();
    
        if (result.status === 200) {
          //Setear valor de data en variable
          setPlatos(result.data.v_platos);
        } else {
          //Error de servicio
        }
      };

    useEffect(()=>{
        obtenerPlato()
    },[]);

    //console.log(MenuApi);
    
    return(
        <div>    
            <div className="aplicacion-menu" align="center">
                <div className="aplicacion-lista-menu" >
                    <h1>Elegir Menú</h1>
                    <div>
                        <ElegirMenu align="center" />
                    </div>
                    <div className='contenedor-cardmenu'>
                        {platos.map( (item, id) => 
                            <CardMenu key = {id} id={item.id_plato} titulo={item.nombre} precio={item.precio_plato} 
                                    descripcion={item.descripcion} categoria = {item.nombre_plato_categoria}
                                    sigla = {item.sigla_plato_categoria}/>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Menu;