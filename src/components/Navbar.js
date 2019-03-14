import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import {Link,NavLink} from 'react-router-dom';
import firebase from 'firebase/app';


export default class NavBar extends Component{
    //This is a NavBar Components.
    //Displays Navlinks for different pages, and login button 
    constructor(props) {
        super(props);
        this.state = {collapse: true, user:this.props.user};
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
                Don't Wait, Just Eat!
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target=".navbar-collapse"
                    aria-label="Toggle Navigation Bar " onClick = {()=>this.isClick()}> 
                <FontAwesomeIcon icon={faBars} />
            </button>
  
            <div className={this.state.collapse ? className: className + " show"} id="phoneNav" >
  
                <ul className="navbar-nav nav navbar-right">
                    <li className="nav-item">
                        <NavLink exact className="nav-link" to="/" onClick = {()=>this.isClick()} >Home</NavLink>
                    </li>
                    {this.props.user!==undefined&&this.props.user!==null?
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/reservation" onClick = {()=>this.isClick()}>My Reservations</NavLink>
                    </li>:null
                    }
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/aboutUs" onClick = {()=>this.isClick()}>About Us</NavLink>
                    </li>

                    {this.props.user===undefined||this.props.user==null?
                    <li className="nav-item" id="log-in">
                       <button className="btn btn-dark btn-primary btn-sm mr-3" onClick={this.props.togglePopup}> Log in / Register</button>
                    </li>:
                    <>
                    <div id = "logged-in-pane">
                    <li className="nav-item username" id="username">
                    <p>{this.props.user.displayName}</p></li>
                    
                     <li className="nav-item" id="log-out">
                     <button className="btn btn-dark btn-primary btn-sm mr-3" onClick={()=>{
                         firebase.auth().signOut();
                        this.setState({user:undefined})}

                    }> Log out</button>
                  </li></div></>
                    }
  
                </ul>
            </div>
  
        </div>
    </nav>
      )
    }
  }