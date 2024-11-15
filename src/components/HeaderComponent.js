import React, { Component } from 'react';
import {
    Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem,
    Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isNavOpen: false,
            isModalOpen: false
        }
        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }
    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }
    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }
    handleLogin(event) {
        this.toggleModal();
        alert("Username: " + this.username.value + " Password: " + this.password.value + " Remember: " + this.remember.checked);
        event.preventDefault();
    }

    render() {
        return (
            <React.Fragment>
                <Navbar dark color="dark" expand="md">
                    <div className='container'>
                        <div className="row">
                            <div className="col-3 col-sm-1">
                                <NavbarToggler onClick={this.toggleNav} />
                                <NavbarBrand className="mr-auto"><img alt="Resto Pablo" src="./assets/logoPabloL.jpg" height="40" />
                                </NavbarBrand>
                            </div>
                            <div className="col-7 col-sm-5">
                                <Collapse isOpen={this.state.isNavOpen} navbar>
                                    <Nav navbar>
                                        <NavItem>
                                            <NavLink className="nav-link" to="/home"><span className="fa fa-home fa-lg"></span>Inicio</NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink className="nav-link" to="/menu"><span className="fa fa-coffee fa-lg"></span> Menu</NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink className="nav-link" to="/about"><span className="fa fa-info fa-lg"></span> Acerca de</NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink className="nav-link" to="/contact"><span className="fa fa-phone fa-lg"></span> Contactos</NavLink>
                                        </NavItem>
                                    </Nav>
                                    <Nav className="ml-auto" navbar>
                                        <NavItem>
                                            <Button outline onClick={this.toggleModal}><span className="fa fa-sign-in fa-lg"></span> Login</Button>
                                        </NavItem>
                                    </Nav>
                                </Collapse>
                            </div>
                        </div>
                    </div>
                </Navbar>
                <div className='jumbotron'>
                    <div className='container'>
                        <div className='row row-header'>
                            <div className='col-12 mt-5'>
                                <h1>Resto Pablo</h1>
                                <p className='lead'>Bienvenido a nuestro restaurante</p>
                            </div>
                        </div>
                    </div>
                </div>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleLogin}>
                            <FormGroup>
                                <Label htmlFor="username">Username</Label>
                                <Input type="text" id="username" name="username"
                                    innerRef={(input) => this.username = input} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password">Password</Label>
                                <Input type="password" id="password" name="password"
                                    innerRef={(input) => this.password = input} />
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" id="remember" name="remember"
                                        innerRef={(input) => this.remember = input} />
                                    {' '}Remember me
                                </Label>
                            </FormGroup>
                            <Button type="submit" value="submit" color="primary">Login</Button>
                        </Form>
                    </ModalBody>
                </Modal>
            </React.Fragment>
        );
    }
}
export default Header;
