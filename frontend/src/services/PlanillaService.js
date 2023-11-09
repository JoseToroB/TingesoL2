import axios from "axios";
const URL = "http://localhost:8080/planilla";

class PlanillaService{
    obtenerPlanillas(){
        return axios.get(URL);
    }
    borrarTodo(){
        return axios.post(URL +"/borrarTodo")
    }
}
export default new PlanillaService()