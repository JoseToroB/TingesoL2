import React, { Component } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PruebaService from "../services/PruebaService";

class CargarNotasComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            file: null,
        };
        this.onFileChange = this.onFileChange.bind(this);
    }

    onFileChange(event) {
        this.setState({ file: event.target.files[0] });
    }

    onFileUpload = () => {
        if (this.state.file) {  // Verificar si se ha seleccionado un archivo
            const formData = new FormData();
            formData.append("file", this.state.file);
            PruebaService.subirPruebas(formData).then((res) => {
                this.props.history.push("/");
                toast.success("Notas cargadas con éxito", {
                    autoClose: 2000, // Duración en milisegundos (2 segundos)
                });
            });
            
        } else {
            toast.error("Seleccione un archivo.");  
        }
    }

    render() {
        return (
            <div className="f">
                <div className="container">
                    <h1><b>Subir Notas</b></h1>
                    <Row className="mt-4">
                        <Col col="12">
                            <Form.Group className="mb-3" controlId="formFileLg">
                                <Form.Control type="file" size="lg" onChange={this.onFileChange} />
                            </Form.Group>
                            <Button variant="primary" onClick={this.onFileUpload}>
                                Subir notas
                            </Button>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

export default CargarNotasComponent;