import axios from "axios";
const URL = "http://localhost:8080/pruebas";

class PruebaService{
    obtenerPrueba(){
        return axios.get(URL);
    }
    borrarTodo(){
        return axios.post(URL +"/borrarTodo")
    }
    subirPruebas(file){
        return axios.post(URL,file)
    }
}
export default new PruebaService()