import * as React from 'react';
import { useState, useEffect } from "react";
import axios from "axios";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

export default function ElegirMenu() {
  const [ platosCategorias , setListadocategorias] = useState([]);
  const obtenerCategoria = async() =>{
      const API_PLATO_CATEGORIA_URL = "https://g96da999b89fb17-restaurantedb.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/plato_categoria/";
      const result = await axios.get(API_PLATO_CATEGORIA_URL);
      setListadocategorias(result.data.items);
  } 

  useEffect(()=>{
      obtenerCategoria()
  },[]);

  const listCat = platosCategorias.map((cat) =>
      <Tab key={cat.id_plato_categoria}  label={cat.nombre_plato_categoria} />
  );

  const [value, setValue] = React.useState('one');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  //const result = await obtenerPlaCategoria(5);

  //console.log(platosCategorias);

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
      >
        {listCat}
      </Tabs>
    </Box>
  );
}
