import axios from "axios";
const URL = "http://localhost:8082/cuota";
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
        return axios.post(URL +"/crearCuota",cuota)
    }
    
    marcarCuotaComoPagada(cuotaId){
        return axios.post(URL +"/modificarCuota",cuotaId)
    }
    
}
export default new CuotaService()