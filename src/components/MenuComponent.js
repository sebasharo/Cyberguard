import React from "react";
import { Card, CardImgOverlay, CardTitle, CardImg, Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from "react-router-dom";

function RenderMenuItem({ equipo}) {
    return (
        <div key={equipo.id}>
            <Card>
                <Link to={`/menu/${equipo.id}`}>
                    <CardImg 
                        width="90%"className="menu-image" src={equipo.image} alt={equipo.name} />
                    <CardImgOverlay>
                    <CardTitle tag="h5" style={{ color: "black" }}>{equipo.name}</CardTitle>
                    </CardImgOverlay>
                </Link>
            </Card>
        </div>
    );
}

const Menu = (props) => {
    const menu = props.aparatos.map((equipo) => {
        return (
            <div key={equipo.id} className="col-12 col-sm-3">
                <RenderMenuItem equipo={equipo} />
            </div>
        );
    });
    return (
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Inicio</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Equipo</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>Equipos</h3>
                    <hr />
                </div>
            </div>
            <div className="row">
                {menu}
            </div>
        </div>
    );
}

export default Menu;

   