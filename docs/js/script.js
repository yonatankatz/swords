// Initialize the map
function initMap() {
  // Define the coordinates for the center of the map
  const mapCenter = { lat: 31.450149192409036, lng: 34.39286613512793 }; // Example: San Francisco, CA

  // Create a new map instance and set its center and zoom level
  const map = new google.maps.Map(document.getElementById("map"), {
    center: mapCenter,
    zoom: isMobile() ? 12.7 : 12,
    gestureHandling: "greedy",
  });

  const markers = [
  { lat: 31.427893084378482, lng: 34.37592153173533 },
  { lat: 31.418053677107668, lng: 34.353205446794874 },
  { lat: 31.500407097132214, lng: 34.43158149461433 },
  { lat: 31.48268352052024, lng: 34.41767696562316 },
  { lat: 31.45073496394814, lng: 34.39269435710077 },
];

const infoWindows = [];

  markers.forEach((marker) => {
    const tutu = new google.maps.Marker({
        position: marker,
        map: map,
        title: 'איזור הפצצה'
    });

    const infoWindow = new google.maps.InfoWindow({
        content: "<img src='rooster.gif' alt='Image 1' width='200' height='150'>",
    });

    tutu.addListener("click", () => {
        infoWindows.forEach(iw => iw.close());
        infoWindow.open(map, tutu);
    });

    infoWindows.push(infoWindow);
});

}

// Initialize the map when the page loads
google.maps.event.addDomListener(window, 'load', initMap);