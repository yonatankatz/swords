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

    const infoWindows = [];

    window.targets_data.targets.forEach((target) => {
        const tutu = new google.maps.Marker({
            position: target.coordinates,
            map: map,
            title: target.title
        });

        const infoWindow = new google.maps.InfoWindow({
            content: `<div style='text-align:right;'><p><a target="_blank" href='${target.link}'>${target.title}<a/></p><p><img src='${target.media_internal_link}' alt='${target.title}' width='200' height='150'></p></div>`,
        });

        tutu.addListener("click", () => {
            infoWindows.forEach(iw => iw.close());
            infoWindow.open(map, tutu);
        });

        infoWindows.push(infoWindow);
    });

}

// Initialize the map when the page loads
google.maps.event.addDomListener(window, 'load', function() {setTimeout(initMap, 1000)});
