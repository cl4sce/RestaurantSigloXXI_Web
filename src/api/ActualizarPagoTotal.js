/* 
curl --location --request POST \
'https://g96da999b89fb17-restaurantedb.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/sp_update_pagototal/' \
--header 'Content-Type: application/json' \
--data-binary '{
  "v_id": "<VALUE>",
  "v_pago": "<VALUE>",
  "v_total": "<VALUE>"
}'
*/
import axios from "axios";

const API_URL = "https://g96da999b89fb17-restaurantedb.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/sp_update_pagototal/"

export const pagoTotal = async(id_ped, pag,tot) => {
    return await axios.post(API_URL , {
        v_id: id_ped,
        v_pago: pag,
        v_total: tot
    });
}