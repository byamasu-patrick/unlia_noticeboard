import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
import { Link } from 'react-router-dom';
import { FadeTransform } from 'react-animation-components';


const RenderMenuItem = ({ dish }) => {
    return (
        <FadeTransform in
            transformProps = {{
                exitTransform: 'scale(0.5) tranlateY(-50%)'
            }}
            >
            <Card>
                <Link to = { `/menu/${ dish.id }` }>
                    <CardImg src = { dish.image } width = '100%' alt= { dish.name }/>
                    <CardImgOverlay body className='ml-5'>
                        <CardTitle>{ dish.name }</CardTitle>
                    </CardImgOverlay>
                </Link>
            </Card>
        </FadeTransform>
    );
}
class Menu extends Component{
    constructor(props){
        super(props);
    }
    render(){
        if(this.props.dishes.dishes.length > 1){
            const menu = this.props.dishes.dishes.map((dish) => {
                return (
                    <div key = { dish.id } className='col-12 col-md-5 m-2'>
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