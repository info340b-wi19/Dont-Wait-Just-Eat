# Only Food, No Wait

This repository contains code for an interactive bootstraped React web app. 

## Author: Yiren Qu, Xifei Wang

### The site can be viewed at <https://foodie-map-b331b.firebaseapp.com> or <https://info340b-wi19.github.io/Foodie-WaitTime-Map/>

![](./src/img/waiting.jpg)

In our project, we are looking into problems about waiting in line in restaurants. In Seattle, there are a lot of famous restaurants.

And the most problem people may encounter is that they need to wait for hours and hours to get into the restaurant. But they did not have a plan for that.

The waiting list information in a lot of the restaurants are on an old-school paper, not digital.

In some places, you would have a fancier app which helps to get in line and send you a text message. However, they do not share the data with the customer. Those app companies are restaurant-centric not customer-centric.
            
Customers would love to see the waiting list of each restaurant and would make their choice based on that as well.
        
        
### App Description

The users for this web app could be young college students or workers in the Seattle area. And they love to explore the different type of food around the neighborhood.

When they open up this web app, they are able to see the restaurant around itself. The restaurant data would come from Yelp API and Google Map API for mapping.Customers are able to view the Yelp comments and photos on the map and able to see its own waiting information. 
                
For those which do not have waiting information, customers can submit a wait estimate time to earn some points, which can be exchanged the coupon for some restaurants.

After they enjoyed the meal, they can rate the restaurant with starts. In the backend of the system, we can have a machine learning model running for each customer, and making their own profile to give our recommendation in restaurants. 

This Web App could effectively show people estimate waiting time, which could be a very important factor to help people to decide where to eat.

### App functionality Walkthrough
- User need to input their location. and it will show the nearest restaurants around the user.
- And they are able to click each restaurant and view the comments and current wait estimate time.
- And customers can either submit their waiting estimate time or reserve a table in that restaurant via OpenTable
- After they enjoyed the meal, they are able to rate the restaurant.

### Sources and references
[Google Map API Search for nearest restaurant.]("https://developers.google.com/places/web-service/search#PlaceSearchRequests)
[Yelp API]("https://www.yelp.com/developers/documentation/v3/get_started")

