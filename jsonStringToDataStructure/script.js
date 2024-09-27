// JSON string
const jsonString = '{"name": "John", "age": 30, "city": "New York"}';

// Parse the JSON string into a JavaScript object
const data = JSON.parse(jsonString);

// Display the parsed data in the console (optional)
console.log(data);

// Insert the parsed data into the HTML
window.onload = function() {
    // Access the HTML element with id 'jsonData' and display the data
    document.getElementById('jsonData').innerHTML = `
        <p>Name: ${data.name}</p>
        <p>Age: ${data.age}</p>
        <p>City: ${data.city}</p>
    `;
};
