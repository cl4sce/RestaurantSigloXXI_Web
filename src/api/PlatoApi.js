import axios from "axios";

const API_URL = "https://g96da999b89fb17-restaurantedb.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/sp_ver_menu/"

export const MenuApi = async() => {
    return await axios.post(API_URL);
}
