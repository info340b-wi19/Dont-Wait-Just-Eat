var apiKey = "pk.eyJ1IjoicmFtb25xdSIsImEiOiJjamU4M3l1dWYwOWQ4MnlvMXZ1NTQ4c21oIn0.ael5riwgSHwAvbLZaYps0A"
var firstTime = false;
var i,j,L;

function select(num){
  var buttonGroup = document.getElementsByClassName("button-group")[0].children[0].children
  for (j = 0; j < buttonGroup.length; j++) {
    if (j == num) {
      buttonGroup[j].style = "background: #d32323;color:#fff;";
    } else {
      buttonGroup[j].style = "background: #fff;color:#29445B;";
    }
  }
}
$(document).ready(function(){
  //Intial button/onclick events
  var buttonGroup = document.getElementsByClassName("button-group")[0].children[0].children;
  for (i=0;i<buttonGroup.length;i++){
      buttonGroup[i].onclick = select.bind(this,i);
  }
  document.getElementById("showmap").onclick = function(){
    $("#waitView").hide();
    $("#mapView").show();
  }
  document.getElementById("showwait").onclick = function(){
    $("#mapView").hide();
    $("#waitView").show();
  }
  
   document.getElementById("locateme").onclick = function() {
    $("#map").show();
    if (!firstTime) {
      genMap();
      formWaitTimeList();
      firstTime = true;
    }
    var elmnt = document.getElementById("searchLoc");
    elmnt.scrollIntoView();
  }
  
  document.getElementById("searchLoc").onclick = function() {
    $("#map").show();
    if (!firstTime) {
      genMap();
      formWaitTimeList();
      firstTime = true;
    }
    var elmnt = document.getElementById("searchLoc");
    elmnt.scrollIntoView();
  }

  $("#reserveBtn").onlick = function() {
    document.getElementById("reservation-form").setAttribute("style", "display:none;");
    document.getElementsByClassName("reserve-success")[0].setAttribute("style", "display:inherit;");
  }
}); 

function showReserve() {
  $(".reservation").show();
  document.getElementsByClassName("reservation")[0].scrollIntoView();
}
function genReserve(id) {
  console.log(id);
  document.getElementsByClassName('select-restaurant')[0].children[0].innerHTML = exampleRestaurantList["businesses"][id]["name"];
  var noreserve = document.getElementsByClassName("no-reserve")[0];
  var reserveSuccess = document.getElementsByClassName("reserve-success")[0];
  reserveSuccess.setAttribute("style", "display:none;")
  if (exampleRestaurantList["businesses"][id]["wait"] < 4) {
    noreserve.setAttribute("style", "display:none;");
    document.getElementById("reservation-form").setAttribute("style", "display:inherit;");
  } else {
    document.getElementById("reservation-form").setAttribute("style", "display:none;");
    noreserve.setAttribute("style", "display:inherit;");
  }
  showReserve();
}


function genMap() {
  var map = L.map('mainMap').setView([47.65671, -122.308914], 13);
  L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=' + apiKey, {
    maxZoom: 18,
    id: 'mapbox.light'
  }).addTo(map);
  L.layerGroup(genRestLayer()).addTo(map);
}

function genRestLayer() {
  let restaurant = [];
  for (i = 0; i < exampleRestaurantList["businesses"].length; i++) {
    let message = "";
    let rest = exampleRestaurantList["businesses"][i];
    message += "<h4 class='mapMarker' onclick='return genReserve("+i+");'>" + rest["name"] + "</h4><br>" +
      "Rating: " + rest['rating'].toString() + "/5.";
    if (rest["price"] != undefined) {
      message += "Price: " + rest["price"] + "<br>";
    } else {
      message += "<br>";
    }
    "Wait Time: ";
    let waitTime = getWaitTime(i);
    for (j = 0; j < waitTime; j++) {
      message += "<span class='fas fa-clock mr-1'></span>"
    }
    for (j = 0; j < 5 - waitTime; j++) {
      message += '<span class="far fa-clock mr-1"></span>'
    }
    message += "<br></div>"
    restaurant.push(L.marker([rest["coordinates"]["latitude"], rest["coordinates"]["longitude"]]).bindPopup(
      message
    ))

  }
  return restaurant;
}

