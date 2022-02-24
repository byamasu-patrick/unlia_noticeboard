import React, { Component } from "react";
import { BrowserRouter, useLocation } from 'react-router-dom';
import Main from "./MainComponent";
import { Provider } from 'react-redux';
import { ConfigureStore } from '../redux/configureStore';
import Login from "./authentication/LoginComponent";

const store = ConfigureStore();

class App extends Component{
    constructor(props){
        super(props);
    }
    render(){        
        if (window.location.pathname === '/login') {
            return <Login />
        } else {
            return (
                <Provider store = { store }>
                    <BrowserRouter>
                        <Main />                
                    </BrowserRouter>
                </Provider>
            );
        }
    }
}

export default App;