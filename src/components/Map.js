import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import {faClock as farClock } from "@fortawesome/free-regular-svg-icons"

export default class MapView extends Component{
    constructor(props){
        super(props);
        this.apiKey = "pk.eyJ1IjoicmFtb25xdSIsImEiOiJjamU4M3l1dWYwOWQ4MnlvMXZ1NTQ4c21oIn0.ael5riwgSHwAvbLZaYps0A";
        if (this.props.pos[0] === undefined || this.props.pos[1] === undefined){
            this.state={
                pos:[47.65671,-122.308914,"University_of_Washington"],
                data:this.props.data,
                localView:"map"
            }
        }else{
            this.state={
            pos:this.props.pos,
            data:this.props.data,
            localView:"map"
        }
        }
        this.onDataChange = (data, view, pos)=>{
            this.props.onDataChange(data, view, pos);
        }
        this.onReserveChange = (index)=>{
            this.props.onReserveChange(index);
        }
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.pos !== this.state.pos ||nextProps.data !== this.state.data  ){
            this.setState({
                pos: nextProps.pos,
                data:nextProps.data,
            })
        }
    }

    onSelected(index){
        this.onDataChange(this.state.data, "reservation", this.state.pos);
        this.onReserveChange(index);
    }

    genIcons(num){
        return( 
            <>
            {Array(parseInt(num)).fill(0).map(_=><FontAwesomeIcon key={"clock"+Math.random()} icon={faClock} className="mr-1" />)}
            {Array(5 - parseInt(num)).fill(0).map(_=><FontAwesomeIcon key={"clock1"+Math.random()} icon={farClock} className="mr-1" />)}
            </>
        )
    }

    genRestLayer() {
        const rest = this.state.data.businesses;

        let markers = rest.map(item=>
            <Marker key={item.name+Math.random()} position={[item["coordinates"]["latitude"], item["coordinates"]["longitude"]]}>
                <Popup>
                    <div onClick={()=>this.onSelected(item.id)}>
                    <h4 className="mapMarker" >{item.name}</h4>
                    <img src={item.image_url} style={{height:"100px", width:"100px"}} alt={item.name}/>
                    <br />
                    Rating {item.rating} / 5. 
                    <br />
                    {item.price !==undefined? <React.Fragment>Price {item.price}<br /></ React.Fragment>:<br/>}
                    Wait Time: {this.genIcons(item.wait)}
                    <br />
                    </div>
                </Popup>
            </Marker>
        )
        return markers
      }

    formWaitTimeList(){
        const rest = this.state.data.businesses;
        return(
            rest.map(item=>
                <tr key={item.name+Math.random()} className="marker" onClick={()=>this.onSelected(item.id)}>
                    <td>{item.name}</td>
                    <td> {this.genIcons(item.wait)}</td>
                </tr>)
        )
    }

    onChangeView(view){
        this.setState({
            localView: view
        })
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
                    <button className="btn btn-light col" id="showmap" onClick={()=>this.onChangeView("map")}><span className="fa fa-map-marked-alt mr-2"></span>Map
                        View
                    </button>
                    <button className="btn btn-dark col" id="showwait" onClick={()=>this.onChangeView("table")} ><span className="far fa-clock mr-2"></span>Waittime
                    </button>
                </div>
            </div>
            <div className="w-100"></div>

            <div className="col" id="restaurant">
                <div className="row outter-wrap">
                    <div className={"col-md-12 ".concat(this.state.localView==="map"?"":"collapse")} id="mapView" data-parent="#restaurant">
                        <div className="card card-body" id="MapWrapper">
                            <div id="mainMap" className="mapBox">
                            <Map center={[this.state.pos[0],this.state.pos[1]]} zoom={13}>
        <TileLayer
            url={'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token='+this.apiKey}
            attribution={""}
            maxZoom= {18}
            minZoom={10}
            id= {'mapbox.light'}
        />
        {this.genRestLayer()}
    </Map>
                            </div>
                        </div>
                    </div>

                    <div className={"col-md-12 overlay col-lg-5 col-lg-offset-5 ".concat(this.state.localView==="table"?"":"collapse")} id="waitView"
                         data-parent="#restaurant">
                        <div className="card card-body">
                            <table className="waitTimeTable table table-striped" id="waitTimeTable">
                                <thead>
                                <tr>
                                    <th key="name">Restaurant Name</th>
                                    <th key="waittime_title">Current Wait time</th>
                                </tr>
                                </thead>
                                <tbody>
                                    {this.formWaitTimeList()}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}