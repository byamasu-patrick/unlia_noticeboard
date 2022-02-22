import React from 'react';
import Loading from './LoadingComponent';
import { Card, CardBody, CardImg, CardText, CardTitle } from 'reactstrap';
import { FadeTransform, Stagger } from 'react-animation-components';

const RenderCard = ({ item, isLoading, errMessage }) => {
    if(isLoading){
        return (
            <div className='col-12 m-1'>
                <Loading />
            </div>
            
        );
    }
    else if(errMessage){
        return (
            <div className='col-12 m-1'>
                 <h4>{ errMessage }</h4>
            </div>           
        );
    }
    else{
        return (
            <div className='col-12 col-md-6 m-1'>
                <FadeTransform in 
                    trasnformProps = {{
                        exitTransform: 'scale(0.5) translateY(-50%)'
                    }}>
                    <Card>
                        <CardImg src = { item.image } alt = { item.name } />
                        <CardBody>
                            <CardTitle>{ item.name }</CardTitle>
                            { item.designation ? <CardSubtitle> { item.designation } </CardSubtitle>: null }
                            <CardText>{ item.description }</CardText>
                        </CardBody>
                    </Card>
                </FadeTransform>
            </div>
            
        );
    }
}

const Home = (props) => {
    console.log(props);
    return (
        <div className='container'>
            <div className='row'>
                <RenderCard 
                    item = { props.dish }
                    isLoading = { props.dishesLoading }
                    errMessage = { props.dishesErrMessage }
                />
            </div>
            
        </div>
    );
}

export default Home;