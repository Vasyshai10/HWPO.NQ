import express from 'express';
import fetch from 'node-fetch';

const app = express();
const port = 3000;

app.use(express.json());

// Define the endpoint to handle the API request from the frontend
app.post("/generate-text", async (req, res) => {
  const userInput = req.body.input;

  try {
    const response = await fetch("https://api-inference.huggingface.co/models/EleutherAI/gpt-j-6b", {
      method: 'POST',
      headers: {
        'Authorization': `Bearer YOUR_API_KEY` // Replace with your Hugging Face API token
      },
      body: JSON.stringify({
        inputs: userInput
      })
    });

    const data = await response.json();
    res.json(data); // Send the response back to the frontend
  } catch (error) {
    res.status(500).json({ error: "Something went wrong." });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
