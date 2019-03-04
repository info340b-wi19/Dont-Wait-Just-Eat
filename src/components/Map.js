import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default class Map extends Component{
    constructor(props){
        super(props);
        this.state={
            view: this.props.view
        }
    }
    componentWillReceiveProps(nextProps) {
        this.setState({ view: nextProps.view });  
      }

    render(){
        return(
            <div className={this.state.view==="map"?"row map":"row map collapse"} id="map">
            <div className="col">
                <h4 className=" section-title">Restaurant Around You</h4>
            </div>
            <div className="w-100"></div>
            <div className="col">
                <div className="row" id="nav-map">
                    <button className="btn btn-light col" id="showmap"><span className="fa fa-map-marked-alt mr-2"></span>Map
                        View
                    </button>
                    <button className="btn btn-dark col" id="showwait"><span className="far fa-clock mr-2"></span>Waittime
                    </button>
                </div>
            </div>
            <div className="w-100"></div>

            <div className="col" id="restaurant">
                <div className="row outter-wrap">
                    <div className="collapse show col-md-12" id="mapView" data-parent="#restaurant">
                        <div className="card card-body" id="MapWrapper">
                            <div id="mainMap" className="mapBox"></div>
                        </div>
                    </div>

                    <div className="collapse col-md-12 overlay col-lg-5 col-lg-offset-5" id="waitView"
                         data-parent="#restaurant">
                        <div className="card card-body">
                            <table className="waitTimeTable table table-striped" id="waitTimeTable">
                                <tr>
                                    <th>Restaurant Name</th>
                                    <th>Current Wait time</th>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}