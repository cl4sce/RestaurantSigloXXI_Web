import axios from "axios";

const API_URL = "https://g96da999b89fb17-restaurantedb.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/sp_ver_detalle_pedidos_web/"

/*curl --location --request POST \
'https://g96da999b89fb17-restaurantedb.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/sp_ver_detalle_pedidos_web/' \
--header 'Content-Type: application/json' \
--data-binary '{
  "v_detalle": "<VALUE>"
}'*/

export const newPedido = async(id_det) => {
    return await axios.post(API_URL , {
        v_detalle: id_det
    });
}