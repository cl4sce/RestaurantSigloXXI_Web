/*curl --location --request POST \
'https://g96da999b89fb17-restaurantedb.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/sp_create_pedido_dos/' \
--header 'Content-Type: application/json' \
--data-binary '{
  "v_detalle": "<VALUE>",
  "v_empleado": "<VALUE>",
  "v_mesa": "<VALUE>",
  "v_estado_pedido": "<VALUE>"
}'*/

import axios from "axios";

const API_URL = "https://g96da999b89fb17-restaurantedb.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/sp_create_pedido_dos/"

export const newPedido = async(deta, empl, mes, esta) => {
    return await axios.post(API_URL , {
        v_detalle: deta,
        v_empleado: empl,
        v_mesa: mes,
        v_estado_pedido: esta,
    });
}