function getWaitTime(rest) {
  /* For now, the wait time (0 minute - 2 hour) would be random number betwene 1- 5 */
  let rand = Math.floor(Math.random() * 2 * 60) + 1;
  rand = parseWaitTime(rand)
  exampleRestaurantList["businesses"][rest]["wait"] = rand;
  return rand
}

function parseWaitTime(min) {
  /*Input a time between 0 minute  - 120 minutes and return number of wait icon */
  return Math.round(min / 120.0 * 5).toString();
}

function formWaitTimeList() {
  var waitTimeTable = document.getElementById("waitTimeTable");
  var tableContent = "<thead><tr><th class='col'>Restaurant Name</th><th class='col'>Current Wait time</th></tr></thead><tbody>"
  for (i = 0; i < exampleRestaurantList["businesses"].length; i++) {
    let rest = exampleRestaurantList["businesses"][i];
    tableContent += "<tr class='marker' id='marker" + i + "'><td>" + rest["name"] + "</td><td>";
    let waitTime = rest["wait"];
    for (j = 0; j < waitTime; j++) {
      tableContent += "<span class='fas fa-clock'></span>"
    }
    for (j = 0; j < 5 - waitTime; j++) {
      tableContent += '<span class="far fa-clock"></span>'
    }
    tableContent += "</td></tr>";
  }
  waitTimeTable.innerHTML = tableContent + "</tbody>";

  var markers = document.getElementsByClassName("marker");
  for (i=0;i<markers.length;i++){
    console.log(eval(markers[i].id.substring(6)));
    markers[i].onclick = genReserve.bind(this,eval(markers[i].id.substring(6)));
  }
}


// Data is from Yelp. In the future this will be replace by Yelp AJAX call

