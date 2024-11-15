import React from "react";
import { Link } from "react-router-dom";
function Footer(props) {
    return (
        <div className="footer">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-4 offset-1 col-sm-2">
                        <h5>Enlaces</h5>
                        <ul className="list-unstyled">
                            <li><Link to="./home">Home</Link></li>
                            <li><Link to="./menu">Lista de Equipos</Link></li>
                            <li><Link to="./about">Acerca de</Link></li>
                            <li><Link to="./contact">Contactos</Link></li>
                        </ul>
                    </div>
                    <div className="col-7 col-sm-5">
                        <h5>Nuestra dirección</h5>
                        <address>
                            El Olivo<br />
                            Av. 17 de Julio<br />
                            Ibarra - Ecuador<br />
                            <i className="fa fa-phone"></i>: +00000000000000<br />
                            <i className="fa fa-envelope"></i>: <a href="mailto:info@utn.edu.ec">info@utn.edu.ec</a>
                        </address>
                    </div>
                    <div className="col-12 col-sm-4 align-self-center">
                        <div className="text-center">
                            <a className="btn btn-social-icon btn-facebook" href="https://www.facebook.com" target="_blank"><i className="fa fa-facebook"></i></a>
                            <a className="btn btn-social-icon btn-linkedin" href="https://www.linkedin.com" target="_blank"><i className="fa fa-linkedin"></i></a>
                            <a className="btn btn-social-icon btn-twitter" href="https://www.x.com" target="_blank"><i className="fa fa-twitter"></i></a>
                            <a className="btn btn-social-icon btn-google" href="https://www.google.com" target="_blank"><i className="fa fa-google-plus"></i></a>
                            <a className="btn btn-social-icon btn-github" href="https://www.github.com" target="_blank"><i className="fa fa-github"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer;

