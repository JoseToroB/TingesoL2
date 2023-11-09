import axios from "axios";
const URL = "http://localhost:8080/cuota";

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
}
export default new CuotaService()