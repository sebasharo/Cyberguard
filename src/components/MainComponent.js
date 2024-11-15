import React, { Component } from 'react';
import Menu from './MenuComponent';
import { aparato } from '../shared/aparatos';
import { COMENTARIOS } from '../shared/comentarios';
import { PROMOCIONES } from '../shared/promociones';
import { INGS } from '../shared/ings';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent'
import EquipoDetail from './EquipoDetailComponent';
import About from './AboutComponent';
import { Routes, Route, useParams } from 'react-router-dom';
class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            aparatos: aparato,
            comments: COMENTARIOS,
            promotions: PROMOCIONES,
            ings: INGS
        }
    }

    render() {
        const HomePage = () => {
            return (
                <Home
                    equipo={this.state.aparatos.filter((equipo) => equipo.featured)[0]}
                    promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
                    ing={this.state.ings.filter((ing) => ing.featured)[0]}
                />
            );
        };

        const EquipoWithId = () => {
            const params = useParams();
            return (
                <EquipoDetail equipo={this.state.aparatos.filter((equipo) => equipo.id === parseInt(params.equipoId, 10))[0]}
                    comments={this.state.comments.filter((comment) => comment.equipoId === parseInt(params.equipoId, 10))}
                />
            );
        };

        return (
            <div>
                <Header />
                <Routes>
                    <Route path="/home" element={<HomePage />} />
                    <Route exact path="/menu" element={<Menu aparatos={this.state.aparatos} />} />
                    <Route path="/menu/:equipoId" element={<EquipoWithId />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/acercade" element={<About />} />
                    <Route to="/home" />
                </Routes>
                <Footer />
            </div>
        );
    }
}

export default Main;
