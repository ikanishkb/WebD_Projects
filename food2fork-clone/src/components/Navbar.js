import React, { Component } from 'react';
import logo from '../images/logo.svg';
import {Link} from 'react-router-dom';

export default class Navbar extends Component {
    render() {
        return (
            <nav class="navbar navbar-expand-sm navbar-light bg-light">
                <Link to="/" class="navbar-brand">
                    <img src={logo} alt="logo"/>
                </Link>
                <div class="collapse navbar-collapse show ml-sm-5" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                        <Link to="/" class="nav-link">Home <span class="sr-only"></span></Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/Recipes" class="nav-link">Recipes</Link>
                    </li>
                    </ul>
                </div>
            </nav>
        )
    }
}
