import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faUtensils } from '@fortawesome/free-solid-svg-icons'

export default class PreQuestions extends Component{
    constructor(props){
        super(props);
        this.state ={
            data : this.props.data
        }
        this.onDataChange = (data)=>{
            this.props.onDataChange(data);
        }
    }
    render(){
        return ( 
            <div>        
            <TitleRow />
            <Form data={this.state.data} onDataChange={this.onDataChange.bind(this)}/>
            </div>
        )
    }
}

class TitleRow extends Component{
    render(){
        return(
            <div className="title row">
            
                <div className="jumbotron col-12">
                    <h1 className="display-6">
                            <FontAwesomeIcon icon={faUtensils}/>
                            <br/>
                            Only Food<br/> 
                            <FontAwesomeIcon icon={faClock}/><br/> No Wait</h1>
                    <p className="lead">Let's help you to enjoy food sooner!</p>
                </div>
                <hr className="my-1"/>
            </div>
        )
    }
}



class Form extends Component{
    constructor(props){
        super(props);
        this.change = (index)=>{
            this.setState({
                selectedIndex: index
              });
        }
        this.apikey2 = "0LKzxfI8zGQo_E4vxANgZOo6ybyHbiJrWlz_p13-MWWL1ONkjODBDTPTry3uzntUrh6nDB7H5wsZlp7DzFXh4lWbiFvdXYpm5uITu9MK-RoJD-doRfbBav7qhBhrXHYx"
        this.state ={
            error:"",
            lat : 47.65671,
            long :  -122.308914,
            searchLocation : "University_of_Washington",
            locateme:false,
            selectedIndex: -1,
            data:this.props.data
        };
        this.onDataChange=(data)=>{
            this.props.onDataChange(data);
        }
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position)=>{
                this.setState({
                    lat : position.coords.latitude,
                    long :  position.coords.longitude,
                    locateme : true
                });
            },()=>{
                this.setState({
                    locateme : false
                });
            })
          } else {
            this.setState({
                locateme : false
            });
          };
    }

          

    render(){
        return(
            <div className="loc mt-4" id="location" role="selections">
            <div className="wrapper py-5 row" role="searchRestaurant">
                <h4 className="control-label col-md-6 col-sm-10 ml-4 mr-4 section-title col-lg-12" htmlFor="waitLimit">How
                    long can you wait?</h4>
                <div className="button-group" role="selectWaitTime">
                    <ButtonGroup selectedIndex={this.state.selectedIndex} onChange={this.change.bind(this)}/>
                </div>

                <div className="w-100">
                    <hr className="my-2" />
                </div>
                <h4 id="button_error">{this.state.error}</h4>
                <a className={this.state.locateme? "btn btn-success text-light btn-lg col-md-5 m-4 col-sm-10 .d-block":
                              "btn btn-success text-light btn-lg col-md-5 m-4 col-sm-10 .d-none"} 
                    id="locateme" 
                    onClick={()=>this.locateme(this)}>Locate Me</a>
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
        )
    }

    locateme(){
        if(this.state.selectedIndex==-1){
            this.setState({error:"Please select a wait time."});
        }else{
            this.getYelpData();
        }
    }

    async successCallback(response){
        console.log("ss");
        var RestaurantList = await response.json();
        for (var i = 0; i < RestaurantList["businesses"].length; i++) {
            let rand = Math.floor(Math.random() * 2 * 60) + 1;
            rand = Math.round(rand / 120.0 * 5).toString();
            RestaurantList["businesses"][i]["wait"] = rand;
          }
        this.setState({
            error:"",
            data: RestaurantList
                        })
        this.onDataChange(RestaurantList);
    }

    getYelpData() {
        let url = "https://cors-anywhere.herokuapp.com/http://api.yelp.com/v3/businesses/search?open_now=true&term=restaurant";
        //Because Yelp API blocked the CORS from front end directly, has to use this trick to call this api from front-end
        if (!this.state.locateme) {
          url += "&location=" + this.state.searchLocation;
        } else {
          url += "&latitude=" + this.state.lat + "&longitude=" + this.state.long;
        }
        fetch(url, {
            headers:{
                "Authorization": "Bearer " + this.apikey2
              },
            method:"GET",
            redirect: "follow", 
            credentials: 'same-origin'
            }).then((response)=>{this.successCallback(response)}, function(e){
                this.setState({error:"Please Try Again Later."});
            } );
      }
}


class ButtonGroup extends Component{
    constructor(props){
        super(props);
        this.state = {
            selectedIndex: this.props.selectedIndex,
            onChange:this.props.onChange
        }
        this.updateIndex = (index)=>{
            this.state.onChange(index);
            this.setState({selectedIndex: index});
        }
    }

    item(num, str, index){
        return(
            <li className={this.state.selectedIndex===index?"btn btn-select m-2 selected":"btn btn-select m-2 not-selected"} 
                onClick={()=>this.updateIndex(index)}>
            {Array(num).fill(0).map(_=><FontAwesomeIcon icon={faClock} className="mr-2"  />)}
                <br/>{str}
            </li>
        )
    }

    render(){
        return(
            <ul>
                {this.item(1, "Less than 10 minutes", 1)}
                {this.item(2, "Less than 30 minutes", 2)}
                {this.item(3, "Less than 45 minutes", 3)}
                {this.item(4, "Less than 1 hour", 4)}
                {this.item(5, "I have enough patience today.", 5)}
            </ul>
        )
    }
}