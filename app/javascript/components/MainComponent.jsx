import React, { Component } from 'react';
import { Route, Routes, useLocation, useNavigate, useParams } from 'react-router-dom';
import Header from './application/HeaderComponent';
import Footer from './application/FooterComponent';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import DishDetails from './DishDetailsComponent';
import About from './AboutComponent';

import { connect } from 'react-redux';
import { fetchDishes, fecthComments, postComment,createUser } from '../redux/ActionCreators';
import Login from './authentication/LoginComponent';
// Map the state to props
const  mapStateToProps = (state) => {
    return {
        dishes: state.dishes,
        comments: state.comments
    }
};
// Let map the dispatch to props
const mapDispatchToProps = (dispatch) => ({
    fetchDishes: () => { dispatch(fetchDishes()) },
    fecthComments: () => { dispatch(fecthComments()) },
    postComment: (dishId, rating, author, comment) => { dispatch(postComment(dishId, rating, author, comment)) },
    createUser: () => { dispatch(createUser()) }
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
        this.props.fecthComments();
        this.props.createUser();
    }

    render(){
        const HomePage = () => {
            return (
                <Home dish = { this.props.dishes.dishes.filter((dish) => dish.featured)[0] } 
                    dishesLoading = { this.props.dishes.isLoading }
                    dishesErrMessage = { this.props.dishes.errMessage } />
            );
        };
        // Create a Dish with Id that map the dish with its ID
        const DishWithId = ({ match }) => {
            return(
                <DishDetails 
                    isLoading = { this.props.dishes.isLoading }
                    errMessage = { this.props.dishes.errMessage }
                    dish = { this.props.dishes.dishes.filter((dish) => dish.id === parseInt(match.params.dish_id, 10))[0] }
                    commentsErrMessage = { this.props.comments.errMessage }
                    comment = { this.props.messages.messages.filter((comment) => comment.dish_id === parseInt(match.params.dish_id, 10)) }
                    postComment = { this.props.postComment }
                />
            );
        };
        return (
            <div>
                <Header />
                <Routes>
                    <Route exact path = '/home' element = { <HomePage /> }/>
                    <Route exact path = "/menu" element = { <Menu dishes = { this.props.dishes } /> } />
                    <Route exact path = "/aboutus" element = { <About /> } />
                    <Route path = '/menu/:dish_id' element = { DishWithId } />
                </Routes>
                <Footer />
            </div>
            
        );
    }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));