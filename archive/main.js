
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


$(document).ready(function(){
  view = new myView();

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







