
import React, { Component } from 'react';
const teamInfo = [{
  name: "Xifei Wang",
  url: "xifei.jpg",
  description: "I am currently a student studying @University of Washington, class of 2021, particularly interested in Data Science track. I am also a member of Probability Research Organization." 
}, {
  name: "Yiren Qu",
  url: "yiren.jpg",
  description: "I am currently a student of University of Washington, studying Computer Engineering and Informatics. I have done projects in various fields in Computer Science and Engineering. I love to explore new ideas and do projects for the community."
},
{
  name: "Seth Anderson",
  url: "seth.jpg",
  description: "Informatics @UW iSchool"
},
{
  name: "Jarett Lund-Hopkins",
  url: "jarett.jpg",
  description: "UW, Informatics Major, Class of 2020. Interested in machine learning, linear algebra, data science, and much more."
}
];
export default class AboutPage extends Component {
  render() {
    return (
      <div id="about-bg">
        <Teamcard />
        <Description />
        <Walkthrough />
      </div>
    );
  }
}
class Description extends Component {
  render() {
    return (<div>
      <h4 className="section-title headername">App Description</h4>
      <div className="card about-card" id = "centered">
      <p className="about-app-Font">The users for this web app could be young college students or workers in the Seattle area. And they love to explore the different type of food around the neighborhood.

When they open up this web app, they are able to see the restaurant around itself. The restaurant data would come from Yelp API and Google Map API for mapping.Customers are able to view the Yelp comments and photos on the map and able to see its own waiting information.

For those which do not have waiting information, customers can submit a wait estimate time to earn some points, which can be exchanged the coupon for some restaurants.

After they enjoyed the meal, they can rate the restaurant with starts. In the backend of the system, we can have a machine learning model running for each customer, and making their own profile to give our recommendation in restaurants.

This Web App could effectively show people estimate waiting time, which could be a very important factor to help people to decide where to eat.</p>

    </div></div>)
  }

}
class Walkthrough extends Component {
  render() {
    return (<div className="about-bottom-bg">
      <h4 className="section-title headername">App functionality Walkthrough</h4>
      <div className="card about-card" id = "centered">
      <ol className="about-app-Font">
        <li className="aboutFont">User need to input their location. and it will show the nearest restaurants around the user.</li>
        <li className="aboutFont">And they are able to click each restaurant and view the comments and current wait estimate time.</li>
        <li className="aboutFont">And customers can either submit their waiting estimate time or reserve a table in that restaurant via OpenTable.</li>
        <li className="aboutFont">After they enjoyed the meal, they are able to rate the restaurant.</li>
      </ol></div>
    </div>)
  }
}
class Teamcard extends Component {
  render() {
    let list = teamInfo.map((element) => {
      return <Card key={element.name + Math.random()} member={element} />
    });
    return <div className="aboutContainer">
      <h4 className="section-title headername">About Our Team</h4>
      <div className = "infoFlex">
      {list}
      </div>
    </div>
  }
}

class Card extends Component {
  render() {
    let member = this.props.member;
    return (<div className="card about-card card col-lg-3 col-md-3 col-sm-6 col-xs-12">
      <img className="about-card-img-top" src={member.url} alt={member.name} />
      <h5 className="memberName">{member.name}</h5>
      <div className="card-body">
        <p className="about-card-text">{member.description}</p>
      </div>
    </div>)
  }
}