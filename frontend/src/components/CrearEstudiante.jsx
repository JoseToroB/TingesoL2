import React, { Component } from 'react';
import EstudianteService from '../services/EstudianteService';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class CrearEstudianteComponent extends Component{
    constructor(props){
        super(props);
        this.state={
            apellido:'',
            nombre:'',
            rut:'',
            fechaNacimiento:'',
            nombreColegio:'',
            anioEgreso:'',
            tipoColegio:''
        };
        this.cambiarApellidoHandler=this.cambiarApellidoHandler.bind(this);
        this.cambiarNombreHandler=this.cambiarNombreHandler.bind(this);
        this.cambiarRutHandler=this.cambiarRutHandler.bind(this);
        this.cambiarFechaNacimientoHandler=this.cambiarFechaNacimientoHandler.bind(this);
        this.cambiarNombreColegioHandler=this.cambiarNombreColegioHandler.bind(this);
        this.cambiarAnioEgresoHandler=this.cambiarAnioEgresoHandler.bind(this);
        this.cambiarTipoColegioHandler=this.cambiarTipoColegioHandler.bind(this);
        this.guardarEstudiante=this.guardarEstudiante.bind(this);
    }
    guardarEstudiante=(event)=>{
        event.preventDefault();
        let estudiante={
            apellido:this.state.apellido,
            nombre:this.state.nombre,
            rut:this.state.rut,
            fechaNacimiento:this.state.fechaNacimiento,
            nombreColegio:this.state.nombreColegio,
            anioEgreso:this.state.anioEgreso,
            tipoColegio:this.state.tipoColegio
        };
        EstudianteService.crearEstudiante(estudiante).then(res=>{
            //agregar el estudiante con el service
            toast.success("Botón funciona, falta agregar estudiante", {
                autoClose: 2000, // Duración en milisegundos (2 segundos)
            });
        });
    };
    cambiarApellidoHandler=(event)=>{
        this.setState({apellido:event.target.value});
    };
    cambiarNombreHandler=(event)=>{
        this.setState({nombre:event.target.value});
    };
    cambiarRutHandler=(event)=>{
        this.setState({rut:event.target.value});
    };
    cambiarFechaNacimientoHandler=(event)=>{
        this.setState({fechaNacimiento:event.target.value});
    };
    cambiarNombreColegioHandler=(event)=>{
        this.setState({nombreColegio:event.target.value});
    };
    cambiarAnioEgresoHandler=(event)=>{
        this.setState({anioEgreso:event.target.value});
    };
    cambiarTipoColegioHandler=(event)=>{
        this.setState({tipoColegio:event.target.value});
    };
    render(){
        return(
            <div>
                <div className="container-sm">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Agregar Estudiante</h3>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label>Apellido:</label>
                                        <input placeholder="Apellido" name="apellido" className="form-control"
                                        value={this.state.apellido} onChange={this.cambiarApellidoHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Nombre:</label>
                                        <input placeholder="Nombre" name="nombre" className="form-control"
                                        value={this.state.nombre} onChange={this.cambiarNombreHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label>RUT:</label>
                                        <input placeholder="RUT" name="rut" className="form-control"
                                        value={this.state.rut} onChange={this.cambiarRutHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Fecha de Nacimiento:</label>
                                        <input placeholder="Fecha de Nacimiento" name="fechaNacimiento" className="form-control"
                                        value={this.state.fechaNacimiento} onChange={this.cambiarFechaNacimientoHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Nombre del Colegio:</label>
                                        <input placeholder="Nombre del Colegio" name="nombreColegio" className="form-control"
                                        value={this.state.nombreColegio} onChange={this.cambiarNombreColegioHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Año de Egreso:</label>
                                        <input placeholder="Año de Egreso" name="anioEgreso" className="form-control"
                                        value={this.state.anioEgreso} onChange={this.cambiarAnioEgresoHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Tipo de Colegio:</label>
                                        <input placeholder="Tipo de Colegio" name="tipoColegio" className="form-control"
                                        value={this.state.tipoColegio} onChange={this.cambiarTipoColegioHandler}/>
                                    </div>
                                    <button className="btn btn-success" onClick={this.guardarEstudiante}>Guardar</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default CrearEstudianteComponent;