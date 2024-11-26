import React, { Component } from "react";
import { Breadcrumb, BreadcrumbItem, Label, Col, Button, Row } from "reactstrap";
import { Link } from "react-router-dom";
import { Control, LocalForm, Errors } from "react-redux-form";

const required=(val)=>val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);
const isNumber = (val) => !isNaN(Number(val));
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

class Contact extends Component {
    handleSubmit(values) {
        console.log("Current State is: " + JSON.stringify(values));
        alert("Current State is: " + JSON.stringify(values));
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Inicio</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Contacto</BreadcrumbItem>
                    </Breadcrumb>

                    <div className="col-12">
                        <h3>Información de ubicación</h3>
                    </div>
                    <hr />
                    <div className="col-12 col-sm-4 offset-sm-1">
                        <h5>Direcciones</h5>
                        <address-black>
                            El Olivo<br />
                            Av. 17 de Julio<br />
                            Ibarra - Ecuador<br />
                            <i className="fa fa-phone"></i> +00000000000000<br />
                            <i className="fa fa-envelope"></i> <a href="mailto:info@utn.edu.ec">info@utn.edu.ec</a>
                        </address-black>
                    </div>
                    <div className="col-12 col-sm-6 offset-sm-1">
                        <h5>Mapa</h5>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7979.478989250737!2d-78.11192808158974!3d0.36016022769342837!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e2a3cad309ad309%3A0xc97eab5c0f6a095e!2sUniversidad%20Tecnica%20del%20Norte%20%22UTN%22!5e0!3m2!1ses!2sec!4v1685397487674!5m2!1ses!2sec" width="200" height="200" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <div className="col-12 col-sm-11 offset-sm-1">
                        <div className="btn-group" role="group">
                            <a role="button" className="btn btn-primary" href="tel:+59312345678"><i className="fa fa-phone"></i> Llamar</a>
                            <a role="button" className="btn btn-info"><i className="fa fa-amazon"></i> Amazon</a>
                            <a role="button" className="btn btn-success" href="mailto:palandeta@utn.edu.ec"><i className="fa fa-envelope-o"></i> Email</a>
                        </div>
                    </div>
                </div>
                <div className="row row-content">
                    <div className="col-12">
                        <h3>Enviar comentarios</h3>
                    </div>
                    <div className="col-12 col-md-9">
                        <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                            <Row className="form-group">
                                <Label htmlFor="firstname" md={2}>Primer Nombre</Label>
                                <Col md={10}>
                                    <Control.text model=".firstname" id="firstname" name="firstname"
                                        placeholder="Primer Nombre"
                                        className="form-control"
                                        validators={{
                                            required, minLength: minLength(3), maxLength: maxLength(15)
                                        }}
                                    />
                                    <Errors className="text-danger" model=".firstname" show="touched"
                                    messages={{
                                        required: "Campo requerido",
                                        minLength: "Debe tener al menos 3 caracteres",
                                        maxLength: "Debe tener menos de 15 caracteres"
                                    }} />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="lastname" md={2}>Apellido</Label>
                                <Col md={10}>
                                    <Control.text model=".lastname" id="lastname" name="lastname"
                                        placeholder="Apellido"
                                        className="form-control"
                                        validators={{
                                            required, minLength: minLength(3), maxLength: maxLength(15)
                                        }}                                        
                                    />
                                    <Errors className="text-danger" model=".lastname" show="touched"
                                    messages={{
                                        required: "Campo requerido",
                                        minLength: "Debe tener al menos 3 caracteres",
                                        maxLength: "Debe tener menos de 15 caracteres"
                                    }} />                                    
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="phone" md={2}>Teléfono</Label>
                                <Col md={10}>
                                    <Control.text model=".phone" id="phone" name="phone"
                                        placeholder="Teléfono"
                                        className="form-control"
                                        validators={{
                                            required, isNumber, minLength: minLength(9), maxLength: maxLength(13)
                                        }}  
                                    />
                                    <Errors className="text-danger" model=".phone" show="touched"
                                    messages={{
                                        required: "Campo requerido",
                                        isNumber: "Solo se acepta números",
                                        minLength: "Debe tener al menos 9 dígitos",
                                        maxLength: "Debe tener menos de 13 dígitos"                                        
                                    }} /> 
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="email" md={2}>Correo Electrónico</Label>
                                <Col md={10}>
                                    <Control.text model=".email" id="email" name="email"
                                        placeholder="Correo Electrónico"
                                        className="form-control"
                                        validators={{
                                            required, validEmail
                                        }}                                         
                                    />
                                    <Errors className="text-danger" model=".email" show="touched"
                                    messages={{
                                        required: "Campo requerido",
                                        validEmail: "La dirección de correo es invalida"                                       
                                    }} />                                    
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={{ size: 6, offset: 2 }}>
                                    <div className="form-check">
                                        <Label check>
                                            <Control.checkbox model=".agree" id="agree" 
                                            name="agree" className="form-check-input"/>{' '}"
                                            <strong>Podemos cantactarle?</strong>
                                        </Label>
                                    </div>
                                </Col>
                                <Col md={{size:3, offset:1}}>
                                    <Control.select model=".contactType" name="contactType" className="form-control">
                                        <option>Teléfono</option>
                                        <option>Email</option>
                                    </Control.select>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="message" md={2}>Mensaje</Label>
                                <Col md={10}>
                                    <Control.textarea model=".message" id="message" 
                                    name="message" rows="12" className="form-control"
                                    validators={{
                                        required
                                    }}                                     
                                    />
                                    <Errors className="text-danger" model=".message" show="touched"
                                    messages={{
                                        required: "Campo requerido"                                      
                                    }} />                                    
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={{ size: 10, offset: 2 }}>
                                    <Button type="submit" color="primary">Enviar</Button>
                                </Col>
                            </Row>
                        </LocalForm>
                    </div>
                </div>
            </div>
        );
    }
}
export default Contact;
