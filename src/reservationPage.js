import React, { Component } from 'react';
import firebase from 'firebase/app';
import { Redirect} from 'react-router-dom';
import Loader from 'react-loader-spinner';

export default class ReservationPage extends Component{
    constructor(props){
        super(props);
        if(this.props.user){
        this.state={
            data:undefined, 
            user:this.props.user,
            rest:undefined
        };
        this.resRef =firebase.database().ref("reservations/"+this.state.user.email.replace(".","_"));
        }
        
    }
    
    componentDidMount(){
        console.log("sss");
        console.log(this.props);
        if (this.resRef){
            this.resRef =firebase.database().ref("reservations/"+this.state.user.email.replace(".","_"));
            console.log("fff");
        this.resRef.on("value",(snapshot)=>{
            console.log(snapshot);
            console.log(snapshot.val());
          this.setState({data:snapshot.val()})
        });
       
      }
    }
      componentWillUnmount(){
        if (this.resRef){
        this.resRef.off('value',(snapshot)=>{
          this.setState({data:snapshot.val()})
        })
    }
      }

    render(){
        return(
            this.props.user===undefined || this.state===null?<Redirect to="/" />:
            this.state.data === undefined? <div id="overlay" className="d-block"><div style={{
                margin: ((window.innerHeight - 240) / 2.0) + "px 0 0 " + ((window.innerWidth - 240) / 2.0) + "px"
            }} >
                <Loader className="loader" type="Puff"
                    color="#b2cfff" height="240" width="240"
                /></div></div> :
            <div>
                <h4 className="section-title">My Reservation Page</h4>
                {this.state.data === null?<h4>No Reservations</h4>:
                Object.keys(this.state.data).map(key=><ReservationItem data={this.state.data[key]}/>)}
            </div>
                
        )
    }
}

class ReservationItem extends Component{
    render(){
        return(
            <ul className="card card-body mx-4 list-unstyled">
            <li className="card-title" key={this.props.data.fullname+Math.random()+Math.random()}>Reservation @ {this.props.data.restdata.name}</li>
            <li key={this.props.data.fullname+Math.random()}>Full name: {this.props.data.fullname}</li>
            <li key={this.props.data.email+Math.random()}>Email: {this.props.data.email}</li>
            <li key={this.props.data.phone+Math.random()}>Contact: {this.props.data.phone}</li>
            <li key={this.props.data.size+Math.random()}>Party of {this.props.data.size}</li>
            <li key={this.props.data.time+Math.random()}>Reservation Time: {this.props.data.time}</li>
            </ul>
        )
    }
}