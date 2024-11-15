import React, { Component } from "react";
import { Breadcrumb, BreadcrumbItem, Form, Input, Label, Col, FormGroup, Button, Row, FormFeedback } from "reactstrap";
import { Link } from "react-router-dom";

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstN: "",
            lastN: "",
            phone: "",
            email: "",
            agree: false,
            contactType: "Teléfono",
            message: "",
            touched: {
                firstN: false,
                lastN: false,
                phone: false,
                email: false
            }
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === "checkbox" ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        console.log("Current State is: " + JSON.stringify(this.state));
        alert("Current State is: " + JSON.stringify(this.state));
        event.preventDefault();
    }
    handleBlur = (field) => (evt) => {
        this.setState({
            touched: { ...this.state.touched, [field]: true }
        });
    }
    validate(firstN, lastN, phone, email) {
        const errors = {
            firstN: "",
            lastN: "",
            phone: "",
            email: ""
        };
        if (this.state.touched.firstN && firstN.length < 3)
            errors.firstN = "El nombre debe tener al menos 3 caracteres";
        else if (this.state.touched.firstN && firstN.length > 10)
            errors.firstN = "El nombre debe tener menos de 10 caracteres";
        if (this.state.touched.lastN && lastN.length < 3)
            errors.lastN = "El apellido debe tener al menos 3 caracteres";
        else if (this.state.touched.lastN && lastN.length > 10)
            errors.lastN = "El apellido debe tener menos de 10 caracteres";
        const reg = /^\d+$/;
        if (this.state.touched.phone && !reg.test(phone))
            errors.phone = "El teléfono debe contener solo números";
        if (this.state.touched.email && email.split("").filter(x => x === "@").length !== 1)
            errors.email = "El email debe contener un @";
        return errors;
    }

    render() {
        const errors = this.validate(this.state.firstN, this.state.lastN, this.state.phone, this.state.email);
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
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup row>
                                <Label htmlFor="firstN" md={2}>Primer Nombre</Label>
                                <Col md={10}>
                                    <Input type="text" id="firstN" name="firstN"
                                        placeholder="Primer Nombre"
                                        value={this.state.firstN}
                                        onChange={this.handleInputChange}
                                        valid={errors.firstN === ''}
                                        invalid={errors.firstN !== ''}
                                        onBlur={this.handleBlur('firstN')}
                                    />
                                    <FormFeedback>{errors.firstN}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="lastN" md={2}>Apellido</Label>
                                <Col md={10}>
                                    <Input type="text" id="lastN" name="lastN"
                                        placeholder="Apellido"
                                        value={this.state.lastN}
                                        onChange={this.handleInputChange}
                                        valid={errors.lastN === ''}
                                        invalid={errors.lastN !== ''}
                                        onBlur={this.handleBlur('lastN')}
                                    />
                                    <FormFeedback>{errors.lastN}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="phone" md={2}>Teléfono</Label>
                                <Col md={10}>
                                    <Input type="tel" id="phone" name="phone"
                                        placeholder="Teléfono"
                                        value={this.state.phone}
                                        onChange={this.handleInputChange}
                                        valid={errors.phone === ''}
                                        invalid={errors.phone !== ''}
                                        onBlur={this.handleBlur('phone')}
                                    />
                                    <FormFeedback>{errors.phone}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="email" md={2}>Correo Electrónico</Label>
                                <Col md={10}>
                                    <Input type="email" id="email" name="email"
                                        placeholder="Correo Electrónico"
                                        value={this.state.email}
                                        onChange={this.handleInputChange}
                                        valid={errors.email === ''}
                                        invalid={errors.email !== ''}
                                        onBlur={this.handleBlur('email')}
                                    />
                                    <FormFeedback>{errors.email}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{ size: 6, offset: 2 }}>
                                    <FormGroup check>
                                        <Label check>
                                            <Input type="checkbox" id="agree" name="agree" checked={this.state.agree} onChange={this.handleInputChange} />{' '}"
                                            <strong>Podemos cantactarle?</strong>
                                        </Label>
                                    </FormGroup>
                                </Col>
                                <Col md={4}>
                                    <Input type="select" name="contactType" value={this.state.contactType} onChange={this.handleInputChange}>
                                        <option>Teléfono</option>
                                        <option>Email</option>
                                    </Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="message" md={2}>Mensaje</Label>
                                <Col md={10}>
                                    <Input type="textarea" id="message" name="message" rows="12" value={this.state.message} onChange={this.handleInputChange}></Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{ size: 10, offset: 2 }}>
                                    <Button type="submit" color="primary">Enviar</Button>
                                </Col>
                            </FormGroup>
                        </Form>
                    </div>
                </div>
            </div>
        );
    }
}
export default Contact;


