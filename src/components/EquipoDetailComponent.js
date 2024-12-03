import React, { Component } from "react";
import {
    Card, CardBody, CardImg, CardTitle, CardText, Col, Row, Breadcrumb, BreadcrumbItem,
    Modal, ModalHeader, ModalBody, Button, Label
} from "reactstrap";
import { Control, LocalForm, Errors } from "react-redux-form";
import { Link } from "react-router-dom";

const required = val => val && val.length;
const maxLength = len => val => !val || (val.length <= len);
const minLength = len => val => val && (val.length >= len);

class CommentForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false
        };
        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }
    handleSubmit(values) {
        this.toggleModal();
        this.props.addComment(this.props.equipoId, values.rating, values.author, values.comment);
    }

    render() {
        return (
            <div>
                <Button outline onClick={this.toggleModal}><span className="fa fa-pencil fa-lg"></span> Enviar Comentario</Button>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Enviar Comentario</ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                            <Row className="form-group">
                                <Label htmlFor="rating" md={12}>Calificación</Label>
                                <Col md={12}>
                                    <Control.select model=".rating" name="rating" className="form-control">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Control.select>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="author" md={12}>Su nombre</Label>
                                <Col md={12}>
                                    <Control.text model=".author" id="author" name="author" placeholder="Su Nombre" className="form-control"
                                        validators={{
                                            required, minLength: minLength(3), maxLength: maxLength(15)
                                        }} />
                                    <Errors
                                        className="text-danger"
                                        model=".author"
                                        show="touched"
                                        messages={{
                                            required: 'Requerido',
                                            minLength: 'Debe ser mayor a 2 caracteres',
                                            maxLength: 'Debe ser menor que 15 caracteres'
                                        }}
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="comment" md={12}>Comentario</Label>
                                <Col md={12}>
                                    <Control.textarea model=".comment" id="comment" name="comment" rows="6"
                                        className="form-control"
                                        validators={{
                                            required
                                        }}
                                    />
                                </Col>
                                <Errors
                                    className="text-danger"
                                    model=".comment"
                                    show="touched"
                                    messages={{
                                        required: 'Requerido'
                                    }}
                                />
                            </Row>
                            <Button type="submit" value="submit" color="primary">Enviar</Button>
                        </LocalForm>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}

function RenderEquipo({ equipo }) {
    return (
        <Col md="3">
            <Card>
                <CardImg top src={equipo.image} alt={equipo.name} />
                <CardBody>
                    <CardTitle><strong>Nombre del Equipo:</strong> {equipo.name}</CardTitle>
                    <CardText><strong>Descripción:</strong> {equipo.description}</CardText>
                </CardBody>
            </Card>
        </Col>
    );
}

function RenderComments({ comments, addComment, equipoId }) {
    if (comments != null)
        return (
            <Col md="3" className="text-start">
                <h3>Comentarios</h3>
                <ul className="list-unstyled">
                    {comments.map((comment) => {
                        return (
                            <li key={comment.id}>
                                <p>{comment.comment}</p>
                                <p>* {comment.author},
                                    {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comment.date)))}
                                </p>
                                <p>Calificación: {comment.rating}</p>
                            </li>
                        );
                    })}
                </ul>
                <h3>Calificaciones</h3>
                <p>{comments.length} comentarios</p>
                <CommentForm equipoId={equipoId} addComment={addComment} />
            </Col>
        );
}

const EquipoDetail = (props) => {
    if (props.equipo != null)
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.equipo.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.equipo.name}</h3>
                        <hr />
                    </div>
                </div>
                <Row>
                    <RenderEquipo equipo={props.equipo} />
                    <RenderComments comments={props.comments} addComment={props.addComment} equipoId={props.equipo.id} />
                </Row>
            </div>
        );
    else
        return (
            <div></div>
        );
}

export default EquipoDetail;