import React, { Component } from "react";
import { BrowserRouter, useLocation } from 'react-router-dom';
import Main from "./MainComponent";
import { Provider } from 'react-redux';
import { ConfigureStore } from '../redux/configureStore';

const store = ConfigureStore();

class App extends Component{
    constructor(props){
        super(props);
    }
    render(){
        const pathname = window.location.pathname.toString().split("/");        
        if (pathname[1] === 'users') {
            return (
                <div></div>
            );
        }
        else{
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