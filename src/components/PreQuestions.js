import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faUtensils } from '@fortawesome/free-solid-svg-icons'
import exampleRestaurantList from './example.json';

export default class PreQuestions extends Component {
    //This is the components for the first form. 
    //It provides user to input the wait time , location search and locate me functon
    //It calls the mapbox API to do reverse GeoJson of the location, 
    //it calls Yelp API to retrieve the restaurant information of the locations
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.data
        };
        this.onDataChange = (data, view, pos) => {
            this.props.onDataChange(data, view, pos);
        }
    }
    render() {
        return (
            <div>
                <TitleRow />
                <Form data={this.state.data} onDataChange={this.onDataChange.bind(this)} onSetLoading={this.props.onSetLoading} />
            </div>
        )
    }
}

class TitleRow extends Component {
    //This is the Main title of the main page
    render() {
        return (
            <div className="title row">

                <div className="jumbotron col-12">
                    <h1 className="display-6">
                        <FontAwesomeIcon icon={faUtensils} />
                        <br />
                        Don't Wait<br />
                        <FontAwesomeIcon icon={faClock} /><br />Just Eat!</h1>
                    <p className="lead" id="subtitle">Spend less time waiting, and more time eating!</p>
                </div>
                <hr className="my-1" />
            </div>
        )
    }
}



class Form extends Component {
    //This is the form components asking about the wait time, locaitons inputs
    constructor(props) {
        super(props);
        this.change = (index) => {
            this.setState({
                selectedIndex: index
            });
        }
        this.debug = true;
        this.apiKey = process.env.REACT_APP_API_MAP;
        this.apikey2 = process.env.REACT_APP_API_YELP;
        this.state = {
            error: "",
            lat: 47.65671,
            long: -122.308914,
            searchLocation: "",
            locateme: false,
            selectedIndex: -1,
            data: this.props.data,
            view: "init",
            autocomplete: []
        };
        this.onDataChange = (data, view, pos) => {
            this.setState({ autocomplete: [] });
            this.props.onDataChange(data, view, pos);
        }
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                this.setState({
                    lat: position.coords.latitude,
                    long: position.coords.longitude,
                    locateme: true
                });
                this.onDataChange(this.state.data, this.state.view, [this.state.lat, this.state.long, this.state.searchLocation])
            }, () => {
                this.setState({
                    locateme: false
                });
            })
        } else {
            this.setState({
                locateme: false
            });
        };
    }


    TextOnChange(e) {
        this.setState({ searchLocation: e.target.value });
        fetch("https://api.mapbox.com/geocoding/v5/mapbox.places/" + e.target.value + ".json?access_token=" +
            this.apiKey).then(async (response) => {
                const res = await response.json();

                if (res.features !== undefined && res.features.length > 0) {
                    this.setState({ autocomplete: res.features });
                } else {
                    this.setState({ autocomplete: [] });
                }
            }
            ).catch((e) => {
                //Ignore all errors when onChange API call for the location.
            });
    }

    render() {
        return (
            <div className="loc mt-4" id="location">
                <div className="wrapper py-5 row" >
                    <h4 className="control-label section-title" htmlFor="waitLimit">How
                    long can you wait?</h4>
                    <div className="button-group">
                        <ButtonGroup selectedIndex={this.state.selectedIndex} onChange={this.change.bind(this)} />
                    </div>

                    <div className="w-100">
                        <hr className="my-2" />
                    </div>
                    <h4 id="button_error">{this.state.error}</h4>
                    <a href="#location" className={this.state.locateme ? "btn btn-success text-light btn-lg" :
                        "btn btn-success text-light btn-lg col-md-5 col-sm-10 .d-none"}
                        id="locateme"
                        onClick={() => this.locateme(this)}>Locate Me</a>
                    <div className="w-100"></div>
                    <div id="search_place" className="col-md-6 col-sm-5">
                    <input className="form-control" type="search"
                        placeholder="Where do you want to eat?"
                        aria-label="Search"
            
                        value={this.state.searchLocation}
                        onChange={(e) => {
                            this.TextOnChange(e);
                        }}
                    />
                    <ul className={"col-md-6 col-sm-5 autocomplete".concat(this.state.autocomplete.length === 0 ? "collapse" : "")}>
                        <AutoComplete data={this.state.autocomplete} callback={(text) => {
                            this.setState({ searchLocation: text, autocomplete: [] });
                        }} />
                    </ul>
                    </div>
                    <button className="btn btn-primary col-md-4 mx-4 btn-lg col-sm-4" id="searchLoc" onClick={() => this.searchloc(this)}>Start
                 Search
                </button>
                    

                </div>
            </div>
        )
    }

    searchloc() {
        this.props.onSetLoading(true);
        if (this.state.selectedIndex === -1) {
            this.setState({ error: "Please select a wait time." });
            this.props.onSetLoading(false);
        } else {
            try {
                fetch("https://api.mapbox.com/geocoding/v5/mapbox.places/" + this.state.searchLocation + ".json?access_token=" +
                    this.apiKey).then(async (response) => {
                        const res = await response.json();
                        if (res.features === undefined || res.features.length === 0) {
                            this.setState({ error: "Please Try Another Location, Please." })
                            this.props.onSetLoading(false);
                        } else {
                            this.setState({
                                lat: res.features[0].center[1],
                                long: res.features[0].center[0],
                                locateme: false
                            });
                            this.onDataChange(this.state.data, this.state.view, [res.features[0].center[1], res.features[0].center[0], this.state.searchLocation]);
                            this.getYelpData();
                        }

                    }, (e) => {
                        this.setState({ error: "Please Try Another Location, Please." })
                        this.props.onSetLoading(false);
                    });
            } catch (e) {
                this.setState({ error: "Please Enter a Valid Location." })
                this.props.onSetLoading(false);
            }

        }

    }


    locateme() {
        this.props.onSetLoading(true);
        if (this.state.selectedIndex === -1) {
            this.setState({ error: "Please select a wait time." });
            this.props.onSetLoading(false);
        } else {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition((position) => {
                    this.setState({
                        lat: position.coords.latitude,
                        long: position.coords.longitude,
                        locateme: true
                    });
                    this.onDataChange(this.state.data, this.state.view, [this.state.lat, this.state.long, this.state.searchLocation]);
                    this.getYelpData();
                }, () => {
                    this.setState({
                        locateme: false
                    });
                    this.props.onSetLoading(false);
                })
            } else {
                this.setState({
                    locateme: false
                });
                this.props.onSetLoading(false);
            };

        }
    }

    async successCallback(response) {
        var RestaurantList = response;
        if (RestaurantList["businesses"].length === 0) {
            this.setState({ error: "No Restaurant Found, Pleace check another location." });
            this.props.onSetLoading(false);
        } else {
            for (var i = 0; i < RestaurantList["businesses"].length; i++) {
                let rand = Math.floor(Math.random() * 2 * 60) + 1;
                rand = Math.round(rand / 120.0 * 5).toString();
                RestaurantList["businesses"][i]["wait"] = rand;
            }
            let data = RestaurantList.businesses.filter(item => eval(item.wait) <= this.state.selectedIndex);

            RestaurantList.businesses = data;
            if (RestaurantList.businesses.length === 0) {
                this.setState({ error: "No Restaurant Found, Pleace change search query." });
                this.props.onSetLoading(false);
            } else {

                this.setState({
                    error: "",
                    data: RestaurantList,
                    view: "map"
                })
                this.onDataChange(RestaurantList, "map", [this.state.lat, this.state.long, this.state.searchLocation]);
            }
        }
        this.props.onSetLoading(false);

    }

    getYelpData() {
        if (this.state.lat === undefined || this.state.long === undefined) {
            this.setState({ error: "Please Enter an Valid Location." })
        }
        let url = "https://sheltered-mesa-40009.herokuapp.com/http://api.yelp.com/v3/businesses/search?open_now=true&term=restaurant";
        //Because Yelp API blocked the CORS from front end directly, has to use this trick to call this api from front-end
        url += "&latitude=" + this.state.lat + "&longitude=" + this.state.long;
        fetch(url, {
            headers: {
                "Authorization": "Bearer " + this.apikey2
            },
            method: "GET",
            redirect: "follow",
            credentials: 'same-origin'
        }).then(async (response) => {
             this.successCallback(await response.json()) },  (e)=> {
            console.log(e);
            if(this.debug){
                this.successCallback(exampleRestaurantList)
            }else{
                this.setState({ error: "Please Try Again Later." });
                this.props.onSetLoading(false);
            }
            
        });
    }
}


