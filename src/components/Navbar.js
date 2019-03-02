import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
//TODO: - import bootstrap and add the collapse function

export default class NavBar extends Component{
    render(){
      return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-default fixed-top">
        <div className="container-fluid" role="navbar">
            <a className="navbar-brand" href="#">
                <img src="favicon.png" className="d-inline-block align-top" alt="Icon" />
                Only Food No Wait
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target=".navbar-collapse"
                    aria-label="Toggle Navigation Bar">
                <FontAwesomeIcon icon={faBars} />
            </button>
  
            <div className="collapse navbar-collapse" id="phoneNav" role="phoneNavBar">
  
                <ul className="navbar-nav nav navbar-right">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#location">Where are you?</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#map">What do you want eat?</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#reservation">Reserve a Table</a>
                    </li>
  
                </ul>
            </div>
  
        </div>
    </nav>
      )
    }
  }