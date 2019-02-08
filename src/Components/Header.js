
import React, { Component } from "react";
 
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavLink,
    NavItem,
    Button
} from 'reactstrap';

import {
  Route,
  NavLink as RRNavLink,
  HashRouter
} from "react-router-dom";

class Header extends Component {

    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false,
            authenticated: null,
        };

        this.checkAuthentication = this.checkAuthentication.bind(this);
        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);

    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    } 
       
    checkAuthentication(){

    }
    componentDidUpdate(){
    }

    login(){

    } 

    logout(){

    }
    render(){
        return(
           <Navbar color="inverse" light expand="md">
            
            <NavbarBrand to="/" tag={RRNavLink}>Mint Commerce</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />

            <Collapse isOpen={this.state.isOpen} navbar>
            
                <Nav className="ml-auto" navbar>
                    
                    <NavItem>
                        <NavLink to="/" color="primary" tag={RRNavLink} active>Home</NavLink>
                    </NavItem>
                
                    <NavItem>
                        <NavLink to="/Category/" tag={RRNavLink}>Categories</NavLink>
                    </NavItem>
                    
                    <NavItem>
                    
                       <NavLink to="/Login/" tag={RRNavLink}>Login</NavLink>
                    </NavItem>
                    
                    <NavItem>
                        <NavLink to="/Checkout/" tag={RRNavLink}>Carrito(0)</NavLink>
                    </NavItem>
                
                </Nav>

            </Collapse>

        </Navbar>
        );
    }
}

export default Header;