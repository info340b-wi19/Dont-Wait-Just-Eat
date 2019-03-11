import React, { Component } from 'react'; //import React Component
import firebase from 'firebase/app';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from "@fortawesome/free-brands-svg-icons"
class SignUpForm extends Component {
  constructor(props){
    super(props);

    this.state = {
      'phone': undefined,
      'handle': undefined,
      "email":undefined,
      "password":undefined,
      errorMessage:this.props.errorMessage,
    }; 
  }

  //update state for specific field
  handleChange = (event) => {
    let field = event.target.name; //which input
    let value = event.target.value; //what value

    let changes = {}; //object to hold changes
    changes[field] = value; //change this field
    this.setState(changes); //update state
  }



  //handle signIn button
  handleSignIn = (event) => {
    event.preventDefault(); //don't submit
    this.props.signInCallback();

  }

  render() {
    return (
      <>
       
      </>
    )
  }
}

export default SignUpForm