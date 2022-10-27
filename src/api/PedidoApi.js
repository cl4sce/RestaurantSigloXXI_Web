import axios from "axios";

const API_PEDIDO_URL = "https://g96da999b89fb17-restaurantedb.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/sp_create_plato/";

export const pedido = async (nombre, precio, descripcion, estado) => {
    return await axios.post(API_PEDIDO_URL,{
        v_nombre: nombre,
        v_precio_plato: precio,
        v_descripcion_plato: descripcion,
        v_estado_plato: estado, 
    });
};