class ButtonGroup extends Component {
    //This components render the Wait time option buttons.
    constructor(props) {
        super(props);
        this.state = {
            selectedIndex: this.props.selectedIndex,
            onChange: this.props.onChange
        }
        this.updateIndex = (index) => {
            this.state.onChange(index);
            this.setState({ selectedIndex: index });
        }
    }

    item(num, str, index) {
        return (
            <li className={this.state.selectedIndex === index ? "btn btn-select selected" : "btn btn-select not-selected"}
                id={"time-button-" + index} onClick={() => this.updateIndex(index)}>
                {Array(num).fill(0).map(_ => <FontAwesomeIcon key={index + str + Math.random()} icon={faClock} className="mr-2" />)}
                <br />{str}
            </li>
        )
    }

    render() {
        return (
                <ul>
                    {this.item(1, "Less than 15 minutes", 1)}
                    {this.item(2, "Less than 30 minutes", 2)}
                    {this.item(3, "Less than 45 minutes", 3)}
                    {this.item(4, "Less than 1 hour", 4)}
                    {this.item(5, "However long it takes", 5)}
                </ul>
        )
    }
}

class AutoComplete extends Component {
    //This componenets rendered the location list when you type in the input
    render() {
        let data = this.props.data;
        data = data.map(item => <li key={item.place_name + Math.random()} onClick={() => this.props.callback(item.place_name)}>{item.place_name}</li>)
        return (
            data
        )
    }
}