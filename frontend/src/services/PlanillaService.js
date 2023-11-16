import axios from "axios";
const URL = "http://localhost:8084/planilla";

class PlanillaService{
    obtenerPlanillas(){
        return axios.get(URL);
    }
    borrarTodo(){
        return axios.post(URL +"/borrarTodo")
    }
    crearPlanilla(planilla){
        return axios.post(URL +"/crearPlanilla",planilla)
    }
}
export default new PlanillaService()