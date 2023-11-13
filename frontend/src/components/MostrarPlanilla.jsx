import React, { Component } from 'react';
import PlanillaService from '../services/PlanillaService';

class MostrarPlanillaComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            studentId: '',
            planilla: null,
        };

        this.handleStudentIdChange = this.handleStudentIdChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleStudentIdChange(event) {
        this.setState({ studentId: event.target.value });
    }

    async handleSubmit(event) {
        event.preventDefault();
        const { studentId } = this.state;
        const planilla = await PlanillaService.crearPlanilla(studentId);
        this.setState({ planilla });
    }

    render() {
        const { studentId, planilla } = this.state;

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Estudiante ID:
                        <input type="text" value={studentId} onChange={this.handleStudentIdChange} />
                    </label>
                    <button type="submit">Calcular Planilla</button>
                </form>
                {planilla && (
                    <div>
                        <h2>Planilla</h2>

                        <p>Nombre Estudiante: {planilla.idEstudiante}</p>
                        <p>Rut Estudiante: {planilla.rutEstudiante}</p>
                        <p>Cantidad Pruebas rendidas: {planilla.cantidadPruebasRendidas}</p>
                        <p>Promedio Pruebas: {planilla.promedioPruebas}</p>
                        <p>Monto total a pagar: {planilla.cantidadTotal}</p>
                        <p>Tipo de Pago: {planilla.tipoPago}</p>
                        <p>Cuotas Totales: {planilla.cuotasTotal}</p>
                        <p>Cuotas Pagadas: {planilla.cuotasPagadas}</p>
                        <p>Total Pagado: {planilla.cantidadPagada}</p>
                        <p>Fecha ultimo pago: {planilla.fechaUltimoPago}</p>
                        <p>Monto a pagar: {planilla.cantidadApagar}</p>
                        <p>Cuotas con retraso: {planilla.cuotasRetraso}</p>
                        <p>Fecha Creacion Planilla: {planilla.fechaCreacionPlanilla}</p>
                        
                        
                    </div>
                )}
            </div>
        );
    }
}

export default MostrarPlanillaComponent;
