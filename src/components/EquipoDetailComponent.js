import React from "react";
import { Card, CardBody, CardImg, CardTitle, CardText, Col, Row, Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from "react-router-dom";

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

function RenderComments({ comments }) {
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
            </Col>
        );
}

const EquipoDetail = ( props ) => {
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
                    <RenderComments comments={props.comments} />
                </Row>
            </div>
        );
    else
        return (
            <div></div>
        );
}

export default EquipoDetail;





