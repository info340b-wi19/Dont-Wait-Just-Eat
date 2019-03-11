import React, { Component } from 'react';
import Loader from 'react-loader-spinner';
import Reservation from './Reservation';

export default class ResutrantPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            restID: this.props.match.match.params.id,
            data: undefined,
            reviews:undefined,
            restData:this.props.restData
        }
        this.apikey = "0LKzxfI8zGQo_E4vxANgZOo6ybyHbiJrWlz_p13-MWWL1ONkjODBDTPTry3uzntUrh6nDB7H5wsZlp7DzFXh4lWbiFvdXYpm5uITu9MK-RoJD-doRfbBav7qhBhrXHYx"
        this.DataHandler(this.state.restID);
    }

    componentWillUnmount(){
        this.props.resetSelected();
    }


    DataHandler(id) {
        let url = "https://cors-anywhere.herokuapp.com/http://api.yelp.com/v3/businesses/" + this.state.restID;
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
            console.log(res);
            this.setState({ data: res });
            //this.props.onSetLoading(false);
        }, function (e) {
            console.log(e);
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
            console.log(res);
            this.setState({ reviews: res });
            //this.props.onSetLoading(false);
        }, function (e) {
            console.log(e);
            //this.props.onSetLoading(false);
        });

    }

    hoursConvert(num) {
        let ans = "";
        num = num / 100;
        let hours = Math.floor(num);
        let minutes = Math.round((num - hours) * 100);
        if (minutes == 0) {
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
                if (hours[j].day == i) {
                    if (edited) {
                        days[i] += ", " + this.hoursConvert(hours[j].start) + " - " + this.hoursConvert(hours[j].end);
                    } else {
                        days[i] += this.hoursConvert(hours[j].start) + " - " + this.hoursConvert(hours[j].end);
                        edited = true;
                    }
                }
            }
            if (edited == false) {
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
                    <li><b>Price: </b>{this.state.data.price}</li>
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
                    <img src={this.state.data.photos[0]} />
                    <img src={this.state.data.photos[1]} />
                    <img src={this.state.data.photos[2]} />
                </div>
            </div>
        )
    }

    reviews() {
        let reviews = this.state.reviews.reviews;
        console.log(reviews);
        let reviewList = [0,1,2];
        reviewList = reviewList.map((item, index)=> {
            return (
                <div className = "review" key = {index}>
                    <h3><b>{reviews[index].user.name}</b>     <i>{reviews[index].rating}/5</i></h3>
                    <div className = "reviewDesc">
                        <p>"{reviews[index].text}"</p>
                        <p><i>Posted: {reviews[index].time_created.split(" ")[0]}</i></p>
                    </div>
                </div>
            );
        })
        return(
<<<<<<< HEAD
            this.state.data ===undefined || this.state.reviews===undefined ?<div id="overlay" className="d-block"><div style={{
                margin:((window.innerHeight - 240) /2.0)+"px 0 0 "+((window.innerWidth - 240) /2.0)+"px"
                }} >
            <Loader className="loader" type="Puff"
            color="#b2cfff" height="240"	width="240" 
            /></div></div>:
                <>
            <div>
            <h2> {this.state.data.name}</h2>
            <p>Here is some information about us. Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
            <blockquote>Curabitur blandit tempus porttitor. <strong>Nullam quis risus eget urna mollis</strong> ornare vel eu leo. Nullam id dolor id nibh ultricies vehicula ut id elit.</blockquote>
            <p>Veniam dolorem cupiditate tenetur placeat nulla repellat dicta maxime architecto blanditiis non facere nesciunt quae animi quam quidem ullam, suscipit nisi ipsam voluptatem accusamus necessitatibus itaque autem in, sunt similique.</p>
            <p>In mollitia cumque sapiente ducimus quo labore magni qui quas aperiam, voluptatibus nesciunt dicta enim dignissimos doloribus tempora iusto commodi alias recusandae tempore beatae atque? Totam cum et, perferendis itaque.</p>
            <p>Etiam porta <em>sem malesuada magna</em> mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.</p>
        </div>
      <Reservation data={this.state.restData}
      selectedRest={this.state.restID}
            onDataChange={this.props.onDataChange} /> 
            </>
=======
            <div id="reviews">
                <h2>Reviews({this.state.reviews.total}):</h2>
                {reviewList}
            </div>
        )
    }

    render() {
        return (
            this.state.data === undefined || this.state.reviews === undefined ? <div id="overlay" className="d-block"><div style={{
                margin: ((window.innerHeight - 240) / 2.0) + "px 0 0 " + ((window.innerWidth - 240) / 2.0) + "px"
            }} >
                <Loader className="loader" type="Puff"
                    color="#b2cfff" height="240" width="240"
                /></div></div> :

                <div id = "aboutRestPage">
                    <h2 id ="aboutRestName">{this.state.data.name}</h2>
                    <h4 id="cuisine">Type of Cuisine: <i>{this.state.data.categories[0].title}</i>
                    <br/>Overall Rating: {this.state.data.rating}/5</h4>
                    <div id="restBody">
                        {this.aboutRest()}
                        {this.restPics()}
                    </div>
                    {this.reviews()}
                </div>
>>>>>>> stage-4/withRouter
        )
    }
}