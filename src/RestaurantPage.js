import React, { Component } from 'react';
import Loader from 'react-loader-spinner';
import Reservation from './components/Reservation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import {faStar as farFaStar} from '@fortawesome/free-regular-svg-icons';

export default class RestaurantPage extends Component {
    //This renders the Restaurant page which showing the info from Yelp API of the selected restaurant
    constructor(props) {
        super(props);
        this.state = {
            restID: this.props.match.match.params.id,
            data: undefined,
            reviews:undefined,
            restData:this.props.restData,
            user:this.props.user
        }
        this.apikey = process.env.REACT_APP_API_YELP;
        this.DataHandler(this.state.restID);
    }

    componentWillUnmount(){
        this.props.resetSelected();
    }


    DataHandler(id) {
        let url = "https://sheltered-mesa-40009.herokuapp.com/http://api.yelp.com/v3/businesses/" + this.state.restID;
        //Because Yelp API blocked the CORS from front end directly, has to use this trick to call this api from front-end
        fetch(url, {
            headers: {
                "Authorization": "Bearer " + this.apikey
            },
            method: "GET",
            redirect: "follow",
            credentials: 'same-origin'
        }).then(async (response) => {
            let res = await response.json();
            this.setState({ data: res });
            //this.props.onSetLoading(false);
        }, function (e) {
            //this.props.onSetLoading(false);
        });
        fetch(url + "/reviews", {
            headers: {
                "Authorization": "Bearer " + this.apikey
            },
            method: "GET",
            redirect: "follow",
            credentials: 'same-origin'
        }).then(async (response) => {
            let res = await response.json();
            this.setState({ reviews: res });
            //this.props.onSetLoading(false);
        }, function (e) {
            //this.props.onSetLoading(false);
        });

    }

    hoursConvert(num) {
        //let ans = "";
        num = num / 100;
        let hours = Math.floor(num);
        let minutes = Math.round((num - hours) * 100);
        if (minutes === 0) {
            minutes = minutes.toString() + "0";
        } else {
            minutes = minutes.toString();
        }
        if (hours > 12) {
            return (hours - 12).toString() + ":" + minutes + "pm";
        } else {
            return hours.toString() + ":" + minutes + "am";
        }
    }

    createhours() {
        let hours = this.state.data.hours[0].open;
        let days = ["Monday: ", "Tuesday: ", "Wednesday: ", "Thursday: ", "Friday: ", "Saturday: ", "Sunday: "];
        for (let i = 0; i < days.length; i++) {
            let edited = false;
            for (let j = 0; j < hours.length; j++) {
                if (hours[j].day === i) {
                    if (edited) {
                        days[i] += ", " + this.hoursConvert(hours[j].start) + " - " + this.hoursConvert(hours[j].end);
                    } else {
                        days[i] += this.hoursConvert(hours[j].start) + " - " + this.hoursConvert(hours[j].end);
                        edited = true;
                    }
                }
            }
            if (edited === false) {
                days[i] += "CLOSED";
            }
        }
        days = days.map((item, index) => {
            return (
                <li key={index}>{item}</li>
            );
        });
        return days;
    }

    aboutRest() {
        return (
            <div id="aboutRest">
                <h4>About:</h4>
                <ul>
                    <li><a href={this.state.data.url} target="_blank" rel="noopener noreferrer">Website</a></li>
                    <li><b>Address: </b>{this.state.data.location.display_address[0]},<br /> {this.state.data.location.display_address[1]}</li>
                    {this.state.data.price!==undefined?<li><b>Price: </b>{this.state.data.price}</li>:null}
                    <li><b>Phone: </b><a href={"tel:" + this.state.data.phone}>{this.state.data.phone}</a></li>
                    <li><b>Hours:</b>
                    <ul>{this.createhours()}</ul>
                    </li>
                </ul>
            </div>
        );
    }

    restPics() {
        return (
            <div id="restPics">
                <div id="restPictures">
                    <img src={this.state.data.photos[0]} alt="restaurant 1" />
                    <img src={this.state.data.photos[1]} alt="restaurant 2"/>
                    <img src={this.state.data.photos[2]} alt="restaurant 3"/>
                </div>
            </div>
        )
    }

    reviews() {
        let reviews = this.state.reviews.reviews;
        let reviewList = [0,1,2];
        reviewList = reviewList.map((item, index)=> {
            return (
                <div className = "review" key = {index}>
                    <h3><b>{reviews[index].user.name}</b>     <i>{this.stars(reviews[index].rating)}</i></h3>
                    <div className = "reviewDesc">
                        <p>"{reviews[index].text}"</p>
                        <p><i>Posted: {reviews[index].time_created.split(" ")[0]}</i></p>
                    </div>
                </div>
            );
        })
        return( <div id="reviews">
                <h2>Reviews({this.state.reviews.total}):</h2>
                {reviewList}
            </div>
        )
    }

    stars(rating) {
        let starCount = [];
        for(let i = 0; i < 5; i ++) {
            if(rating >= 1) {
                starCount.push(<FontAwesomeIcon icon={faStar} key={i}/>);
            } else if(rating > 0) {
                starCount.push(<FontAwesomeIcon icon={faStarHalfAlt}key={i}/>);
            } else {
                starCount.push(<FontAwesomeIcon icon={farFaStar}key={i}/>);
            }
            rating --;
        }
        return starCount;
    }

    render() {
        return (
            
            this.state.data === undefined || this.state.reviews === undefined ? <div id="overlay" className="d-block"><div style={{
                margin: ((window.innerHeight - 240) / 2.0) + "px 0 0 " + ((window.innerWidth - 240) / 2.0) + "px"
            }} >
                <Loader className="loader" type="Puff"
                    color="#b2cfff" height="240" width="240"
                /></div></div> :<>
                 
                <div id = "aboutRestPage">
                    <h2 id ="aboutRestName">{this.state.data.name}</h2>
                    <h4 id="cuisine">Type of Cuisine: <i>{this.state.data.categories[0].title}</i>
                    <br/>Overall Rating: {this.stars(this.state.data.rating)}</h4>
                    <div id="restBody">
                        {this.aboutRest()}
                        {this.restPics()}
                    </div>
                    {this.reviews()}
                </div>
                 {this.state.user!==undefined && this.state.user!==null?
                    <Reservation data={this.state.restData}
                    selectedRest={this.state.restID}
                    user={this.state.user}
                      onDataChange={this.props.onDataChange}/> :
                      null}
             </>          
        )
    }
}