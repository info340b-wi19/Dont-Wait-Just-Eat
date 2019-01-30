function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  }
}

function locateme(){

  var elmnt = document.getElementById("map");
  elmnt.scrollIntoView();
}

function search(){

}