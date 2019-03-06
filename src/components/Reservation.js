import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import _ from 'lodash';

export default class Reservation extends Component {
    constructor(props) {
        super(props);
        this.state = { success: false };
        
    }
    update(){
        this.setState({success:true});
    }
    render() {
        let list = this.props.data.businesses;
        let selRes = _.find(list, ['id',this.props.selectedRest]);
        console.log( list, selRes);

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

                        <hr className="my-4" />
                        <h5 className="section-title">Please Let us know the current wait time.</h5>
                        <select id="updatewait" name="updatewait" className="form-control col-md-10 col-sm-10 mb-4"
                            aria-label="Current Wait Time"
                            required>
                            <option value="1">Less then 10 minutes</option>
                            <option value="2">Less then 30 minutes</option>
                            <option value="3">Less than 45 minutes</option>
                            <option value="4">More than an hour!</option>
                        </select>
                        <a className="btn btn-primary text-light " id="updateWait" onClick={this.update.bind(this)}>Submit Update</a>
                    </div>
                    <div className="w-100"></div>
                    <div className={"col reserve-success ".concat((parseInt(selRes.wait) > 3 || !this.state.success) ? "collapse" : "")}>
                        <h4>Reservation Success</h4>
                        <h5>You have reserved a Table 3:30 PM for Party size 2!</h5>
                        <small>Please arrive in 15 mins before your reserved time.</small>

                    </div>
                    <div className="w-100"></div>
                    <div className={"col reserve-update ".concat((parseInt(selRes.wait) <= 3 || !this.state.success) ? "collapse" : "") }>
                        <h4>Wait Time Update</h4>
                        <h5>Thank you for telling us the latest wait time.</h5>
                        <small>We will use the latest data to serve you better.</small>

                    </div>
                    <div className="w-100"></div>
                    <form className={"form-horizontal col ".concat(parseInt(selRes.wait) > 3  || this.state.success? "collapse" : "") } id="reservation-form" method="get" >
                        <fieldset>

                            <h4>
                                <legend>Reserve a Table Now</legend>
                            </h4>

                            <div className="form-group">
                                <label className="col control-label" for="fullname">Your Name</label>
                                <div className="col">
                                    <input id="fullname" name="fullname" type="text" placeholder="Enter Your Full Name"
                                        className="form-control input-md" required />

                                </div>
                            </div>

                            <div className="form-group">
                                <label className="col control-label" for="email">Your Email</label>
                                <div className="col">
                                    <input id="email" name="email" type="email" placeholder="Enter Your Email"
                                        className="form-control input-md"
                                        required />

                                </div>
                            </div>

                            <div className="form-group">
                                <label className="col control-label" for="phone">Your Contact Number</label>
                                <div className="col">
                                    <input id="phone" name="phone" type="tel" placeholder="Phone Number Format: 2061231234"
                                        pattern="[0-9]{3}[0-9]{3}[0-9]{4}" className="form-control input-md" required />

                                </div>
                            </div>

                            <div className="form-group">
                                <label className="col  control-label" for="size">Party Size</label>
                                <div className="col">
                                    <select id="size" name="size" className="form-control" required >
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
                                <label className="col control-label" for="time">Time of Arrival</label>
                                <div className="col">
                                    <select id="time" name="time" className="form-control" required >
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
                            <button className="form-control form-group btn btn-primary" onClick={this.update.bind(this)} type="submit" id="reserveBtn">Reserve
                                Now
                    </button>
                        </fieldset>

                    </form>

                </div>
            </React.Fragment>
        )
    }

}