import React, { Component } from 'react'
import EstudianteService from '../services/EstudianteService';

class ListaEstudiantesComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            estudiantes: []
        };
    }
    componentDidMount() {
        EstudianteService.obtenerEstudiantes().then((res) => {
            this.setState({ estudiantes: res.data });
        });
        
    }
    
    render() {
        const { estudiantes } = this.state;
        return (
            <div className="container-sm">
                {estudiantes.length === 0 ? (
                    <div className="alert alert-info">No hay una lista de alumnos.</div>
                    
                ) : (
                    <table className="table table-dark table-striped table-bordered">
                        <thead className="thead-light">
                            <tr>
                                <th>ID</th>
                                <th>Apellido</th>
                                <th>Nombre</th>
                                <th>RUT</th>
                                <th>Fecha de Nacimiento</th>
                                <th>Nombre del Colegio</th>
                                <th>Año de Egreso</th>
                                <th>Tipo de Colegio</th>
                            </tr>
                        </thead>
                        <tbody>
                            {estudiantes.map((alumno) => (
                                <tr key={alumno.id}>
                                    <td>{alumno.id}</td>
                                    <td>{alumno.apellido}</td>
                                    <td>{alumno.nombre}</td>
                                    <td>{alumno.rut}</td>
                                    <td>{alumno.fechaNacimiento}</td>
                                    <td>{alumno.nombreColegio}</td>
                                    <td>{alumno.anioEgreso}</td>
                                    <td>{alumno.tipoColegio}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        );
    }
}
export default ListaEstudiantesComponent