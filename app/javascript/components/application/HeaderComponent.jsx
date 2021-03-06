import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';


class Header extends Component{
    constructor(props){
        super(props);

        this.state = {
            isNavOpen: false
        }
        this.toggleNave = this.toggleNave.bind(this);
    }
    toggleNave(){
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }
    render(){
        return (
            <React.Fragment>
                <Navbar dark expand = "md">
                    <div className='container'>
                        <NavbarToggler onClick={ this.toggleNave }></NavbarToggler>
                        <NavbarBrand className='mr-auto' href='/'>
                            <img src="/images/logo.png" height="30" width="40" alt="Smart restaurant logo"/>
                        </NavbarBrand>
                        <Collapse isOpen = { this.state.isNavOpen } navbar>
                            <Nav navbar>
                                <NavItem >
                                    <NavLink className = "nav-link" to = "/home" >
                                        <span className = "fa fa-home fa-lg"></span> Home
                                    </NavLink>
                                </NavItem>
                                <NavItem >
                                    <NavLink className = "nav-link" to = "/menu" >
                                        <span className = "fa fa-list fa-lg"></span> Menu
                                    </NavLink>
                                </NavItem>
                                <NavItem >
                                    <NavLink className = "nav-link" to = "/aboutus" >
                                        <span className = "fa fa-info fa-lg"></span> About Us
                                    </NavLink>
                                </NavItem>
                                <NavItem >
                                    <NavLink className = "nav-link" to = "/contactus" >
                                        <span className = "fa fa-address-card fa-lg"></span> Contact Us
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
                <div className = "jumbotron">
                    <div className = "container">
                        <div className = "row row-header">
                            <div className = "col-12 col-sm-6">
                                <h1>Smart Restaurant System</h1>
                                <p>We make inspiration from the world's best cuisines, and create a unique fusion experience. Our lipsmaking creations will tickle your culinary senses!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Header;