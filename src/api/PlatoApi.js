import { useState, useEffect } from "react";
import axios from "axios";

export default function PlatoApi(){
    const [ platos , setPlatos] = useState([]);

    useEffect(()=>{
        const obtenerPlato = async() =>{
            const API_PLATO_URL = "https://g96da999b89fb17-restaurantedb.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/platos/";
            const result = await axios.get(API_PLATO_URL);
            setPlatos(result.data.items);
        } 
        obtenerPlato()

    },[]);

}
