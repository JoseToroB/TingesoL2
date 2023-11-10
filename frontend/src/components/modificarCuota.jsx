
import React, { Component } from 'react';
import CuotaService from '../services/CuotaService';

class ModificarCuotaComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cuotaId: '',
            error: '',
            successMessage: '',
        };
    }

    handleInputChange = (event) => {
        this.setState({ cuotaId: event.target.value });
    };

    handleSubmit = (event) => {
        event.preventDefault();

        const { cuotaId } = this.state;

        // Validar que se haya ingresado una cuotaId antes de realizar la solicitud
        if (cuotaId.trim() === '') {
            this.setState({ error: 'Ingrese una ID de Cuota válida.' });
            return;
        }

        // Limpiar el error y el mensaje de éxito si existen
        this.setState({ error: '', successMessage: '' });

        // Marcar la cuota como pagada
        CuotaService.marcarCuotaComoPagada(cuotaId)
            .then((res) => {
                this.setState({ successMessage: 'Cuota marcada como pagada con éxito.' });
            })
            .catch((error) => {
                this.setState({ error: 'Error al marcar la cuota como pagada.' });
            });

    };

    render() {
        const { cuotaId, error, successMessage } = this.state;
        return (
            <div>

                <h2>Marcar Cuota como Pagada</h2>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Ingrese la ID de la Cuota:
                        <input
                            type="text"
                            value={cuotaId}
                            onChange={this.handleInputChange}
                        />
                    </label>
                    <button type="submit">Marcar como Pagada</button>
                </form>
                {error && <div className="alert alert-danger">{error}</div>}
                {successMessage && <div className="alert alert-success">{successMessage}</div>}
            </div>
        );
    }
};
export default ModificarCuotaComponent;