import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import {faClock as farClock } from "@fortawesome/free-regular-svg-icons"
import L from 'leaflet'

export const normalIcon = new L.Icon({
    iconUrl: require('../normal.png'),
    iconRetinaUrl: require('../normal.png'),
    iconAnchor: [5, 55],
    popupAnchor: [10, -44],
    iconSize: [25, 41],
    shadowUrl: '../normal.png',
    shadowSize: [68, 95],
    shadowAnchor: [20, 92],
  })


export const pointerIcon = new L.Icon({
    iconUrl: require('../pin.png'),
    iconRetinaUrl: require('../pin.png'),
    iconAnchor: [5, 55],
    popupAnchor: [10, -44],
    iconSize: [25, 41],
    shadowUrl: '../pin.png',
    shadowSize: [68, 95],
    shadowAnchor: [20, 92],
  })

export default class MapView extends Component{
    constructor(props){
        super(props);
        this.mapRef = React.createRef();
        this.apiKey = "pk.eyJ1IjoicmFtb25xdSIsImEiOiJjamU4M3l1dWYwOWQ4MnlvMXZ1NTQ4c21oIn0.ael5riwgSHwAvbLZaYps0A";
        if (this.props.pos[0] === undefined || this.props.pos[1] === undefined){
            this.state={
                pos:[47.65671,-122.308914,"University_of_Washington"],
                data:this.props.data,
                localView:"map",
                viewport:{
                    center: [47.65671, -122.308914],
                    zoom: 15
                  },
                selectedId:-1,
                user:this.props.user
            }
        }else{
            this.state={
            pos:this.props.pos,
            data:this.props.data,
            localView:"map",
            viewport:{
                center: [this.props.pos[0],this.props.pos[1]],
                zoom: 15
              },
            selectedId:-1,
            user:this.props.user
        }
        }
        this.onDataChange = (data, view, pos)=>{
            this.props.onDataChange(data, view, pos);
        }
        this.onReserveChange = (index)=>{
            this.props.onReserveChange(index);
        }
        this.markerRef = {}
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.pos !== this.state.pos ||nextProps.data !== this.state.data  ){
            this.setState({
                pos: nextProps.pos,
                data:nextProps.data,
            })
        }
    }

    // componentDidMount(){
    //     if(this.state.selectedId!==-1){
    //         let marker = this.markerRef[this.state.selectedId][1].current;
    //         if (marker && marker.leafletElement) {
    //             window.setTimeout(() => {
    //                 marker.leafletElement.openPopup()
    //             })
    //         }
    //     }
    // }

    onSelected(index){
        if(this.state.user!==undefined && this.state.user!==null){
        this.onDataChange(this.state.data, "reservation", this.state.pos);
        this.onReserveChange(index);
        }
    }

    genIcons(num){
        return( 
            <>
            {Array(parseInt(num)).fill(0).map(_=><FontAwesomeIcon key={"clock"+Math.random()} icon={faClock} className="mr-1" />)}
            {Array(5 - parseInt(num)).fill(0).map(_=><FontAwesomeIcon key={"clock1"+Math.random()} icon={farClock} className="mr-1" />)}
            </>
        )
    }
    

    onMarkerClick(id){
        // console.log(this.mapRef);
        // console.log(this.markerRef[id]);
        // let marker = this.markerRef[id][1].current;
        // console.log(this.mapRef.current.leafletElement.setView);
        let temp = this.markerRef[id][1].current.leafletElement._latlng
        console.log(temp.lng );
        if(window.innerWidth > 992){
            temp.lng = temp.lng +0.02;
        }
        console.log(temp.lng );
        this.setState({
            viewport:{
            center:[temp.lat,temp.lng],
            zoom:14
            },
            selectedId:id,
            localView:"map"
        },()=>{
            let marker = this.markerRef[id][1].current;
            marker.leafletElement.setIcon(pointerIcon);
            if (marker && marker.leafletElement) {
               window.setTimeout(() => {
                 marker.leafletElement.openPopup()
               })
             }
        })
        //marker.leafletElement.setIcon(pointerIcon);
        // if (marker && marker.leafletElement) {
        //    window.setTimeout(() => {
        //      marker.leafletElement.openPopup()
             
        //    })
        //  }
 }

   
    genRestLayer() {
        const rest = this.state.data.businesses;
        let markers = rest.map(item=>{
            let ref = React.createRef();
            let ref_m = React.createRef();
            this.markerRef[item.id] = [ref,ref_m];
            return(<Marker icon={this.state.selectedId===item.id?pointerIcon:normalIcon} ref={ref_m} key={item.name+Math.random()} position={[item["coordinates"]["latitude"], item["coordinates"]["longitude"]]}>
                <Popup ref={ref}>
                    <div onClick={()=>this.onSelected(item.id)}>
                    <h4 className="mapMarker" >{item.name}</h4>
                    <img src={item.image_url} style={{height: "100px", width: "100px", display:"table", margin: "10px auto"}} alt={item.name}/>
                    <br />
                    Rating {item.rating} / 5. 
                    <br />
                    {item.price !==undefined? <React.Fragment>Price {item.price}<br /></ React.Fragment>:<br/>}
                    Wait Time: {this.genIcons(item.wait)}
                    <br />
                    </div>
                </Popup>
            </Marker>)
        }
        )
        return markers
      }

    formWaitTimeList(){
        const rest = this.state.data.businesses;
        return(
            rest.map(item=>
                <tr key={item.name+Math.random()} className="marker" onClick={()=>this.onMarkerClick(item.id)}>
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
                    <button className={"btn col ".concat(this.state.localView==="map"?"btn-dark":"btn-light")} id="showmap" onClick={()=>this.onChangeView("map")}><span className="fa fa-map-marked-alt mr-2"></span>Map
                        View
                    </button>
                    <button className={"btn col ".concat(this.state.localView!=="map"?"btn-dark":"btn-light")} id="showwait" onClick={()=>this.onChangeView("table")} ><span className="far fa-clock mr-2"></span>Waittime
                    </button>
                </div>
            </div>
            <div className="w-100"></div>

            <div className="col" id="restaurant">
                <div className="row outter-wrap">
                    <div className={"col-md-12 ".concat(this.state.localView==="map"?"":"collapse")} id="mapView" data-parent="#restaurant">
                        <div className="card card-body" id="MapWrapper">
                            <div id="mainMap" className="mapBox">
                            <Map ref={this.mapRef} viewport={this.state.viewport} center={[this.state.pos[0],this.state.pos[1]]} zoom={14}>
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