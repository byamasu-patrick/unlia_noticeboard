import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import DishDetails from './DishDetailsComponent';

class Main extends Component{
    render(){
        return (
            <Routes>
                <Route exact path = '/home' element = { <Home message = 'This is a react router' /> }/>
                <Route exact path = "/menu" element = { <Menu /> } />
                <Route path = '/menu/:dishId' element = { <DishDetails/>} />
            </Routes>
            
        );
    }
}


export default Main;