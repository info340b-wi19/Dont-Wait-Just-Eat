import React, { Component } from 'react';
import _ from 'lodash';

export default class Reservation extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            success: false ,
            fullname:undefined,
            email:undefined,
            phone:undefined,
            size:undefined,
            time:undefined
        };
        
    }
    update(e){
        e.preventDefault();
        console.log(e);
        this.setState({success:true});
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.selectedRest!==this.props.selectedRest){
          this.setState({success: false });
        }
      }

    //update state for specific field
    handleChange = (event) => {
        let field = event.target.name; //which input
        let value = event.target.value; //what value

        let changes = {}; //object to hold changes
        changes[field] = value; //change this field
        this.setState(changes); //update state
    }

    render() {
        let list = this.props.data.businesses;
        let selRes = _.find(list, ['id',this.props.selectedRest]);
        return (

            <React.Fragment>
                <div className="row reservation mt-5 pb-5" id="reservation">
                    <div className="col select-restaurant pt-5">
                        <h4 className="section-title">{selRes.name}</h4>
                    </div>
                    <div className="w-100"></div>
                    <div className={"col no-reserve mt-3 ".concat(parseInt(selRes.wait) <= 3  || this.state.success? "collapse" : "") }>
                        <h5>The restaurant does not accept any more reservation.</h5>
                        <small>The current wait time is over 1 Hour. You may add into the waitlist in store.</small>

                    </div>
                    <div className="w-100"></div>
                    <div className={"col reserve-success ".concat((parseInt(selRes.wait) > 3 || !this.state.success) ? "collapse" : "")}>
                        <h4>Reservation Success</h4>
                        <h5>You have reserved a Table 3:30 PM for Party size 2!</h5>
                        <small>Please arrive in 15 mins before your reserved time.</small>

                    </div>
                    <div className="w-100"></div>
                    <form className={"form-horizontal col ".concat(parseInt(selRes.wait) > 3  || this.state.success? "collapse" : "") } id="reservation-form"  >
                        <fieldset>

                            <h4>
                                <legend>Reserve a Table Now</legend>
                            </h4>

                            <div className="form-group">
                                <label className="col control-label" htmlFor="fullname">Your Name</label>
                                <div className="col">
                                    <input id="fullname" name="fullname" type="text" placeholder="Enter Your Full Name"
                                        className="form-control input-md" onChange={this.handleChange} required />
                                </div>
                            </div>

                            <div className="form-group">
                                <label className="col control-label" htmlFor="email">Your Email</label>
                                <div className="col">
                                    <input id="email" name="email" type="email" placeholder="Enter Your Email"
                                        className="form-control input-md" onChange={this.handleChange}
                                        required />

                                </div>
                            </div>

                            <div className="form-group">
                                <label className="col control-label" htmlFor="phone">Your Contact Number</label>
                                <div className="col">
                                    <input id="phone" name="phone" type="tel" placeholder="Phone Number Format: 2061231234"
                                        pattern="[0-9]{3}[0-9]{3}[0-9]{4}" className="form-control input-md" onChange={this.handleChange} required />

                                </div>
                            </div>

                            <div className="form-group">
                                <label className="col  control-label" htmlFor="size">Party Size</label>
                                <div className="col">
                                    <select id="size" name="size" className="form-control" onChange={this.handleChange} required >
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                        <option value="7">7</option>
                                        <option value="8">8</option>
                                        <option value="9">9</option>
                                        <option value="10">10</option>
                                        <option value="11">&gt;10</option>
                                    </select>
                                </div>
                            </div>

                            <div className="form-group">
                                <label className="col control-label" htmlFor="time">Time of Arrival</label>
                                <div className="col">
                                    <select id="time" name="time" className="form-control" onChange={this.handleChange} required >
                                        <option value="1">3:30 PM</option>
                                        <option value="2">4:00 PM</option>
                                        <option value="3">4:30 PM</option>
                                        <option value="4">5:00 PM</option>
                                        <option value="5">5:30 PM</option>
                                        <option value="6">6:00 PM</option>
                                        <option value="7">6:30 PM</option>
                                        <option value="8">7:00 PM</option>
                                        <option value="9">7:30 PM</option>
                                        <option value="10">8:00 PM</option>
                                        <option value="11">8:30 PM</option>
                                        <option value="12">9:00 PM</option>
                                    </select>
                                </div>
                            </div>
                            <button className="form-control form-group btn btn-primary" onClick={(e)=>this.update.bind(this)} id="reserveBtn">Reserve
                                Now
                    </button>
                        </fieldset>

                    </form>

                </div>
            </React.Fragment>
        )
    }

}