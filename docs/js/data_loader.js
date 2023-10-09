// Specify the URL of the remote JSON file
const url = 'https://beat-hamas.com/data/targets.json';

// Create a new XMLHttpRequest object
const xhr = new XMLHttpRequest();

// Configure the GET request
xhr.open('GET', url, true);

// Set up an event listener to handle the response
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4) {
    // Check if the status code is OK (200)
    if (xhr.status === 200) {
      // Parse the response as JSON
      const data = JSON.parse(xhr.responseText);

      // Use the JSON data
      console.log(data);
      window.targets_data = data;
    } else {
      // Handle errors if the request was not successful
      console.error('HTTP error! Status:', xhr.status);
    }
  }
};

// Send the request
xhr.send();