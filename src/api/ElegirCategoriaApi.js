import { useState, useEffect } from "react";
import axios from "axios";
import Tab from '@mui/material/Tab';

function ElegirCategoriaApi(){

    const [ platosCategorias , setListadocategorias] = useState([]);

    useEffect(()=>{
        const obtenerCategoria = async() =>{
            const API_PLATO_CATEGORIA_URL = "https://g96da999b89fb17-restaurantedb.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/plato_categoria/";
            const result = await axios.get(API_PLATO_CATEGORIA_URL);
            setListadocategorias(result.data.items);
        } 
        obtenerCategoria()

    },[]);

    
    const listCat = platosCategorias.map((cat) =>
        <Tab key={cat.id_plato_categoria} label={cat.nombre_plato_categoria} />
    );

    console.log(listCat);

    return(
        {listCat}
    ) 
}
export default ElegirCategoriaApi;
