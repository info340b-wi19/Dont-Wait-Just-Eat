
import React, { Component } from 'react';
const teamInfo = [{
  name: "Xifei Wang",
  url: "./img/xifei.jpg",
  description: "Informatics @UW iScholl"
},{
  name: "Yiren Qu",
  url: "./img/yiren.jpg",
  description: "Informatics @UW iScholl"
},
{
  name: "Seth Anderson",
  url: "./img/seth.jpg",
  description: "Informatics @UW iScholl"
},
{
  name: "Jarett Lund-Hopkins",
  url: "./img/jarett.jpg",
  description: "Informatics @UW iScholl"
}
];
//headername is header for each section, they need to be centered
//aboutFont is the the content font for paragragh for each section
//card-img-top is the img for each card, should be set a proper size
//card-text is the fonts inside of each card
//memberName is each member's name inside of each card, need to be centered
export default class AboutPage extends Component {
  render() {
    return (
      <div className="p-5">
        <Description/>
        <Teamcard/>
        <Walkthrough/>
      </div>
    );
  }
}
class Description extends Component {
  render() {
    return (<div>
      <h1 className = "headername">App Description</h1>
      <p className = "aboutFont">The users for this web app could be young college students or workers in the Seattle area. And they love to explore the different type of food around the neighborhood.

When they open up this web app, they are able to see the restaurant around itself. The restaurant data would come from Yelp API and Google Map API for mapping.Customers are able to view the Yelp comments and photos on the map and able to see its own waiting information.

For those which do not have waiting information, customers can submit a wait estimate time to earn some points, which can be exchanged the coupon for some restaurants.

After they enjoyed the meal, they can rate the restaurant with starts. In the backend of the system, we can have a machine learning model running for each customer, and making their own profile to give our recommendation in restaurants.

This Web App could effectively show people estimate waiting time, which could be a very important factor to help people to decide where to eat.</p>

    </div>)
  }

}
class Walkthrough extends Component {
  render() {
    return (<div>
      <h1 className = "headername">App functionality Walkthrough</h1>
      <ol>
        <li className = "aboutFont">User need to input their location. and it will show the nearest restaurants around the user.</li>
        <li className = "aboutFont">And they are able to click each restaurant and view the comments and current wait estimate time.</li>
        <li className = "aboutFont">And customers can either submit their waiting estimate time or reserve a table in that restaurant via OpenTable.</li>
        <li className = "aboutFont">After they enjoyed the meal, they are able to rate the restaurant.</li>
      </ol>
    </div>)
  }
}
class Teamcard extends Component {
 render(){
  let list = teamInfo.map((element)=> {
    return <Card member = {element}/>
  });
 return <div className="aboutContainer">
<h1 className = "headername">About Our Team</h1>
{list}
</div> }
}

class Card extends Component {
  render() {
    let member = this.props.member;
    return (<div className="card">
    <img className="card-img-top" src={member.url} alt={member.name}/>
    <h5 className = "memberName">{member.name}</h5>
    <div className="card-body">
      <p className="card-text">{member.description}</p>
    </div>
  </div>)
  }
}