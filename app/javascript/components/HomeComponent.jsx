import React from 'react';
import Loading from './LoadingComponent';

const RenderCard = ({ item, isLoading, errMessage }) => {
    if(isLoading){
        return (
            <Loading />
        );
    }
    else if(errMessage){
        return (
            <h4>{ errMessage }</h4>
        );
    }
    else{
        return (
            <Card>
                <CardImg src = { item.image } alt = { item.name } />
                <CardBody>
                    <CardTitle>{ item.name }</CardTitle>
                    { item.designation ? <CardSubtitle> { item.designation } </CardSubtitle>: null }
                    <CardText>{ item.description }</CardText>
                </CardBody>
            </Card>
        );
    }
}

const Home = (props) => {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-12 col-md-6 m-1'>
                    <RenderCard 
                        item = { props.dish }
                        isLoading = { props.dishesLoading }
                        errMessage = { props.dishesErrMessage }
                    />
                </div>
            </div>
            
        </div>
    );
}

export default Home;