import React, { Component } from 'react';
import firebase from 'firebase/app';
import { Redirect } from 'react-router-dom';
import Loader from 'react-loader-spinner';

export default class ReservationPage extends Component {
    //This renders reservation page from the database reservations, Also cancel reservation button
    constructor(props) {
        super(props);
        if (this.props.user) {
            this.state = {
                data: undefined,
                user: this.props.user,
                rest: undefined
            };
            this.resRef = firebase.database().ref("reservations/" + this.state.user.email.split(".").join("_"));
        }

    }
    cancel =(id) =>{
        delete this.state.data[id] 
        this.forceUpdate();
        this.resRef.child(id).remove();
       

    }
    componentDidMount() {
        if (this.resRef) {
            this.resRef = firebase.database().ref("reservations/" + this.state.user.email.split(".").join("_"));
            this.resRef.on("value", (snapshot) => {
                this.setState({ data: snapshot.val() })
            });

        }
    }
    componentWillUnmount() {
        if (this.resRef) {
            this.resRef.off('value', (snapshot) => {
                this.setState({ data: snapshot.val() })
            })
        }
    }

    render() {
        return (
            this.props.user === undefined || this.state === null ? <Redirect to="/" /> :
                this.state.data === undefined ? <div id="overlay" className="d-block">
                    <div style={{
                        margin: ((window.innerHeight - 240) / 2.0) + "px 0 0 " + ((window.innerWidth - 240) / 2.0) + "px"
                    }} >
                        <Loader className="loader" type="Puff"
                            color="#b2cfff" height="240" width="240"
                        /></div></div> :
                    <div id="reservations-bg">
                        <h4 className="section-title" id="reservation-main-title">My Reservations</h4>
                        {this.state.data === null ? <h4 className="section-title" id="reservation-main-title">No Reservations Made!</h4> :

                            Object.keys(this.state.data).map(key => <ReservationItem keys={key} data={this.state.data[key]} callback = {this.cancel}/>)}

                    </div>

        )
    }
}

class ReservationItem extends Component {
    //This renders reservation card which contains the info like time, name, email..
    render() {
        return (
            <ul className="card list-unstyled reservation-list">
                <li id="reservation-title" className="card-title" key={this.props.data.fullname + Math.random() + Math.random()}>Reservation @ {this.props.data.restdata.name}</li>
                <li key = "restdataimg"><img src={this.props.data.restdata.image_url} id="restaurant-picture" alt="restaurant"></img></li>
                <li key={this.props.data.fullname + Math.random()}><strong>Full name: </strong>{this.props.data.fullname}</li>
                <li key={this.props.data.email + Math.random()}><strong>Email: </strong>{this.props.data.email}</li>
                <li key={this.props.data.phone + Math.random()}><strong>Contact: </strong>{this.props.data.phone}</li>
                <li key={this.props.data.size + Math.random()}><strong>Party Size: </strong>{this.props.data.size}</li>
                <li id="reservation-bottom" key={this.props.data.time + Math.random()}><strong>Reservation Time: </strong>{this.props.data.time}</li>
                <li key = "Rest contact info"><strong>Restaurant Contact Info: </strong> <a href={"tel:"+this.props.data.restdata.phone}>{this.props.data.restdata.phone}</a></li>
                <button key="buttonkey" type="button" className="btn btn-danger m-3" onClick={ () =>{
                       this.props.callback(this.props.keys);
                }
                 
                }>Cancel this Appointment</button>
            </ul>
        )
    }
}