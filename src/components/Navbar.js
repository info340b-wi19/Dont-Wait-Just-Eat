import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom';


export default class NavBar extends Component{
    constructor(props) {
        super(props);
        this.state = {collapse: true};
        this.isClick = this.isClick.bind(this);

    }
    isClick() {
        this.setState({collapse: !this.state.collapse});
    }
    render(){
        let className = "collapse navbar-collapse";
      return(
 
        <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-default fixed-top">
        <div className="container-fluid" id="container_top" >
            <Link className="navbar-brand" to="/">
                <img src="favicon.png" className="d-inline-block align-top" alt="Icon" />
                Only Food No Wait
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target=".navbar-collapse"
                    aria-label="Toggle Navigation Bar " onClick = {this.isClick}> 
                <FontAwesomeIcon icon={faBars} />
            </button>
  
            <div className={this.state.collapse ? className: className + " show"} id="phoneNav" >
  
                <ul className="navbar-nav nav navbar-right">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Find a Restaurant</Link>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" to="/">My Reservations</a>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/aboutUs">About Us</Link>
                    </li>
  
                </ul>
            </div>
  
        </div>
    </nav>
      )
    }
  }