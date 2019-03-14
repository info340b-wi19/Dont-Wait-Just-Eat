import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import firebase from 'firebase/app';

export default class SignForm extends Component{
  //This is the sign in Form to do the user login with Google
    constructor(props){
        super(props);
        this.state={errorMessage:""};
    }
   
      //A callback function for logging in existing users
    handleSignIn() {
        var provider = new firebase.auth.GoogleAuthProvider();

        firebase.auth().signInWithPopup(provider).then(function(result) {
            // This gives you a Google Access Token. You can use it to access the Google API.
            //var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            this.props.updateUser(user);
          }).catch((error)=> {
            // Handle Errors here.
            //var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            //var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            //var credential = error.credential;
            this.setState({errorMessage:errorMessage})
          });
      }
    
      //A callback function for logging out the current user
      handleSignOut = () => {
        firebase.auth().signOut();
      }
      
    render(){
        return(<div className='popup'>
        <div className='popup_inner'>
          <FontAwesomeIcon icon={faTimes} style={{right:"28%",position:"fixed",cursor:"pointer"}} onClick={this.props.togglePopup}/>
          <button className="btn btn-primary card" onClick={()=>this.handleSignIn()}><FontAwesomeIcon icon={faGoogle} /> Sign in with Google</button>
          {this.state.errorMessage?<p style={{color:"red"}}>{this.state.errorMessage}</p>:null}
        </div>
      </div>
      )
    }
}