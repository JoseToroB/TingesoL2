import axios from 'axios';
const URL = "http://localhost:8083/estudiante";

class EstudianteService{
    obtenerEstudiantes(){
        return axios.get(URL);
    }
    borrarTodo(){
        return axios.post(URL +"/borrarEstudiantes")
    }
    crearEstudiante(estudiante){
        return axios.post(URL +"/crearEstudiante",estudiante)
    }
}
export default new EstudianteService()