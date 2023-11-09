import React, { Component } from 'react'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CuotaService from '../services/CuotaService';
import EstudianteService from '../services/EstudianteService';
import PlanillaService from '../services/PlanillaService';
import PruebaService from '../services/PruebaService';

class HeaderComponent extends Component {
    constructor (props){
        super(props)

        this.state = {

        }
        
    }

    borrarTodo(){
        toast.success("Botón funciona, falta borrar todo", {
            autoClose: 2000, // Duración en milisegundos (2 segundos)
          });
    }
    
    render(){
        return (
            <>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <a class="navbar-brand" href="/">Tingeso Evaluacion 2</a>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item">
                            <a class="nav-link" href="/cuota">ver cuotas</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/estudiante">estudiantes</a>
                        </li>
    
                        <li class="nav-item">
                            <a class="nav-link" onClick={this.borrarTodo}>boton vaciar</a>
                        </li>
                    </ul>
                </div>
            </nav>
            </>
        )
    }
}

export default HeaderComponent