import React, { Component } from 'react';
import { Card, CardBody, CardTitle, CardImg, CardText } from 'reactstrap';

class CommentForm extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div>
                <h1></h1>
            </div>
        );
    }
        
}
const RenderDish = ({ dish }) => {
    alert("Dish arrived!");
    if(dish != null){
        return(
            <Card>
                <CardImg src = { dish.image } width="100%" alt={ dish.name } />
                <CardBody>
                    <CardTitle>{ dish.name }</CardTitle>
                    <CardText>{ dish.description }</CardText>
                </CardBody>
            </Card>
        );
    }
    else{
        return (
            <div></div>
        );
    }
};

const DishDetails = (props) => {
        return (
            <div className='row'>
                <div className='col-12 col-md-5 mb-3'>
                    <RenderDish dish = { props.dish } />
                </div>
            </div>
        );
};

export default DishDetails;