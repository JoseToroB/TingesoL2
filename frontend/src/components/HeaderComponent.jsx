import React, { Component } from 'react'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class HeaderComponent extends Component {
    
    borrarTodo() {
        toast.success("Botón funciona, falta borrar todo", {
            autoClose: 2000, // Duración en milisegundos (2 segundos)
        });
    }
    sendDataToParent = (data) => {
        // llamada cuando necesites enviar datos al padre
        console.info(data);
        this.props.onChildData(data);
      };

    render() {
        return (
            <>
                <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                    <button class="navbar-brand" onClick={()=>this.sendDataToParent("Home")}>Tingeso Evaluacion 2</button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li class="nav-item">
                                <button class="nav-link" onClick={()=>this.sendDataToParent("CrearEstudiantes")}>Agregar Estudiante</button>
                            </li>
                            <li class="nav-item">
                                <button class="nav-link" onClick={()=>this.sendDataToParent("ListaEstudiantes")}>Listar Estudiantes</button>
                            </li>
                            <li class="nav-item">
                                <button class="nav-link" onClick={()=>this.sendDataToParent("CrearCuota")}>Crear Cuota</button>
                            </li>
                            <li class="nav-item">
                                <button class="nav-link" onClick={()=>this.sendDataToParent("ListarCuotas")}>Listar Cuotas</button>
                            </li>
                            <li class="nav-item">
                                <button class="nav-link" onClick={()=>this.sendDataToParent("ModificarCuota")}>Pagar Cuotas</button>
                            </li>
                            <li class="nav-item">
                                <button class="nav-link" onClick={()=>this.sendDataToParent("CargarNotas")}>Subir Notas</button>
                            </li>
                            <li class="nav-item">
                                <button class="nav-link" onClick={()=>this.sendDataToParent("MostrarPlanilla")}>Mostrar planilla</button>
                            </li>
                            <li class="nav-item">
                                <button class="nav-link" click={this.borrarTodo}>boton vaciar</button>
                            </li>
                        </ul>
                    </div>
                </nav>
            </>
        )
    }
}

export default HeaderComponent