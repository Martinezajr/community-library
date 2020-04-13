import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

    render(){
        return (
    
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg responsive">
            {
                // className's coordinate with bootstrap css / see react-bootstrap
                // Sticky-top in className if want to stick navbar to top
            }
                <Link to ="/community-library/" className="navbar-brand">CSCLIBRARY</Link>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        
                        <li className="navbar-item">
                            <Link to ="/community-library/" className="nav-link">Books</Link>
                        </li>
                        
                        <li className="navbar-item">
                            <Link to ="/add" className="nav-link">Add Book</Link>
                        </li>

                    </ul>
                </div>
                            
            </nav>

        )
    }






}