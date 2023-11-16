import React, { Component } from 'react';
import CuotaService from '../services/CuotaService';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
class CrearCuotaComponent extends Component{
    constructor(props){
        super(props);
        this.state={
            idEstudiante:'',
            numeroCuota:'',
            cantidadCuota:'',
            montoOriginal:'', 
            montoAPagar:'',
            fechapaPago:'',
            estaAtrasada:'',
            estaPagado:'',
            rebajada:''
        };
        this.cambioIdEstudianteHandler=this.cambioIdEstudianteHandler.bind(this);
        this.cambiarNumeroCuotaHandler=this.cambiarNumeroCuotaHandler.bind(this);
        this.cambiarCantidadCuotaHandler=this.cambiarCantidadCuotaHandler.bind(this);
        this.cambiarMontoaPagarHandler=this.cambiarMontoaPagarHandler.bind(this);
        this.cambiarFechaPagoHandler=this.cambiarFechaPagoHandler.bind(this);
        this.guardarCuota=this.guardarCuota.bind(this);
    }
    guardarCuota=(event)=>{
        event.preventDefault();
        let cuota={
            idEstudiante:this.state.idEstudiante,
            numeroCuota:this.state.numeroCuota,
            cantidadCuota:this.state.cantidadCuota,
            montoAPagar:this.state.montoAPagar,
            fechapaPago:this.state.fechapaPago,
            montoOriginal:this.state.montoAPagar,
            estaAtrasada:0,
            estaPagado:0,
            rebajada:0
        };
        CuotaService.crearCuota(cuota).then(res=>{
            //agregar cuota con el service
            CuotaService.crearCuota(cuota);
            toast.success("Cuota creada con éxito", {
                autoClose: 2000, // Duración en milisegundos (2 segundos)
            });
        });
    };
    cambioIdEstudianteHandler=(event)=>{
        this.setState({idEstudiante:event.target.value});
    };
    cambiarNumeroCuotaHandler=(event)=>{
        this.setState({numeroCuota:event.target.value});
    };
    cambiarCantidadCuotaHandler=(event)=>{
        this.setState({cantidadCuota:event.target.value});
    };
    cambiarMontoaPagarHandler=(event)=>{
        this.setState({montoAPagar:event.target.value});
    };
    cambiarFechaPagoHandler=(event)=>{
        this.setState({fechapaPago:event.target.value});
    };
    render(){
        return(
            <div>
                <div className="container-sm">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">crear Cuota</h3>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label>idEstudiante:</label>
                                        <input placeholder="idEstudiante" name="idEstudiante" className="form-control"
                                        value={this.state.idEstudiante} onChange={this.cambioIdEstudianteHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label>numeroCuota</label>
                                        <input placeholder="numeroCuota" name="numeroCuota" className="form-control"
                                        value={this.state.numeroCuota} onChange={this.cambiarNumeroCuotaHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label>cantidadCuota:</label>
                                        <input placeholder="cantidadCuota" name="cantidadCuota" className="form-control"
                                        value={this.state.cantidadCuota} onChange={this.cambiarCantidadCuotaHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label>montoAPagar</label>
                                        <input placeholder="MontoAPagar" name="montoAPagar" className="form-control"
                                        value={this.state.montoAPagar} onChange={this.cambiarMontoaPagarHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label>fechaPago</label>
                                        <input placeholder="FechaPago" name="fechaPago" className="form-control"
                                        value={this.state.fechaPago} onChange={this.cambiarFechaPagoHandler}/>
                                    </div>
                                    <button className="btn btn-success" onClick={this.guardarCuota}>Guardar</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}
export default CrearCuotaComponent;