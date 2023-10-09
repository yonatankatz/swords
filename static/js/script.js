// JavaScript code to initialize and display the map
function initMap() {
    // Create a map object and specify the element where you want to display the map
    var map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 31.444600422329543, lng: 34.384975533751785}, // Specify the initial map center (you can change this)
        zoom: 12 // Specify the initial zoom level (you can change this)
    });

    // You can add markers, polygons, or other map elements here
}

// Initialize the map when the page loads
google.maps.event.addDomListener(window, 'load', initMap);