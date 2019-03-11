import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom';
import firebase from 'firebase/app';


export default class NavBar extends Component{
    constructor(props) {
        super(props);
        this.state = {collapse: true, user:this.props.user};
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
                    {this.props.user!==undefined&&this.props.user!==null?
                    <li className="nav-item">
                        <Link className="nav-link" to="/reservation">My Reservations</Link>
                    </li>:null
                    }
                    <li className="nav-item">
                        <Link className="nav-link" to="/aboutUs">About Us</Link>
                    </li>

                    {this.props.user===undefined||this.props.user==null?
                    <li className="nav-item ml-3">
                       <button className="btn btn-primary" style={{color:"white"}} onClick={this.props.togglePopup}> Log in / Register</button>
                    </li>:
                    <>
                    <li className="nav-item ml-3 username">
                    <p>{this.props.user.displayName}</p></li>
                    
                     <li className="nav-item ml-3">
                     <button className="btn btn-primary" style={{color:"white"}} onClick={()=>{
                         firebase.auth().signOut();
                        this.setState({user:undefined})}
                    }> Log out</button>
                  </li></>
                    }
  
                </ul>
            </div>
  
        </div>
    </nav>
      )
    }
  }