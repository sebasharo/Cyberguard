import React, { Component } from 'react';
import Menu from './MenuComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import EquipoDetail from './EquipoDetailComponent';
import About from './AboutComponent';
import { Routes, Route, useParams, useNavigate, useLocation } from 'react-router-dom';
import { connect } from 'react-redux';
import { addComment } from '../redux/ActionCreators';

function withRouter(Component) {
    return function WithRouter(props) {
        const navigate = useNavigate();
        const location = useLocation();
        return <Component {...props} navigate={navigate} location={location} />;
    };
}

const mapStateToProps = (state) => {
    return {
        aparatos: state.aparatos,
        comments: state.comments,
        promotions: state.promotions,
        ings: state.ings
    };
};

const mapDispatchToProps = (dispatch) => ({
    addComment: (equipoId, rating, author, comment) => dispatch(addComment(equipoId, rating, author, comment))
});

class Main extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const HomePage = () => {
            return (
                <Home
                    equipo={this.props.aparatos.filter((equipo) => equipo.featured)[0]}
                    promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
                    ing={this.props.ings.filter((ing) => ing.featured)[0]}
                />
            );
        };

        const EquipoWithId = () => {
            const params = useParams();
            return (
                <EquipoDetail
                    equipo={this.props.aparatos.filter((equipo) => equipo.id === parseInt(params.equipoId, 10))[0]}
                    comments={this.props.comments.filter((comment) => comment.equipoId === parseInt(params.equipoId, 10))}
                    addComment={this.props.addComment}
                />
            );
        };

        return (
            <div>
                <Header />
                <Routes>
                    <Route path="/home" element={<HomePage />} />
                    <Route exact path="/menu" element={<Menu aparatos={this.props.aparatos} />} />
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
