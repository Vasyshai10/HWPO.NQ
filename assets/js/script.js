// Define the generateText function
function generateText() {
    // Ensure the element exists
    var outputElement = document.getElementById("output");

    if (outputElement) {
        outputElement.innerHTML = "Text generated!";
    } else {
        console.error('Element with id "output" not found.');
    }
}
