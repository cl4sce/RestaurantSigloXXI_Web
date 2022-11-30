import axios from "axios";

const API_URL = "https://g96da999b89fb17-restaurantedb.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/sp_create_detalle_pedido/"

/*curl --location --request POST \
'https://g96da999b89fb17-restaurantedb.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/sp_create_detalle_pedido/' \
--header 'Content-Type: application/json' \
--data-binary '{
  "v_producto": "<VALUE>",
  "v_pago": "<VALUE>",
  "v_plato": "<VALUE>",
  "v_mesa": "<VALUE>",
  "v_total": "<VALUE>",
  "v_cantidad": "<VALUE>",
  "v_nombre_plato": "<VALUE>"
}'*/

export const newPedido = async(det, pla, can, tot, nom_pla, est_pla) => {
    return await axios.post(API_URL , {
        v_id_detalle: det,
        v_plato: pla,
        v_precio: tot,
        v_cantidad: can,
        v_nombre_plato: nom_pla,
        v_estado: est_pla,
    });
}