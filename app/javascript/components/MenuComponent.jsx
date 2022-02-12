import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
import { Link } from 'react-router-dom';


const RenderMenuItem = ({ dish }) => {
    return (
        <Card>
            <Link to = { `/menu/${ dish.id }` }>
                <CardImg src = { dish.image } width = '100%' alt= { dish.name }/>
                <CardImgOverlay body className='ml-5'>
                    <CardTitle>{ dish.name }</CardTitle>
                </CardImgOverlay>
            </Link>
        </Card>
    );
}
class Menu extends Component{
    constructor(props){
        super(props);

        this.state = {
            dishes: []
        };
    }
    componentDidMount(){
        fetch('/api/v1/dishes/index')
        .then(response => {
            if(response.ok){
                return  response;
            }
            else{
                var error = new Error("Error "+ response.status +": "+ response.statusText);
                error.response = response;
                throw error;
            }
        }, 
        error => {
            var errormess = new Error(error.message);
            throw errormess;
        })
        .then(response => response.json())
        .then(dishesData => {
            this.setState({
                dishes: dishesData
            });
            console.log(this.state.dishes);
        })
        .catch(error => console.log(error.message));
    }
    render(){
        if(this.state.dishes.length > 1){
            const menu = this.state.dishes.map((dish) => {
                return (
                    <div key = { dish.id } className='col-12 col-md-3 m-1'>
                        <RenderMenuItem dish={ dish } />
                    </div>
                );
            });
            return(
                <div className='container'>
                    <div className='row'>
                    { menu }
                    </div>
                </div>
            );
        }
        else{
            return (<div></div>);
        }
        
    }
}

export default Menu;