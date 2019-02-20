
var apiKey = "pk.eyJ1IjoicmFtb25xdSIsImEiOiJjamU4M3l1dWYwOWQ4MnlvMXZ1NTQ4c21oIn0.ael5riwgSHwAvbLZaYps0A"
var apikey2 = "0LKzxfI8zGQo_E4vxANgZOo6ybyHbiJrWlz_p13-MWWL1ONkjODBDTPTry3uzntUrh6nDB7H5wsZlp7DzFXh4lWbiFvdXYpm5uITu9MK-RoJD-doRfbBav7qhBhrXHYx"
var firstTime = false;
var i,j,L;
var lat = 47.65671;
var long =  -122.308914;
var RestaurantList = {};
var searchLocation = "University_of_Washington";
var map;
var selected;
var view;
var timer;
var value = 0;

class myView{
  constructor(){
    this.state = "init";
  }
  switch(name){
    this.state = name;
    this.render();
  }
  render(){
    switch (this.state) {
      case "init":
        $(".reservation").hide();
        $("#map").hide();
        $("#location")[0].scrollIntoView();
        break;
      case "map":
        $(".reservation").hide();
        $("#map").show();
        $("#searchLoc")[0].scrollIntoView();
        break;
      case "reserve":
        $(".reservation").show();
        $("#map").show();
        $(".reservation")[0].scrollIntoView();
        break;
    }
  }
}

function loading(){
  document.getElementById("overlay").style.display = "block";
  $('#indicatorContainer').html("");
  var radialObj = $('#indicatorContainer').radialIndicator({
    radius: 60,
    barWidth: 10,
    barColor: '#343a40',
    minValue: 0,
    maxValue: 100,
    initValue: 0,
    fontWeight: 'normal',
    roundCorner : true,
    displayNumber:false
});
timer = setInterval(function () {
	value += 5;
	if(value > 100){value = 0;}
    radialObj.data('radialIndicator').value(value);
}, 50);
}
function finishLoading(){
  document.getElementById("overlay").style.display = "none";
  clearInterval(timer);
}


function searchRest(){
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position)=>{
      lat = position.coords.latitude;
      long = position.coords.longitude;
      $("#locateme").attr("style","display:block;");
    },()=>{
      $("#locateme").attr("style","display:none;");
    });
  } else {
    $("#locateme").attr("style","display:none;");
  }
}
function reloadMapList(){

  if (!firstTime) {
    genMap();
    formWaitTimeList();
    firstTime = true;
  }else{
    refreshMap();
    formWaitTimeList();
  }
  view.switch("map");
}


function select(num){
  $("#button_error").text("");
  selected = num;
  const buttonGroup = $(".button-group")[0].children[0].children;
  for (j = 0; j < buttonGroup.length; j++) {
    if (j === num) {
      buttonGroup[j].style = "background: #d32323;color:#fff;";
    } else {
      buttonGroup[j].style = "background: #fff;color:#29445B;";
    }
  }
}
$(document).ready(function(){
  view = new myView();
  $("#locateme").attr("style","display:none;");
  searchRest();
  //Intial button/onclick events
  const buttonGroup = $(".button-group")[0].children[0].children;
  for (i=0;i<buttonGroup.length;i++){
      buttonGroup[i].onclick = select.bind(this,i);
  }
//register map and wait list button events
  $("#showmap").click(()=>{
    $("#waitView").hide();
    $("#mapView").show();
  });
  $("#showwait").click(()=>{
    $("#mapView").hide();
    $("#waitView").show();
  });

  $("#updateWait").click(()=>{
    $(".reserve-update").attr("style","display:inherit;");
    $(".no-reserve").attr("style","display:none;");
  });
  
  //register locate Me event
   $("#locateme").click(()=>{
     if(selected === undefined){
       $("#button_error").text("Please select a wait time.");
     }else {
       view.switch("init");
       loading();
       getYelpData(false);
     }
   }
  );
  
  $("#searchLoc").click (()=>{
    if(selected === undefined){
      $("#button_error").text("Please select a wait time.");
    }else {
      if ($("#search_place").val() === ""){
        $("#button_error").text("Please enter a valid location");
      }else {
        $("#button_error").text("");
        view.switch("init");
        searchLocation = $("#search_place").val();
        $("#search_place").val("");
        loading();
        getYelpData(true);
      }
    }
  }
  );
$("#reservation-form").on("submit",(e)=> {
    e.preventDefault();
    $("#reservation-form").attr("style", "display:none;");
    $(".reserve-success").attr("style", "display:inherit;");
  })
});


