// Function to send the user input to the backend and get a response
async function generateText() {
    const userInput = document.getElementById('userInput').value;
    const responseElement = document.getElementById('response');

    // Clear any previous response
    responseElement.innerHTML = "Generating text...";

    try {
        const response = await fetch('http://localhost:3000/generate-text', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ input: userInput })
        });

        const data = await response.json();

        // Display the generated text (or error message)
        if (data && data[0] && data[0].generated_text) {
            responseElement.innerHTML = `<strong>Generated Text:</strong> ${data[0].generated_text}`;
        } else {
            responseElement.innerHTML = "<strong>Error:</strong> Unable to generate text.";
        }
    } catch (error) {
        responseElement.innerHTML = "<strong>Error:</strong> Something went wrong!";
    }
}
