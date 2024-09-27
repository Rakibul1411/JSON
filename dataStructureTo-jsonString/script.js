// JavaScript object (data structure)
const data = {
  name: "John",
  age: 30,
  city: "New York"
};

// Convert the JavaScript object to a JSON string
const jsonString = JSON.stringify(data);

// Log the JSON string to the console
console.log(jsonString);

// Insert the JSON string into the HTML
window.onload = function() {
  // Access the HTML element with id 'jsonOutput' and display the JSON string
  document.getElementById('jsonOutput').innerText = jsonString;
};