var exampleRestaurantList = {
  "businesses": [
    {
      "id": "JXRZqx7qpqmvMt5K10djAA",
      "alias": "chi-mac-seattle",
      "name": "Chi Mac",
      "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/RGazer5zRR4DMDcoXmNrCw/o.jpg",
      "is_closed": false,
      "url": "https://www.yelp.com/biz/chi-mac-seattle?adjust_creative=30c9RjJvoxPpDEtA6bPhLA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=30c9RjJvoxPpDEtA6bPhLA",
      "review_count": 252,
      "categories": [{
          "alias": "korean",
          "title": "Korean"
        },
        {
          "alias": "chicken_wings",
          "title": "Chicken Wings"
        },
        {
          "alias": "beerbar",
          "title": "Beer Bar"
        }
      ],
      "rating": 4,
      "coordinates": {
        "latitude": 47.66208,
        "longitude": -122.31344
      },
      "transactions": [
        "delivery",
        "pickup"
      ],
      "price": "$$",
      "location": {
        "address1": "4525 University Way NE",
        "address2": "",
        "address3": null,
        "city": "Seattle",
        "zip_code": "98105",
        "country": "US",
        "state": "WA",
        "display_address": [
          "4525 University Way NE",
          "Seattle, WA 98105"
        ]
      },
      "phone": "+12065475151",
      "display_phone": "(206) 547-5151",
      "distance": 1041.7164771303665
    },
    {
      "id": "9vp47oNBP3iHTTPgrsWyNQ",
      "alias": "little-duck-seattle-2",
      "name": "Little Duck",
      "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/OH5eULWg3Re1wzIR8ydfzQ/o.jpg",
      "is_closed": false,
      "url": "https://www.yelp.com/biz/little-duck-seattle-2?adjust_creative=30c9RjJvoxPpDEtA6bPhLA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=30c9RjJvoxPpDEtA6bPhLA",
      "review_count": 3,
      "categories": [{
        "alias": "chinese",
        "title": "Chinese"
      }],
      "rating": 5,
      "coordinates": {
        "latitude": 47.65707,
        "longitude": -122.31748
      },
      "transactions": [],
      "location": {
        "address1": "4100 Roosevelt Way NE",
        "address2": "Unit B",
        "address3": "",
        "city": "Seattle",
        "zip_code": "98105",
        "country": "US",
        "state": "WA",
        "display_address": [
          "4100 Roosevelt Way NE",
          "Unit B",
          "Seattle, WA 98105"
        ]
      },
      "phone": "",
      "display_phone": "",
      "distance": 1058.5349390607014
    },
    {
      "id": "jzZatlgnWJfdTT_hY7NHLw",
      "alias": "taste-of-xian-seattle",
      "name": "Taste Of Xi'an",
      "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/G0ak7f86o5qCWyNAcJTD4A/o.jpg",
      "is_closed": false,
      "url": "https://www.yelp.com/biz/taste-of-xian-seattle?adjust_creative=30c9RjJvoxPpDEtA6bPhLA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=30c9RjJvoxPpDEtA6bPhLA",
      "review_count": 256,
      "categories": [{
          "alias": "chinese",
          "title": "Chinese"
        },
        {
          "alias": "bbq",
          "title": "Barbeque"
        },
        {
          "alias": "noodles",
          "title": "Noodles"
        }
      ],
      "rating": 4,
      "coordinates": {
        "latitude": 47.66196,
        "longitude": -122.31345
      },
      "transactions": [
        "delivery",
        "pickup"
      ],
      "price": "$$",
      "location": {
        "address1": "4523 University Way NE",
        "address2": "",
        "address3": null,
        "city": "Seattle",
        "zip_code": "98105",
        "country": "US",
        "state": "WA",
        "display_address": [
          "4523 University Way NE",
          "Seattle, WA 98105"
        ]
      },
      "phone": "+12062319999",
      "display_phone": "(206) 231-9999",
      "distance": 1031.3110074026679
    },
    {
      "id": "rXbU5HJx6mihqazytPTgXA",
      "alias": "kedai-makan-seattle-4",
      "name": "Kedai Makan",
      "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/PMqIAYAknTK01diJEspDOA/o.jpg",
      "is_closed": false,
      "url": "https://www.yelp.com/biz/kedai-makan-seattle-4?adjust_creative=30c9RjJvoxPpDEtA6bPhLA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=30c9RjJvoxPpDEtA6bPhLA",
      "review_count": 678,
      "categories": [{
          "alias": "malaysian",
          "title": "Malaysian"
        },
        {
          "alias": "noodles",
          "title": "Noodles"
        }
      ],
      "rating": 4.5,
      "coordinates": {
        "latitude": 47.6179,
        "longitude": -122.32658
      },
      "transactions": [],
      "price": "$$",
      "location": {
        "address1": "1802 Bellevue Ave",
        "address2": "",
        "address3": "",
        "city": "Seattle",
        "zip_code": "98122",
        "country": "US",
        "state": "WA",
        "display_address": [
          "1802 Bellevue Ave",
          "Seattle, WA 98122"
        ]
      },
      "phone": "",
      "display_phone": "",
      "distance": 4511.360467105781
    },
    {
      "id": "GkxyrbqO0FdEeFJG_PaTgg",
      "alias": "thackeray-seattle-2",
      "name": "Thackeray",
      "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/jy4NRS84-5hYsEPMMo4Cvw/o.jpg",
      "is_closed": false,
      "url": "https://www.yelp.com/biz/thackeray-seattle-2?adjust_creative=30c9RjJvoxPpDEtA6bPhLA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=30c9RjJvoxPpDEtA6bPhLA",
      "review_count": 337,
      "categories": [{
          "alias": "bars",
          "title": "Bars"
        },
        {
          "alias": "tradamerican",
          "title": "American (Traditional)"
        }
      ],
      "rating": 4,
      "coordinates": {
        "latitude": 47.649216,
        "longitude": -122.342439
      },
      "transactions": [],
      "price": "$$",
      "location": {
        "address1": "3400 Stone Way N",
        "address2": null,
        "address3": "",
        "city": "Seattle",
        "zip_code": "98103",
        "country": "US",
        "state": "WA",
        "display_address": [
          "3400 Stone Way N",
          "Seattle, WA 98103"
        ]
      },
      "phone": "+12067378743",
      "display_phone": "(206) 737-8743",
      "distance": 2991.559158849538
    },
    {
      "id": "ZHMHUTDxXhufLU-iFSNntg",
      "alias": "hanok-seattle-2",
      "name": "Hanok",
      "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/S7NwaA85IorudiDdYpOoog/o.jpg",
      "is_closed": false,
      "url": "https://www.yelp.com/biz/hanok-seattle-2?adjust_creative=30c9RjJvoxPpDEtA6bPhLA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=30c9RjJvoxPpDEtA6bPhLA",
      "review_count": 43,
      "categories": [{
          "alias": "korean",
          "title": "Korean"
        },
        {
          "alias": "asianfusion",
          "title": "Asian Fusion"
        }
      ],
      "rating": 4.5,
      "coordinates": {
        "latitude": 47.63383,
        "longitude": -122.28028
      },
      "transactions": [],
      "location": {
        "address1": "4021 E Madison St",
        "address2": "",
        "address3": null,
        "city": "Seattle",
        "zip_code": "98112",
        "country": "US",
        "state": "WA",
        "display_address": [
          "4021 E Madison St",
          "Seattle, WA 98112"
        ]
      },
      "phone": "",
      "display_phone": "",
      "distance": 2954.217247741837
    },
    {
      "id": "NCDpIDp2f-DhPO5sL5Hbdw",
      "alias": "xian-noodles-seattle-3",
      "name": "Xi'an Noodles",
      "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/MErC-4Z-UX9HItR0LVKx0Q/o.jpg",
      "is_closed": false,
      "url": "https://www.yelp.com/biz/xian-noodles-seattle-3?adjust_creative=30c9RjJvoxPpDEtA6bPhLA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=30c9RjJvoxPpDEtA6bPhLA",
      "review_count": 583,
      "categories": [{
          "alias": "chinese",
          "title": "Chinese"
        },
        {
          "alias": "noodles",
          "title": "Noodles"
        },
        {
          "alias": "hotpot",
          "title": "Hot Pot"
        }
      ],
      "rating": 4,
      "coordinates": {
        "latitude": 47.66815,
        "longitude": -122.31319
      },
      "transactions": [],
      "price": "$",
      "location": {
        "address1": "5259 University Way NE",
        "address2": null,
        "address3": "",
        "city": "Seattle",
        "zip_code": "98105",
        "country": "US",
        "state": "WA",
        "display_address": [
          "5259 University Way NE",
          "Seattle, WA 98105"
        ]
      },
      "phone": "+12065228888",
      "display_phone": "(206) 522-8888",
      "distance": 1592.4838963874006
    },
    {
      "id": "a4K6WMS8JW31VBteDM5TIA",
      "alias": "manolin-seattle",
      "name": "Manolin",
      "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/f9KU-JOM0MkILzP053W8WQ/o.jpg",
      "is_closed": false,
      "url": "https://www.yelp.com/biz/manolin-seattle?adjust_creative=30c9RjJvoxPpDEtA6bPhLA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=30c9RjJvoxPpDEtA6bPhLA",
      "review_count": 417,
      "categories": [{
        "alias": "seafood",
        "title": "Seafood"
      }],
      "rating": 4.5,
      "coordinates": {
        "latitude": 47.651215,
        "longitude": -122.343091
      },
      "transactions": [],
      "price": "$$",
      "location": {
        "address1": "3621 Stone Way N",
        "address2": "",
        "address3": "",
        "city": "Seattle",
        "zip_code": "98103",
        "country": "US",
        "state": "WA",
        "display_address": [
          "3621 Stone Way N",
          "Seattle, WA 98103"
        ]
      },
      "phone": "+12062943331",
      "display_phone": "(206) 294-3331",
      "distance": 2996.3093109910296
    },
    {
      "id": "018rYSHznjI1lzEU9PDavA",
      "alias": "mkt-seattle",
      "name": "mkt.",
      "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/xqw68AmnVJ18FYZjpjmIEw/o.jpg",
      "is_closed": false,
      "url": "https://www.yelp.com/biz/mkt-seattle?adjust_creative=30c9RjJvoxPpDEtA6bPhLA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=30c9RjJvoxPpDEtA6bPhLA",
      "review_count": 288,
      "categories": [{
        "alias": "newamerican",
        "title": "American (New)"
      }],
      "rating": 4.5,
      "coordinates": {
        "latitude": 47.6686946,
        "longitude": -122.3329512
      },
      "transactions": [],
      "price": "$$$",
      "location": {
        "address1": "2108 N 55th St",
        "address2": "",
        "address3": "",
        "city": "Seattle",
        "zip_code": "98103",
        "country": "US",
        "state": "WA",
        "display_address": [
          "2108 N 55th St",
          "Seattle, WA 98103"
        ]
      },
      "phone": "+12068121580",
      "display_phone": "(206) 812-1580",
      "distance": 2648.107293758316
    },
    {
      "id": "6OVriioGG7w7Nwq5Q25WtA",
      "alias": "portage-bay-cafe-roosevelt-seattle",
      "name": "Portage Bay Cafe - Roosevelt",
      "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/D1oi0eKTBuRlZiWe_Peejg/o.jpg",
      "is_closed": false,
      "url": "https://www.yelp.com/biz/portage-bay-cafe-roosevelt-seattle?adjust_creative=30c9RjJvoxPpDEtA6bPhLA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=30c9RjJvoxPpDEtA6bPhLA",
      "review_count": 1997,
      "categories": [{
          "alias": "newamerican",
          "title": "American (New)"
        },
        {
          "alias": "breakfast_brunch",
          "title": "Breakfast & Brunch"
        },
        {
          "alias": "cafes",
          "title": "Cafes"
        }
      ],
      "rating": 4,
      "coordinates": {
        "latitude": 47.65757,
        "longitude": -122.3176
      },
      "transactions": [
        "restaurant_reservation"
      ],
      "price": "$$",
      "location": {
        "address1": "4130 Roosevelt Way NE",
        "address2": "",
        "address3": "",
        "city": "Seattle",
        "zip_code": "98105",
        "country": "US",
        "state": "WA",
        "display_address": [
          "4130 Roosevelt Way NE",
          "Seattle, WA 98105"
        ]
      },
      "phone": "+12065478230",
      "display_phone": "(206) 547-8230",
      "distance": 1073.3020873554258
    },
    {
      "id": "5TiNTcy5w_bLRtfVAoH5Bw",
      "alias": "pair-seattle",
      "name": "Pair",
      "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/iuIz5PXHNTDDMeJkrCS7Ww/o.jpg",
      "is_closed": false,
      "url": "https://www.yelp.com/biz/pair-seattle?adjust_creative=30c9RjJvoxPpDEtA6bPhLA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=30c9RjJvoxPpDEtA6bPhLA",
      "review_count": 215,
      "categories": [{
          "alias": "newamerican",
          "title": "American (New)"
        },
        {
          "alias": "french",
          "title": "French"
        },
        {
          "alias": "wine_bars",
          "title": "Wine Bars"
        }
      ],
      "rating": 4,
      "coordinates": {
        "latitude": 47.6686789872273,
        "longitude": -122.294944967567
      },
      "transactions": [],
      "price": "$$",
      "location": {
        "address1": "5501 30th Ave NE",
        "address2": "",
        "address3": "",
        "city": "Seattle",
        "zip_code": "98105",
        "country": "US",
        "state": "WA",
        "display_address": [
          "5501 30th Ave NE",
          "Seattle, WA 98105"
        ]
      },
      "phone": "+12065267655",
      "display_phone": "(206) 526-7655",
      "distance": 1608.6648077432742
    },
    {
      "id": "RS-Hlsx7k90m5QODHDs5Cg",
      "alias": "tapas-lab-seattle",
      "name": "Tapas Lab",
      "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/DXaC5iI9RnLncmSbsV2yRg/o.jpg",
      "is_closed": false,
      "url": "https://www.yelp.com/biz/tapas-lab-seattle?adjust_creative=30c9RjJvoxPpDEtA6bPhLA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=30c9RjJvoxPpDEtA6bPhLA",
      "review_count": 83,
      "categories": [{
          "alias": "tapasmallplates",
          "title": "Tapas/Small Plates"
        },
        {
          "alias": "spanish",
          "title": "Spanish"
        },
        {
          "alias": "asianfusion",
          "title": "Asian Fusion"
        }
      ],
      "rating": 4.5,
      "coordinates": {
        "latitude": 47.67934,
        "longitude": -122.32439
      },
      "transactions": [],
      "price": "$$",
      "location": {
        "address1": "7012 Woodlawn Ave NE",
        "address2": "Unit 3B",
        "address3": "",
        "city": "Seattle",
        "zip_code": "98115",
        "country": "US",
        "state": "WA",
        "display_address": [
          "7012 Woodlawn Ave NE",
          "Unit 3B",
          "Seattle, WA 98115"
        ]
      },
      "phone": "+12067751744",
      "display_phone": "(206) 775-1744",
      "distance": 3084.009400144351
    }
  ]
}
