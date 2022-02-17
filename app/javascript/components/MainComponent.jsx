import React, { Component } from 'react';
import { Route, Routes, useLocation, useNavigate, useParams } from 'react-router-dom';
import Header from './application/HeaderComponent';
import Footer from './application/FooterComponent';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import DishDetails from './DishDetailsComponent';
import About from './AboutComponent';

import { connect } from 'react-redux';
import { fetchDishes } from '../redux/ActionCreators';
// Map the state to props
const  mapStateToProps = (state) => {
    return {
        dishes: state.dishes
    }
};
// Let map the dispatch to props
const mapDispatchToProps = (dispatch) => ({
    fetchDishes: () => { dispatch(fetchDishes()) }
});

// Let define withrouter function to map state and dispatch to props
function withRouter(Component){
    function ComponentWithRouterPop(props){
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();

        return (
            <Component
                {...props}
                router = {{ location, navigate, params }} />
        );
    }
    return ComponentWithRouterPop;
};

class Main extends Component{

    componentDidMount(){
        this.props.fetchDishes();
    }

    render(){
        const HomePage = () => {
            return (
                <Home dish = { this.props.dishes.dishes.filter((dish) => dish.featured)[0] } 
                    dishesLoading = { this.props.dishes.isLoading }
                    dishesErrMessage = { this.props.dishes.errMessage } />
            );
        }
        return (
            <div>
                <Header />
                <Routes>
                    <Route exact path = '/' element = { HomePage }/>
                    <Route exact path = "/menu" element = { <Menu dishes = { this.props.dishes } /> } />
                    <Route exact path = "/aboutus" element = { <About /> } />
                    <Route path = '/menu/:dishId' element = { <DishDetails/>} />
                </Routes>
                <Footer />
            </div>
            
        );
    }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));