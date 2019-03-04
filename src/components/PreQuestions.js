import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export default class PreQuestions extends Component{
    render(){
        return (
            <React.Fragment>
            <div className="title row" role="Location">
            
            <div className="jumbotron col-12" role="title">
                <h1 className="display-6">
                    <span className="fas fa-utensils" role="icon"></span><br/>
                    Only Food<br/> <span className="fas fa-clock" role="icon"></span><br/> No Wait</h1>
                <p className="lead">Let's help you to enjoy food sooner!</p>
            </div>
            <hr className="my-1"/>
            </div>

        <div className="loc mt-4" id="location" role="selections">
            <div className="wrapper py-5 row" role="searchRestaurant">
                <h4 className="control-label col-md-6 col-sm-10 ml-4 mr-4 section-title col-lg-12" for="waitLimit">How
                    long can you wait?</h4>
                <div className="button-group" role="selectWaitTime">
                    <ul>
                        <li className="btn btn-select m-2"><span className="fas fa-clock mr-2">

                            </span><br/>Less than 10 minutes
                        </li>
                        <li className="btn btn-select m-2"><span className="fas fa-clock mr-2">

                            </span><span className="fas fa-clock mr-2"></span><br/>Less than 30 minutes
                        </li>
                        <li className="btn btn-select m-2"><span className="fas fa-clock mr-2"></span><span
                                className="fas fa-clock mr-2"></span><span className="fas fa-clock mr-2"></span><br/>Less than
                            45 Minutes
                        </li>
                        <li className="btn btn-select m-2"><span className="fas fa-clock mr-2"></span><span
                                className="fas fa-clock mr-2"></span><span className="fas fa-clock mr-2"></span><span
                                className="fas fa-clock mr-2"></span><br/>Less than 1 Hour
                        </li>
                        <li className="btn btn-select m-2"><span className="fas fa-clock mr-2"></span><span
                                className="fas fa-clock mr-2"></span><span className="fas fa-clock mr-2"></span><span
                                className="fas fa-clock mr-2"></span><span className="fas fa-clock mr-2"></span><br/>I have
                            enough patience today.
                        </li>
                    </ul>
                </div>

                <div className="w-100">
                    <hr className="my-2" />
                </div>
                <h4 id="button_error"></h4>
                <a className="btn btn-success text-light btn-lg col-md-5 m-4 col-sm-10" id="locateme">Locate
                    Me</a>
                <div className="w-100"></div>
                <input className="form-control col-md-6 col-sm-5 mx-4 ml-4" type="search"
                       placeholder="Where do you want to eat?"
                       aria-label="Search"
                        id="search_place" />
                <button className="btn btn-primary col-md-4 mx-4 btn-lg col-sm-4" id="searchLoc">Start
                    Search
                </button>
            </div>
        </div>
        </React.Fragment>
        )
    }
}