import React, { Component } from "react"
import CuotaService from "../services/CuotaService";
class ListaCuotasComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cuotas: [],
            idEstudiante: '', // Inicializamos con una cadena vacía
            error: '',
        };
    }

    handleInputChange = (event) => {
        this.setState({ idEstudiante: event.target.value });
    };

    handleSubmit = () => {
        const { idEstudiante } = this.state;

        // Validar que se haya ingresado una idEstudiante antes de realizar la solicitud
        if (idEstudiante.trim() === '') {
            this.setState({ error: 'Ingrese una ID de Estudiante válida.' });
            return;
        }

        // Limpiar el error si existe
        this.setState({ error: '' });

        // Obtener cuotas después de ingresar la idEstudiante
        CuotaService.obtenerCuotas(idEstudiante).then((res) => {
            const cuotasFiltradas = res.data.filter(
                (cuota) => cuota.idEstudiante === idEstudiante
            );
            this.setState({ cuotas: cuotasFiltradas });
        });
    };
    render() {
        const { cuotas, error } = this.state;

        return (
            <div className="container-sm">
                <div>
                    <label>
                        Ingrese la ID del Estudiante:
                        <input
                            type="text"
                            value={this.state.idEstudiante}
                            onChange={this.handleInputChange}
                        />
                    </label>
                    <button onClick={this.handleSubmit}>Cargar Cuotas</button>
                </div>
                {error && <div className="alert alert-danger">{error}</div>}
                {cuotas.length === 0 ? (
                    <div className="alert alert-info">No hay una lista de cuotas.</div>
                ) : (
                    <table className="table table-dark table-striped table-bordered">
                        <thead className="thead-light">
                            <tr>
                                <th>ID</th>
                                <th>ID Estudiante</th>
                                <th>Número de Cuota</th>
                                <th>Cantidad de Cuotas</th>
                                <th>Monto Original</th>
                                <th>Monto a Pagar</th>
                                <th>Fecha de Pago</th>
                                <th>¿Está Atrasada?</th>
                                <th>¿Está Pagada?</th>
                                <th>¿Está Rebajada?</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cuotas.map((cuota) => (
                                <tr key={cuota.id}>
                                    <td>{cuota.id}</td>
                                    <td>{cuota.idEstudiante}</td>
                                    <td>{cuota.numeroCuota}</td>
                                    <td>{cuota.cantidadCuota}</td>
                                    <td>{cuota.montoOriginal}</td>
                                    <td>{cuota.montoAPagar}</td>
                                    <td>{cuota.fechapaPago}</td>
                                    <td>{cuota.estaAtrasada}</td>
                                    <td>{cuota.estaPagado}</td>
                                    <td>{cuota.rebajada}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        );
    }

}
export default ListaCuotasComponent;