function showReserve() {
  view.switch("reserve");
}
function genReserve(id) {
  $('.select-restaurant')[0].children[0].innerHTML = RestaurantList[id]["name"];
  var noreserve = $(".no-reserve");
  var reserveSuccess = $(".reserve-success");
  reserveSuccess.attr("style", "display:none;");
  $(".reserve-update").attr("style","display:none");
  if (RestaurantList[id]["wait"] < 4) {
    noreserve.attr("style", "display:none;");
    $("#reservation-form").attr("style", "display:inherit;");
  } else {
    $("#reservation-form").attr("style", "display:none;");
    noreserve.attr("style", "display:inherit;");
  }
  showReserve();
}


function genMap() {
  //TODO: Add reverse GeoCoding to reset the map view.
  map = L.map('mainMap').setView([lat, long], 13);
  L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=' + apiKey, {
    maxZoom: 18,
    id: 'mapbox.light'
  }).addTo(map);
  L.layerGroup(genRestLayer()).addTo(map);
}

function refreshMap(){
  $("#MapWrapper").html("");
  $("#MapWrapper").append($("<div id=\"mainMap\" class=\"mapBox\"></div>"));
  map = L.map('mainMap').setView([lat, long], 13);
  L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=' + apiKey, {
    maxZoom: 18,
    id: 'mapbox.light'
  }).addTo(map);
  L.layerGroup(genRestLayer()).addTo(map);
}

function genRestLayer() {
  let restaurant = [];
  for (i = 0; i < RestaurantList.length; i++) {
    let message = "";
    let rest = RestaurantList[i];
    message += "<h4 class='mapMarker' onclick='return genReserve("+i+");'>" + rest["name"] + "</h4><br>" +
      "Rating: " + rest['rating'].toString() + "/5.";
    if (rest["price"] !== undefined) {
      message += "Price: " + rest["price"] + "<br>";
    } else {
      message += "<br>";
    }
    message +="Wait Time: ";
    let waitTime = rest["wait"];
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
  rand = parseWaitTime(rand);
  RestaurantList["businesses"][rest]["wait"] = rand;
  return rand
}

function parseWaitTime(min) {
  /*Input a time between 0 minute  - 120 minutes and return number of wait icon */
  return Math.round(min / 120.0 * 5).toString();
}

function formWaitTimeList() {
  let waitTimeTable = $("#waitTimeTable");
  waitTimeTable.empty();
  waitTimeTable.append($("<thead><tr><th class='col'>Restaurant Name</th><th class='col'>Current Wait time</th></tr></thead>"));
  let tableContent = $("<tbody></tbody>");
  for (i = 0; i < RestaurantList.length; i++) {
    let rest = RestaurantList[i];
    let tr = $("<tr></tr>");
    tr.addClass("marker");
    tr.attr("id","marker" + i);
    let td = $("<td></td>");
    td.text(rest["name"]);
    tr.append(td);
    td = $("<td></td>");
    let waitTime = rest["wait"];
    for (j = 0; j < waitTime; j++) {
     td.append($("<span class='fas fa-clock'></span>"));
    }
    for (j = 0; j < 5 - waitTime; j++) {
      td.append($('<span class="far fa-clock"></span>'));
    }
    tr.append(td);
    tableContent.append(tr);
  }
  waitTimeTable.append(tableContent);

  let markers = $(".marker");
  for (i=0;i<markers.length;i++){
    markers[i].onclick = genReserve.bind(this,eval(markers[i].id.substring(6)));
  }
}

function getYelpData(useLoc) {
  let url = "https://cors-anywhere.herokuapp.com/http://api.yelp.com/v3/businesses/search?open_now=true&term=restaurant";
  //Because Yelp API blocked the CORS from front end directly, has to use this trick to call this api from front-end
  if (useLoc) {
    url += "&location=" + searchLocation;
  } else {
    url += "&latitude=" + lat + "&longitude=" + long;
  }
  var settings = {
    "async": true,
    "crossDomain": true,
    url: url,
    method: "GET",
    headers: {
      "Authorization": "Bearer " + apikey2
    }
  };

  $.ajax(settings).done(function (response) {
    RestaurantList = response;
    for (i = 0; i < RestaurantList["businesses"].length; i++) {
      getWaitTime(i);
    }
    RestaurantList = RestaurantList["businesses"].filter(rest => rest.wait <= selected);

    reloadMapList();
    finishLoading();
  });
}




