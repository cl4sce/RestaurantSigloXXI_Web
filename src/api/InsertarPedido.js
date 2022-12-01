/*
curl --location --request POST \
'https://g96da999b89fb17-restaurantedb.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/sp_create_pedido_web/' \
--header 'Content-Type: application/json' \
--data-binary '{
  "v_empleado": "<VALUE>",
  "v_mesa": "<VALUE>",
  "v_estado_pedido": "<VALUE>",
  "v_id_pago": "<VALUE>",
  "v_totalpedido": "<VALUE>"
}'
*/

import axios from "axios";

const API_URL = "https://g96da999b89fb17-restaurantedb.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/sp_create_pedido_web/'"

export const insPedido = async(mes,empl,ipag,totped, esta) => {
    return await axios.post(API_URL , {
      v_mesa: mes,
      v_empleado: empl,
      v_id_pago: ipag,
      v_totalpedido: totped,
      v_estado_pedido: esta,
    });
}