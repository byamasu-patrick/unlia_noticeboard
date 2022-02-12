import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './application/HeaderComponent';
import Footer from './application/FooterComponent';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import DishDetails from './DishDetailsComponent';
import About from './AboutComponent';

class Main extends Component{
    render(){
        return (
            <div>
                <Header />
                <Routes>
                    <Route exact path = '/home' element = { <Home message = 'This is a react router' /> }/>
                    <Route exact path = "/menu" element = { <Menu /> } />
                    <Route exact path = "/aboutus" element = { <About /> } />
                    <Route path = '/menu/:dishId' element = { <DishDetails/>} />
                </Routes>
                <Footer />
            </div>
            
        );
    }
}


export default Main;