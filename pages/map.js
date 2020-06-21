var map;
function initMap(){
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 40.0519752, lng: -76.314270999999},
    zoom: 15 // typical is usually 8 or 9
  });
}// end initMap function