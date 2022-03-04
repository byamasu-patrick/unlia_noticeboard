import React, { Component } from 'react';
import { Route, Routes, useLocation, useNavigate, useParams } from 'react-router-dom';
import Header from './application/HeaderComponent';
import Footer from './application/FooterComponent';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import DishDetails from './DishDetailsComponent';
import About from './AboutComponent';
import { connect } from 'react-redux';
import { fetchDishes, fecthComments, postComment,createUser, isUserAuth } from '../redux/ActionCreators';
import { actions } from 'react-redux-form';
import Authentication from './authentication/AuthenticationComponent';
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
    postComment: ([dish_id, rating, author, comment]) => { dispatch(postComment(dish_id, rating, author, comment)) },
    resetDishComment: () => { dispatch(actions.reset('comment_form')) },
    createUser: () => { dispatch(createUser()) },
    isUserAuth: () => { dispatch(isUserAuth()) }
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
        this.props.isUserAuth();

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
        const DishWithId = () => {
            const params = useParams();
            return(
                <DishDetails 
                    isLoading = { this.props.dishes.isLoading }
                    errMessage = { this.props.dishes.errMessage }
                    dish = { this.props.dishes.dishes.filter((dish) => dish.id === parseInt(params.dish_id, 10))[0] }
                    commentsErrMessage = { this.props.comments.errMessage }
                    comments = { this.props.comments.comments.filter((comment) => comment.dish_id === parseInt(params.dish_id, 10)) }
                    postComment = { this.props.postComment }
                    resetDishComment = { this.props.resetDishComment }
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
                    <Route path = '/menu/:dish_id' element = { <DishWithId /> } />
                </Routes>
                <Footer />
            </div>
            
        );
    }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));