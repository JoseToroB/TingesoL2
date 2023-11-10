import axios from "axios";
const URL = "http://localhost:8080/cuota";
/*
arreglar las url base para los distintos llamados
*/
class CuotaService{
    obtenerCuota(){
        return axios.get(URL);
    }
    borrarTodo(){
        return axios.post(URL +"/borrarCuotas")
    }
    crearCuota(cuota){
        return axios.post(URL,cuota)
    }
    /*
    marcarCuotaComoPagada(cuotaId){
    */
}
export default new CuotaService()