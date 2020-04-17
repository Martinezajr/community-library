import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

export default class MyNav extends Component {

    render(){
        return (
    
            <Navbar collapseOnSelect expand = 'lg' bg = 'dark' variant = 'dark' sticky-top className = 'sticky-top'>
            
            {
                // className's coordinate with bootstrap css / see react-bootstrap
                // Sticky-top in className if want to stick navbar to top
            }

                <Navbar.Brand> <Link to ="/community-library/" className="navbar-brand">CSCLIBRARY</Link> </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" >
                    <Nav>
                        
                        
                        <Nav.Link><Link to ="/community-library/" className="nav-link">Books</Link></Nav.Link>
                        
                        
                        
                        <Nav.Link><Link to ="/add" className="nav-link">Add Book</Link></Nav.Link>
                    

                    
                    </Nav>
            </Navbar.Collapse>                
            </Navbar>

        )
    }






}