import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'


export default class MapView extends Component{
    constructor(props){
        super(props);
        this.apiKey = "pk.eyJ1IjoicmFtb25xdSIsImEiOiJjamU4M3l1dWYwOWQ4MnlvMXZ1NTQ4c21oIn0.ael5riwgSHwAvbLZaYps0A";
        if (this.props.pos[0] == undefined || this.props.pos[1] == undefined){
            this.state={
                pos:[47.65671,-122.308914,"University_of_Washington"]
            }
        }else{
            this.state={
            pos:this.props.pos
        }
        }
        
    }
   
    render(){
        return(
            <div className="row map" id="map">
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
                            <div id="mainMap" className="mapBox">
                            <Map center={[this.state.pos[0],this.state.pos[1]]} zoom={13}>
        <TileLayer
            url={'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token='+this.apiKey}
            attribution={"&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"}
            maxZoom= {18}
            id= {'mapbox.light'}
        />
    </Map>
                            </div>
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